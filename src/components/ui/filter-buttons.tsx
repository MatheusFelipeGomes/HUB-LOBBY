import { cn } from "@/lib/utils";

interface FilterButtonsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export const FilterButtons = ({
  categories,
  activeCategory,
  onCategoryChange,
  className
}: FilterButtonsProps) => {
  return (
    <div className={cn("flex flex-wrap justify-center gap-2 mb-8", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
            "hover:scale-105 hover:shadow-md",
            activeCategory === category
              ? "bg-primary text-primary-foreground border-primary shadow-lg"
              : "bg-background/50 backdrop-blur-sm text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};