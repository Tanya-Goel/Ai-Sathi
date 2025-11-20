import { useState, useEffect, ReactNode } from "react";
import { AIModelLoader } from "@/components/AIModelLoader";
import { useLanguage } from "@/contexts/LanguageContext";

interface ModelLoadingWrapperProps {
    children: ReactNode;
}

/**
 * Wrapper component that loads the SLM model before rendering children.
 * Shows the AIModelLoader screen until the model is ready.
 */
export const ModelLoadingWrapper = ({ children }: ModelLoadingWrapperProps) => {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const { setAiPipeline } = useLanguage();

    if (!isModelLoaded) {
        return (
            <AIModelLoader
                onModelLoaded={(engine) => {
                    setAiPipeline(engine);
                    setIsModelLoaded(true);
                }}
            />
        );
    }

    return <>{children}</>;
};
