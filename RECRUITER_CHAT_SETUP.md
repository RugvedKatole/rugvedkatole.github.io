# 🎯 Recruiter AI Chat Setup Guide

This guide explains how to set up the AI-powered recruiter chat feature on your portfolio website.

## Overview

The recruiter chat feature provides an interactive AI assistant that:
- Analyzes job descriptions against your profile
- Provides detailed fit scores and analysis
- Highlights relevant experience and quantifiable achievements
- Generates visual skills match charts
- Offers next-step CTAs (resume download, interview scheduling, LinkedIn)

## Architecture

### Frontend
- **Location**: `/recruiter-chat`
- **Technology**: Astro page with TypeScript
- **Features**:
  - Job description input (text or file upload)
  - Real-time chat interface
  - Animated fit score display
  - Skills radar chart visualization
  - Exit CTAs for recruiters

### Backend (Serverless Functions)
- **Location**: `/api/*`
- **Technology**: Vercel/Netlify serverless functions
- **Endpoints**:
  - `POST /api/analyze-fit` - Main analysis endpoint
  - `GET /api/health` - Health check and config status

### Data
- **Profile Data**: `/src/data/profile.json`
- **Contains**: Your education, projects, skills, achievements, publications

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

Vercel provides free hosting for static sites + serverless functions, perfect for this use case.

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Configure Environment Variables
Create a `.env.local` file (don't commit this!):
```env
# Choose your LLM provider
LLM_PROVIDER=anthropic  # Options: anthropic, openai, google, together

# Add the corresponding API key
ANTHROPIC_API_KEY=your_key_here
# OR
OPENAI_API_KEY=your_key_here
# OR
GOOGLE_AI_API_KEY=your_key_here
# OR
TOGETHER_API_KEY=your_key_here
```

#### Step 3: Deploy
```bash
vercel
```

Follow the prompts to:
1. Link to your GitHub repository
2. Set your environment variables in the Vercel dashboard
3. Deploy!

#### Step 4: Configure Vercel Environment
1. Go to your Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add your API keys:
   - Variable: `LLM_PROVIDER` → Value: `anthropic` (or your choice)
   - Variable: `ANTHROPIC_API_KEY` → Value: `your_actual_api_key`

4. Redeploy to apply changes

### Option 2: Deploy to Netlify

Similar to Vercel, Netlify supports serverless functions.

#### Step 1: Configure Netlify Functions
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[functions]
  directory = "api"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

#### Step 2: Set Environment Variables
In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add:
   - `LLM_PROVIDER=anthropic`
   - `ANTHROPIC_API_KEY=your_key`

#### Step 3: Deploy
```bash
netlify deploy --prod
```

### Option 3: Hybrid Approach (GitHub Pages + Separate API)

Keep your portfolio on GitHub Pages and deploy only the API separately.

#### Deploy API to Vercel
1. Create a new GitHub repository for the API only
2. Move the `/api` folder to this new repo
3. Deploy to Vercel
4. Get your API URL (e.g., `https://your-api.vercel.app`)

#### Update Frontend
In `/src/pages/recruiter-chat.astro`, update the API base URL:
```typescript
const API_BASE_URL = 'https://your-api.vercel.app';

async function analyzeJobFit(jobDescription: string) {
  const response = await fetch(`${API_BASE_URL}/api/analyze-fit`, {
    method: 'POST',
    // ... rest of the code
  });
}
```

## LLM Provider Setup

### Anthropic Claude (Recommended)

**Why?** Best balance of quality, cost, and response time for this use case.

1. Sign up at https://console.anthropic.com/
2. Get API key from the dashboard
3. Current model: `claude-3-5-sonnet-20241022`
4. Pricing: ~$3 per 1M tokens (very affordable)

**Environment Variables:**
```env
LLM_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-xxx...
```

### OpenAI GPT-4

1. Sign up at https://platform.openai.com/
2. Create API key
3. Current model: `gpt-4-turbo-preview`
4. Pricing: ~$10 per 1M tokens

**Environment Variables:**
```env
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-xxx...
```

### Google Gemini

1. Get API key from https://makersuite.google.com/app/apikey
2. Current model: `gemini-pro`
3. Pricing: Free tier available, then pay-as-you-go

**Environment Variables:**
```env
LLM_PROVIDER=google
GOOGLE_AI_API_KEY=xxx...
```

### Together AI (Llama, etc.)

1. Sign up at https://api.together.xyz/
2. Get API key
3. Access to Llama and other open-source models
4. Pricing: Varies by model

**Environment Variables:**
```env
LLM_PROVIDER=together
TOGETHER_API_KEY=xxx...
```

## Testing

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up `.env.local` with your API key

3. Run locally:
```bash
# For Vercel
vercel dev

# OR for Astro only (demo mode)
npm run dev
```

4. Visit `http://localhost:4321/recruiter-chat`

### Demo Mode

If no API is configured, the chat will run in "demo mode":
- Uses basic keyword matching
- Provides simulated analysis
- Useful for testing UI without API costs

### Testing with Real API

1. Ensure your API key is set
2. Visit `/recruiter-chat`
3. Paste a sample job description
4. Click "Analyze Fit"
5. Verify the analysis is generated

Sample job description for testing:
```
We're looking for a Robotics Research Scientist with expertise in:
- Multi-agent reinforcement learning
- Autonomous navigation systems
- Computer vision and depth sensing
- Real-world robotics deployment
- PyTorch/TensorFlow experience
- Publication record preferred
- PhD in Computer Science or related field

You'll be working on cutting-edge autonomous agricultural robots.
```

## Customization

### Update Profile Data

Edit `/src/data/profile.json` to keep your information current:
- Add new projects
- Update achievements
- Add publications
- Modify skills and expertise

### Customize Prompt Engineering

Edit the `buildAnalysisPrompt()` function in `/api/analyze-fit.ts` to:
- Change analysis criteria
- Adjust scoring weights
- Modify output format
- Add custom instructions

### Adjust UI/UX

Modify `/src/pages/recruiter-chat.astro` to:
- Change colors and styling
- Add/remove sections
- Customize CTAs
- Modify conversation flow

## Cost Estimation

Based on typical usage:

### Anthropic Claude
- Average analysis: ~2,000 tokens (~$0.006)
- 100 recruiter chats/month: ~$0.60/month
- Very affordable for a portfolio site

### OpenAI GPT-4
- Average analysis: ~2,000 tokens (~$0.02)
- 100 recruiter chats/month: ~$2/month

### Free Tier Options
- Vercel: 100GB bandwidth/month free
- Netlify: 100GB bandwidth/month free
- Google Gemini: 60 requests/minute free tier

## Security Best Practices

1. **Never commit API keys**
   - Add `.env.local` to `.gitignore`
   - Use environment variables in production

2. **Rate limiting**
   - Consider adding rate limits to prevent abuse
   - Vercel/Netlify have built-in protections

3. **Input validation**
   - Job descriptions are validated before sending to LLM
   - File uploads are sanitized

4. **Privacy**
   - Recruiter emails are optional
   - No data is stored without consent
   - All conversations are ephemeral (not saved)

## Troubleshooting

### Issue: "API not configured" message

**Solution**: Check that:
1. Environment variables are set correctly
2. API key is valid
3. Vercel/Netlify build completed successfully

### Issue: Slow responses

**Solution**:
1. Check your LLM provider's status page
2. Consider using a faster model (e.g., Claude Haiku)
3. Reduce max_tokens in the API call

### Issue: Analysis quality is poor

**Solution**:
1. Update your profile data with more specific metrics
2. Adjust the prompt in `buildAnalysisPrompt()`
3. Try a different LLM model

### Issue: CORS errors

**Solution**:
- Ensure CORS headers are set in API routes
- Check Vercel/Netlify configuration

## Monitoring

### Track Usage

1. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - Track API calls and response times

2. **LLM Provider Dashboard**:
   - Monitor API usage
   - Track costs
   - Set spending limits

3. **Custom Logging** (Optional):
   - Add logging to analyze common JD themes
   - Track which skills are most requested
   - Privacy-first: anonymize data

## Future Enhancements

Ideas to expand this feature:

1. **Resume Generation**
   - Auto-generate tailored resumes based on JD
   - PDF export with custom formatting

2. **Multi-turn Conversations**
   - Store conversation history
   - Enable deeper Q&A

3. **Analytics Dashboard**
   - Track which companies are interested
   - Identify trending skills in your JD history

4. **Email Integration**
   - Auto-send analysis to recruiter email
   - CC yourself for tracking

5. **Calendar Integration**
   - Direct Calendly/Google Calendar booking
   - Auto-scheduling based on availability

## Support

For issues or questions:
1. Check this documentation
2. Review Vercel/Netlify docs
3. Check LLM provider documentation
4. Open an issue on GitHub

## License

This feature is part of your portfolio and can be customized freely.

---

**Ready to deploy?** Start with Option 1 (Vercel) for the easiest setup! 🚀
