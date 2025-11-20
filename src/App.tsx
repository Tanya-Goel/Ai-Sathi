import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClassSelection from "./pages/ClassSelection";
import Subjects from "./pages/Subjects";
import Chat from "./pages/Chat";
import ScienceChapters from "./pages/ScienceChapters";
import MathsChapters from "./pages/MathsChapters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClassSelection />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/science-chapters" element={<ScienceChapters />} />
            <Route path="/maths-chapters" element={<MathsChapters />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
