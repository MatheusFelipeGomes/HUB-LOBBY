import { ArrowUp, Mail } from "lucide-react";
import { Button } from "./button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Back to Top Button */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group hover:border-primary/50 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Voltar ao topo
            </Button>
          </div>

          {/* Contact Section */}
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Contato Profissional</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                <a 
                  href="mailto:matheusgomesdeveloper@outlook.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:underline"
                >
                  matheusgomesdeveloper@outlook.com
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="mailto:matheusfelipegomes@outlook.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:underline"
                >
                  matheusfelipegomes@outlook.com
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                © 2025 Matheus Felipe
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};