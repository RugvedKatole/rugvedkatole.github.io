/**
 * Serverless function for analyzing job fit using LLM
 * Compatible with Vercel Edge Functions and Netlify Functions
 *
 * Supports multiple LLM providers:
 * - Anthropic Claude (recommended)
 * - OpenAI GPT-4
 * - Google Gemini
 * - Meta Llama via Together AI
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

// Types
interface AnalysisRequest {
  jobDescription: string;
  profileData: any;
}

interface AnalysisResponse {
  score: number;
  strengths: string[];
  opportunities: string[];
  considerations: string[];
  skillsMatch: Record<string, number>;
  detailedAnalysis?: string;
}

// Environment variables to set:
// LLM_PROVIDER: 'anthropic' | 'openai' | 'google' | 'together'
// ANTHROPIC_API_KEY: Your Claude API key
// OPENAI_API_KEY: Your OpenAI API key
// GOOGLE_AI_API_KEY: Your Gemini API key
// TOGETHER_API_KEY: Your Together AI API key

const LLM_PROVIDER = process.env.LLM_PROVIDER || 'anthropic';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { jobDescription, profileData }: AnalysisRequest = req.body;

    if (!jobDescription || !profileData) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Build the prompt for LLM
    const prompt = buildAnalysisPrompt(jobDescription, profileData);

    // Call appropriate LLM
    let analysis: AnalysisResponse;

    switch (LLM_PROVIDER) {
      case 'anthropic':
        analysis = await analyzeWithClaude(prompt);
        break;
      case 'openai':
        analysis = await analyzeWithOpenAI(prompt);
        break;
      case 'google':
        analysis = await analyzeWithGemini(prompt);
        break;
      case 'together':
        analysis = await analyzeWithTogetherAI(prompt);
        break;
      default:
        throw new Error(`Unsupported LLM provider: ${LLM_PROVIDER}`);
    }

    return res.status(200).json(analysis);
  } catch (error: any) {
    console.error('Analysis error:', error);
    return res.status(500).json({
      error: 'Analysis failed',
      message: error.message
    });
  }
}

// Build comprehensive prompt for LLM
function buildAnalysisPrompt(jobDescription: string, profileData: any): string {
  return `You are an AI recruiter assistant analyzing candidate fit for a job role.

CANDIDATE PROFILE:
${JSON.stringify(profileData, null, 2)}

JOB DESCRIPTION:
${jobDescription}

TASK:
Analyze how well this candidate's background aligns with the job requirements. Provide:

1. **Overall Fit Score** (0-100): A numerical score representing alignment
2. **Key Strengths** (3-5 points): Specific areas where the candidate excels for this role
3. **Unique Value Propositions** (3-4 points): What the candidate brings that sets them apart
4. **Considerations** (2-3 points): Important factors to consider (e.g., timeline, location, focus areas)
5. **Skills Match** (6 categories): Rate 0-100 for each:
   - AI/ML expertise
   - Robotics experience
   - Computer Vision
   - Multi-Agent Systems
   - Real-world Deployment
   - Research & Innovation

IMPORTANT GUIDELINES:
- Be honest and objective - don't oversell or undersell
- Focus on quantifiable achievements and concrete examples
- Highlight technical alignment with job requirements
- Consider both current capabilities and growth potential
- Keep language professional and recruiter-friendly
- Use specific metrics from the candidate's projects when relevant
- Be concise but thorough (3-5 exchanges max before recommending next steps)

OUTPUT FORMAT (JSON):
{
  "score": number,
  "strengths": ["strength 1", "strength 2", ...],
  "opportunities": ["unique value 1", "unique value 2", ...],
  "considerations": ["consideration 1", "consideration 2", ...],
  "skillsMatch": {
    "AI/ML": number,
    "Robotics": number,
    "Computer Vision": number,
    "Multi-Agent Systems": number,
    "Deployment": number,
    "Research": number
  }
}

Provide ONLY the JSON output, no additional text.`;
}

// Anthropic Claude integration
async function analyzeWithClaude(prompt: string): Promise<AnalysisResponse> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not configured');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Claude API error: ${error}`);
  }

  const data = await response.json();
  const content = data.content[0].text;

  return parseAnalysisResponse(content);
}

// OpenAI GPT-4 integration
async function analyzeWithOpenAI(prompt: string): Promise<AnalysisResponse> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY not configured');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are an AI recruiter assistant. Provide analysis in JSON format only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${error}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  return parseAnalysisResponse(content);
}

// Google Gemini integration
async function analyzeWithGemini(prompt: string): Promise<AnalysisResponse> {
  const apiKey = process.env.GOOGLE_AI_API_KEY;

  if (!apiKey) {
    throw new Error('GOOGLE_AI_API_KEY not configured');
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${error}`);
  }

  const data = await response.json();
  const content = data.candidates[0].content.parts[0].text;

  return parseAnalysisResponse(content);
}

// Together AI (for Llama and other models) integration
async function analyzeWithTogetherAI(prompt: string): Promise<AnalysisResponse> {
  const apiKey = process.env.TOGETHER_API_KEY;

  if (!apiKey) {
    throw new Error('TOGETHER_API_KEY not configured');
  }

  const response = await fetch('https://api.together.xyz/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'meta-llama/Llama-3-70b-chat-hf',
      messages: [
        {
          role: 'system',
          content: 'You are an AI recruiter assistant. Provide analysis in JSON format only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Together AI API error: ${error}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  return parseAnalysisResponse(content);
}

// Parse LLM response into structured format
function parseAnalysisResponse(content: string): AnalysisResponse {
  try {
    // Extract JSON from response (handles cases where LLM adds extra text)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }

    const parsed = JSON.parse(jsonMatch[0]);

    // Validate required fields
    if (typeof parsed.score !== 'number') {
      throw new Error('Invalid score in response');
    }

    return {
      score: Math.min(100, Math.max(0, parsed.score)),
      strengths: parsed.strengths || [],
      opportunities: parsed.opportunities || [],
      considerations: parsed.considerations || [],
      skillsMatch: parsed.skillsMatch || {},
    };
  } catch (error: any) {
    console.error('Parse error:', error);
    throw new Error(`Failed to parse LLM response: ${error.message}`);
  }
}
