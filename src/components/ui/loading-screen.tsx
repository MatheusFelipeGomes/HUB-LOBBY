import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12">
        {/* Main Loading Animation */}
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-24 h-24 border-4 border-muted/30 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>
          
          {/* Inner pulsing dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Name and Loading Text */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-foreground via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Matheus
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-fade-in">
              Carregando experiência...
            </p>
            
            {/* Enhanced Progress Bar */}
            <div className="w-80 mx-auto">
              <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 h-2 rounded-full transition-all duration-500 ease-out relative"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-muted-foreground">
                  {Math.round(Math.min(progress, 100))}%
                </span>
                <span className="text-sm text-muted-foreground">
                  Quase lá...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};