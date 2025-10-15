import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="text-gradient">Bhavya Mishra</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Building responsive web experiences and leading open-source initiatives
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 glow-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg"></div>
              <img src="/IMG_20250616_232203.jpg" alt="Bhavya Mishra" className="relative w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default Hero;
