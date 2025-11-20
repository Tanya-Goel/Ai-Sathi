import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";
import { pipeline, env } from "@huggingface/transformers";

interface AIModelLoaderProps {
  onModelLoaded: (pipelines: { mathModel: any; textModel: any }) => void;
}

export const AIModelLoader = ({ onModelLoaded }: AIModelLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing AI model...");

  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log("🚀 Starting model loading process...");
        
        // Force WASM backend for better compatibility (disable WebGPU to avoid errors)
        env.backends.onnx.wasm.numThreads = 4;
        env.allowLocalModels = false;
        env.allowRemoteModels = true;
        
        setStatus("Preparing AI models (CPU mode)...");
        setProgress(10);
        
        console.log("ℹ️ Using WASM backend for maximum compatibility");
        setProgress(20);
        
        // Load Math Model - Specialized for mathematical reasoning
        // Using Flan-T5 Small (77M params) - excellent for math problems
        console.log("📥 Loading Math Model (Flan-T5)...");
        setStatus("Downloading math model (77MB)...");
        const mathModel = await pipeline(
          "text2text-generation",
          "Xenova/flan-t5-small",
          { 
            device: "wasm",
            dtype: "q8",
            progress_callback: (progress: any) => {
              if (progress.status === "progress" && progress.progress) {
                const mathProgress = 20 + (progress.progress * 30);
                setProgress(mathProgress);
                console.log(`Math model: ${Math.round(progress.progress * 100)}%`);
              }
            }
          }
        );
        
        console.log("✅ Math Model loaded successfully!");
        setProgress(50);
        
        // Load Text Model - For explanations and conversations
        // Using DistilGPT-2 - smaller, faster, well-supported by Transformers.js
        console.log("📥 Loading Text Model (DistilGPT-2)...");
        setStatus("Downloading explanation model (82M params)...");
        const textModel = await pipeline(
          "text-generation",
          "Xenova/distilgpt2",
          { 
            device: "wasm",
            dtype: "q8",
            progress_callback: (progress: any) => {
              if (progress.status === "progress" && progress.progress) {
                const textProgress = 50 + (progress.progress * 45);
                setProgress(textProgress);
                console.log(`Text model: ${Math.round(progress.progress * 100)}%`);
              }
            }
          }
        );
        
        console.log("✅ Text Model loaded successfully!");
        setProgress(95);
        setStatus("Finalizing setup...");
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProgress(100);
        setStatus("Ready! AI models loaded 🚀");
        
        console.log("✅ ALL MODELS READY!");
        console.log("Math Model type:", typeof mathModel);
        console.log("Text Model type:", typeof textModel);
        
        setTimeout(() => {
          console.log("🎉 Passing models to parent component");
          onModelLoaded({ mathModel, textModel });
        }, 300);
        
      } catch (error) {
        console.error("❌ ERROR LOADING MODELS:");
        console.error(error);
        
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setStatus(`Error: ${errorMessage.substring(0, 80)}...`);
        setProgress(0);
        
        console.log("⚠️ Falling back to rule-based responses");
        setTimeout(() => onModelLoaded({ mathModel: null, textModel: null }), 500);
      }
    };

    loadModel();
  }, [onModelLoaded]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-background to-primary/5">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-3">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Loader2 className="w-10 h-10 text-white animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">AI Sathi</h2>
          <p className="text-muted-foreground">{status}</p>
        </div>
        
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-center text-muted-foreground">{progress}% complete</p>
        </div>
        
        <div className="p-4 bg-card rounded-xl border border-border">
          <p className="text-sm text-muted-foreground text-center">
            First time: ~350MB download (2 Small Language Models). After that, works completely offline! ✨
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2 opacity-70">
            Running in CPU mode for maximum compatibility • Total: 159M parameters
          </p>
        </div>
      </div>
    </div>
  );
};
