import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Bhavya Mishra</h3>
            <p className="text-muted-foreground">Web Developer & Project Admin</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="mailto:bhavyamishra698@gmail.com"
              className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/bhavya-mishra-7a3b09324"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bhavya Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
