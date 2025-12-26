/**
 * Health check endpoint for API
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const llmProvider = process.env.LLM_PROVIDER || 'none';
  const hasApiKey = Boolean(
    process.env.ANTHROPIC_API_KEY ||
    process.env.OPENAI_API_KEY ||
    process.env.GOOGLE_AI_API_KEY ||
    process.env.TOGETHER_API_KEY
  );

  return res.status(200).json({
    status: 'ok',
    provider: llmProvider,
    configured: hasApiKey,
    timestamp: new Date().toISOString(),
  });
}
