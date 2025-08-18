import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
  onClick?: () => void;
}

export const ScrollIndicator = ({ className, onClick }: ScrollIndicatorProps) => {
  const handleScrollDown = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={handleScrollDown}
      className={cn(
        "group flex flex-col items-center gap-2 animate-bounce-subtle cursor-pointer transition-all duration-300 hover:scale-110",
        className
      )}
      aria-label="Scroll para ver mais conteúdo"
    >
      <div className="flex flex-col items-center gap-1 text-muted-foreground group-hover:text-foreground transition-colors">
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-pulse" />
      </div>
    </button>
  );
};