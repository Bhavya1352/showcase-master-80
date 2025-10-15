
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Quiz App",
    description: "A fun and interactive quiz application built with React. Test your knowledge on a variety of topics with this engaging and responsive web app.",
    link: "https://quiz-app-delta-pearl-16.vercel.app/",
  },
  {
    title: "Event Maker Site",
    description: "A comprehensive web platform designed to streamline event creation and management. It offers organizers tools for customizable event pages, attendee tracking, and secure payment processing, ensuring a seamless experience from setup to execution.",
    link: "https://event-maker-site.vercel.app/",
  },
  {
    title: "Mini Paint",
    description: "Vivid Sketchpad is a web-based drawing application enabling users to create freehand digital art. It offers a customizable canvas with adjustable brush sizes and colors, and the functionality to save creations as image files.",
    link: "https://vivid-sketchpad.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-border/50 flex flex-col animated-border">
              <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
              <p className="text-muted-foreground flex-grow">{project.description}</p>
              <div className="mt-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    View Project
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
