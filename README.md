# AI Sathi
AI Sathi is a learning platform designed and built for rural India to be able to access without internet or good infrastructure.

## Features
- 🌐 Trilingual support (Hindi, Kannada, English)
- 📚 NCERT-aligned curriculum (Grade 5 Maths & Science)
- 🎮 Duolingo-style card-based learning
- 🤖 AI-powered question answering
- 📱 Works offline (PWA support)
- 🎯 Built with SLM (Small Language Models) in mind

## Setup

### Development
```bash
npm install
npm run dev
```

### Environment Variables (Optional)
Create a `.env` file in the root directory:

```env
# Gemini API Key (Optional - for AI chat features)
# Get your free API key from: https://makersuite.google.com/app/apikey
# If not provided, the app will use fallback responses
VITE_GEMINI_API_KEY=your_api_key_here
```

**Note:** The app works perfectly fine without the API key! It will use smart fallback responses for common questions.

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router
- Gemini API (temporary, will be replaced with local SLM)

