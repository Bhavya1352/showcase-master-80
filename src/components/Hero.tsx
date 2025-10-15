import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Brain, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Neural grid background */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      {/* Gradient glow effect */}
      <div className="absolute inset-0 bg-[image:var(--gradient-glow)] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in">
          <div className="md:w-1/2 space-y-8 text-left">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                Available for Opportunities
              </span>
            </div>
            
            {/* Main heading with enhanced glow */}
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">Bhavya Mishra</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Building responsive web experiences and leading open-source initiatives
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 neural-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="neural-border hover:neural-glow"
                asChild
              >
                <a 
                  href="https://linkedin.com/in/bhavya-mishra-7a3b09324" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  View LinkedIn
                </a>
              </Button>
            </div>
            

          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-2xl animate-pulse opacity-60"></div>
              <div className="absolute inset-0 neural-border rounded-lg"></div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-accent rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-accent rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-accent rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-accent rounded-br-lg" />
              
              <img 
                src="/IMG_20250616_232203.jpg" 
                alt="Bhavya Mishra" 
                className="relative w-full rounded-lg shadow-2xl card-3d" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse" />
      
      {/* Floating nodes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
