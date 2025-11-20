# SLM Pre-loading Flow Diagram

## Application Startup Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Opens App                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                         App.tsx                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │              QueryClientProvider                          │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │           LanguageProvider                          │  │  │
│  │  │  ┌───────────────────────────────────────────────┐  │  │  │
│  │  │  │         TooltipProvider                       │  │  │  │
│  │  │  │  ┌─────────────────────────────────────────┐  │  │  │  │
│  │  │  │  │        BrowserRouter                    │  │  │  │  │
│  │  │  │  │  ┌───────────────────────────────────┐  │  │  │  │  │
│  │  │  │  │  │   ModelLoadingWrapper             │  │  │  │  │  │
│  │  │  │  │  │                                   │  │  │  │  │  │
│  │  │  │  │  │   [Checks if model is loaded]    │  │  │  │  │  │
│  │  │  │  │  └───────────────────────────────────┘  │  │  │  │  │
│  │  │  │  └─────────────────────────────────────────┘  │  │  │  │
│  │  │  └───────────────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    ┌─────────────────┐
                    │ Model Loaded?   │
                    └─────────────────┘
                       ↓           ↓
                    NO ↓           ↓ YES
                       ↓           ↓
        ┌──────────────────┐      │
        │  AIModelLoader   │      │
        │                  │      │
        │  ┌────────────┐  │      │
        │  │  Mascot    │  │      │
        │  │   Image    │  │      │
        │  └────────────┘  │      │
        │                  │      │
        │  AI Sathi        │      │
        │  Status Message  │      │
        │                  │      │
        │  [████████░░] 80%│      │
        │  Progress Bar    │      │
        │                  │      │
        │  First time:     │      │
        │  ~80MB download  │      │
        └──────────────────┘      │
                ↓                 │
        ┌──────────────────┐      │
        │ Load Qwen Model  │      │
        │  via WebLLM      │      │
        └──────────────────┘      │
                ↓                 │
        ┌──────────────────┐      │
        │ Store in Context │      │
        │ setAiPipeline()  │      │
        └──────────────────┘      │
                ↓                 │
                └─────────────────┘
                        ↓
        ┌───────────────────────────────┐
        │   Render App Routes           │
        │                               │
        │   ┌─────────────────────┐     │
        │   │ / (ClassSelection)  │     │
        │   ├─────────────────────┤     │
        │   │ /subjects           │     │
        │   ├─────────────────────┤     │
        │   │ /maths-chapters     │     │
        │   ├─────────────────────┤     │
        │   │ /science-chapters   │     │
        │   ├─────────────────────┤     │
        │   │ /chat               │     │
        │   └─────────────────────┘     │
        │                               │
        │   Model available globally    │
        │   via useLanguage() hook      │
        └───────────────────────────────┘
```

## Component Hierarchy

```
App
├── QueryClientProvider
│   └── LanguageProvider (stores aiPipeline)
│       └── TooltipProvider
│           ├── Toaster
│           ├── Sonner
│           └── BrowserRouter
│               └── ModelLoadingWrapper
│                   ├── [Loading State]
│                   │   └── AIModelLoader
│                   │       ├── Progress indicator
│                   │       ├── Status messages
│                   │       └── Model loading logic
│                   │
│                   └── [Loaded State]
│                       └── Routes
│                           ├── ClassSelection
│                           ├── Subjects
│                           ├── MathsChapters
│                           ├── ScienceChapters
│                           └── Chat
```

## Data Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    Model Loading Process                      │
└──────────────────────────────────────────────────────────────┘

1. ModelLoadingWrapper mounts
   ↓
2. isModelLoaded = false
   ↓
3. Render AIModelLoader component
   ↓
4. AIModelLoader.useEffect() triggers
   ↓
5. Check WebGPU availability
   ↓
6. CreateMLCEngine("Qwen2.5-0.5B-Instruct-q4f16_1-MLC")
   ↓
7. Progress callbacks update UI (0% → 100%)
   ↓
8. onModelLoaded(engine) callback fires
   ↓
9. setAiPipeline(engine) → stores in LanguageContext
   ↓
10. setIsModelLoaded(true) → triggers re-render
   ↓
11. ModelLoadingWrapper renders children (Routes)
   ↓
12. All pages can access model via useLanguage().aiPipeline
```

## Model Usage Across Pages

```
┌─────────────────────────────────────────────────────────────┐
│                    LanguageContext                           │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  aiPipeline: MLCEngine | null                          │ │
│  │  setAiPipeline: (pipeline) => void                     │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          ↓
        ┌─────────────────┴─────────────────┐
        ↓                 ↓                  ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Chat.tsx   │  │ Subjects.tsx │  │ Chapters.tsx │
│              │  │              │  │              │
│ const {      │  │ const {      │  │ const {      │
│  aiPipeline  │  │  aiPipeline  │  │  aiPipeline  │
│ } = use      │  │ } = use      │  │ } = use      │
│ Language();  │  │ Language();  │  │ Language();  │
│              │  │              │  │              │
│ • RAG chat   │  │ • Pass to    │  │ • Pass to    │
│ • AI tutor   │  │   routes     │  │   chat       │
│ • Translation│  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

## Error Handling Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    Error Scenarios                            │
└──────────────────────────────────────────────────────────────┘

Scenario 1: WebGPU Not Available
   ↓
   Check: "gpu" in navigator
   ↓
   FALSE → throw Error("WebGPU is not supported")
   ↓
   catch block → setStatus("Error loading model")
   ↓
   onModelLoaded(null) → App works with fallback responses

Scenario 2: Model Download Fails
   ↓
   CreateMLCEngine() throws error
   ↓
   catch block → console.error() + setStatus("Error loading model")
   ↓
   onModelLoaded(null) → App works with fallback responses

Scenario 3: Network Offline (after first load)
   ↓
   Model cached in browser
   ↓
   CreateMLCEngine() loads from cache
   ↓
   Success → Full functionality available offline
```

## Key Benefits Visualization

```
┌────────────────────────────────────────────────────────────────┐
│                    Before vs After                              │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  BEFORE (Multiple Loading Screens):                            │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                    │
│  │ Home    │ →  │ Loading │ →  │ Subjects│                    │
│  └─────────┘    └─────────┘    └─────────┘                    │
│                                      ↓                          │
│                                 ┌─────────┐                    │
│                                 │ Loading │                    │
│                                 └─────────┘                    │
│                                      ↓                          │
│                                 ┌─────────┐                    │
│                                 │  Chat   │                    │
│                                 └─────────┘                    │
│                                                                 │
│  AFTER (Single Loading Screen):                                │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    │
│  │ Loading │ →  │ Home    │ →  │ Subjects│ →  │  Chat   │    │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    │
│                                                                 │
│  ✓ Model loaded once                                           │
│  ✓ Available everywhere                                        │
│  ✓ Better UX                                                    │
└────────────────────────────────────────────────────────────────┘
```
