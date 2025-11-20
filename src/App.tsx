import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ModelLoadingWrapper } from "@/components/ModelLoadingWrapper";
import ClassSelection from "./pages/ClassSelection";
import Subjects from "./pages/Subjects";
import Chat from "./pages/Chat";
import ScienceChapters from "./pages/ScienceChapters";
import MathsChapters from "./pages/MathsChapters";
import NotFound from "./pages/NotFound";

// Language Learning Module
import LanguageLearningHub from "./pages/LanguageLearning/LanguageLearningHub";
import LanguageSelect from "./pages/LanguageLearning/LanguageSelect";
import LiteracyAssessment from "./pages/LanguageLearning/LiteracyAssessment";
import PictureDictionary from "./pages/LanguageLearning/PictureDictionary";
import LessonsList from "./pages/LanguageLearning/LessonsList";
import LessonView from "./pages/LanguageLearning/LessonView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ModelLoadingWrapper loads the SLM before showing any routes */}
          <ModelLoadingWrapper>
            <Routes>
              <Route path="/" element={<ClassSelection />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/science-chapters" element={<ScienceChapters />} />
              <Route path="/maths-chapters" element={<MathsChapters />} />

              {/* Language Learning Routes */}
              <Route path="/language-learning" element={<LanguageLearningHub />} />
              <Route path="/language-learning/select" element={<LanguageSelect />} />
              <Route path="/language-learning/assessment" element={<LiteracyAssessment />} />
              <Route path="/language-learning/dictionary" element={<PictureDictionary />} />
              <Route path="/language-learning/lessons/:language" element={<LessonsList />} />
              <Route path="/language-learning/lesson/:lessonId" element={<LessonView />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ModelLoadingWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
