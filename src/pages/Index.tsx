import { GlareCard } from "@/components/ui/glare-card";
import Switch from "@/components/ui/sky-toggle";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { FilterButtons } from "@/components/ui/filter-buttons";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Footer } from "@/components/ui/footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useMemo, useEffect } from "react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isLoading, setIsLoading] = useState(true);
  const [showCards, setShowCards] = useState(false);

  // Preload critical images
  useEffect(() => {
    const preloadImages = [
      "/lobby-uploads/ee0d4b07-fa2d-452d-a22c-9f023b682086.png", // Profile image
      "/lobby-uploads/a4b226b6-4f63-4ac5-90be-a18c3d2d34e4.png", // ORCID
      "/lobby-uploads/0db07444-62b4-4331-ba8f-0adb852e1ce0.png", // Lattes
      "/lobby-uploads/eb9fee27-c7c8-416d-af67-9d6b7b443df6.png", // LinkedIn
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Show cards after loading completes
    if (!isLoading) {
      setTimeout(() => setShowCards(true), 300);
    }
  }, [isLoading]);
  
  const socialLinks = [
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0002-9964-322X",
      image: "/lobby-uploads/a4b226b6-4f63-4ac5-90be-a18c3d2d34e4.png",
      alt: "ORCID Profile",
      category: "Acadêmico"
    },
    {
      name: "Lattes", 
      url: "https://lattes.cnpq.br/6364745933431886",
      image: "/lobby-uploads/0db07444-62b4-4331-ba8f-0adb852e1ce0.png",
      alt: "Currículo Lattes",
      category: "Acadêmico"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/matheusgomesdeveloper/", 
      image: "/lobby-uploads/eb9fee27-c7c8-416d-af67-9d6b7b443df6.png",
      alt: "LinkedIn Profile",
      category: "Profissional"
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@matheusfelgomes",
      image: "/lobby-uploads/47fc4dfe-fa80-4a24-8ba9-8f2d75569d72.png", 
      alt: "Threads Profile",
      category: "Social"
    },
    {
      name: "Portfolio",
      url: "https://matheusfelipe.com/",
      image: "/lobby-uploads/7460278a-a0e3-4e75-a1cd-5a69e4f17646.png",
      alt: "Portfolio Website",
      category: "Profissional"
    },
    {
      name: "GitHub",
      url: "https://github.com/MatheusFelipeGomes",
      image: "/lobby-uploads/c3c22c36-7a83-4539-8b92-09862764a5d6.png",
      alt: "GitHub Profile",
      category: "Profissional"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/matheusfelgomes/#",
      image: "/lobby-uploads/f8e3229b-3bf3-48ae-95d1-8a8367a76c3d.png",
      alt: "Instagram Profile",
      category: "Social"
    }
  ];

  const categories = ["Todos", "Profissional", "Acadêmico", "Social"];
  
  const filteredLinks = useMemo(() => {
    if (activeCategory === "Todos") return socialLinks;
    return socialLinks.filter(link => link.category === activeCategory);
  }, [activeCategory]);

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background relative">
      {/* Toggle no canto superior direito */}
      <div className="fixed top-6 right-6 z-50">
        <Switch />
      </div>

      {/* Hero Section - Two Column Layout */}
      <section className="min-h-screen">
        <div className="container mx-auto px-6 py-20 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 
                  ref={titleRef}
                  className={`text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light leading-tight transition-all duration-700 ${
                    titleVisible ? 'animate-fade-in-left' : 'opacity-0'
                  }`}
                >
                  <span className="bg-gradient-to-r from-foreground to-blue-400 bg-clip-text text-transparent">
                    Matheus
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Felipe Gomes
                  </span>
                </h1>
                <div className="space-y-4">
                  <p 
                    ref={subtitleRef}
                    className={`text-lg sm:text-xl text-muted-foreground max-w-lg transition-all duration-700 delay-300 ${
                      subtitleVisible ? 'animate-fade-in-left' : 'opacity-0'
                    }`}
                  >
                    Developer & Researcher passionate about creating innovative solutions
                  </p>
                  
                  <p 
                    className={`text-base sm:text-lg text-muted-foreground/80 max-w-lg transition-all duration-700 delay-500 ${
                      subtitleVisible ? 'animate-fade-in-left' : 'opacity-0'
                    }`}
                  >
                    Master Business Administrator in Software Engineering, exploring technology and strategy to transform ideas into real impact.
                  </p>
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className={`transition-all duration-700 delay-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <ScrollIndicator />
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-700 ${titleVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <img
                  src="/lobby-uploads/ee0d4b07-fa2d-452d-a22c-9f023b682086.png"
                  alt="Matheus Felipe Gomes"
                  className="w-64 sm:w-80 lg:w-96 xl:w-[28rem] aspect-[3/4] object-cover object-top rounded-b-xl"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Gradient overlay for smooth blending - stronger in light mode */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-background/20 to-background pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Cards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Filter Buttons */}
            <FilterButtons
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              className={`transition-all duration-700 ${cardsVisible ? 'animate-slide-up' : 'opacity-0'}`}
            />
            
            {/* Cards Grid */}
            <div 
              ref={cardsRef}
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {filteredLinks.map((link, index) => (
                <a
                  key={`${link.name}-${activeCategory}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block transition-all duration-700 ${
                    cardsVisible && showCards ? 'animate-card-enter' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    animationDelay: `${index * 150 + 400}ms`
                  }}
                >
                  <GlareCard className="w-full aspect-[4/5] rounded-md overflow-hidden border border-white/5 shadow-lg bg-black/10 backdrop-blur-sm hover:border-white/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
                    <img
                      src={link.image}
                      alt={link.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </GlareCard>
                  {/* Card Label */}
                  <div className="mt-3 text-center">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                      {link.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
    </div>
  );
};

export default Index;
