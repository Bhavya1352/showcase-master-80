import { Card } from "@/components/ui/card";
import { Code2, GitBranch, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Building responsive and interactive user interfaces with modern web technologies",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GitBranch,
    title: "Git Version Control",
    description: "Managing code repositories and collaborating effectively with development teams",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Leading projects and coordinating teams to achieve collaborative goals",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionate about front-end development with hands-on experience in modern web technologies 
            and version control systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-xl transition-all duration-300 border-border/50 group hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 ${skill.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${skill.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
