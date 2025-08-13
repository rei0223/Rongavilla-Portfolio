import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Computer Lab Management System",
    description: "Developed an automated monitoring system for 50+ lab computers, reducing maintenance time by 30% and improving overall uptime.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Windows Server", "PowerShell", "SQL"],
    period: "Jan 2025 - April 2025",
  },
  {
    title: "Network Infrastructure Optimization",
    description: "Configured and optimized network infrastructure for 6 computer labs, improving connectivity and reducing downtime by 20%.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Cisco", "Network Config", "LAN/WAN"],
    period: "Ongoing Project",
  },
  {
    title: "IT Documentation & Reporting System",
    description: "Created comprehensive documentation system and automated reporting tools to improve knowledge sharing and team efficiency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Excel VBA", "Analytics"],
    period: "Completed",
  },
];

const technologyColors: { [key: string]: string } = {
  "Windows Server": "bg-navy text-white",
  "PowerShell": "bg-light-blue text-white",
  "SQL": "bg-accent text-white",
  "Cisco": "bg-navy text-white",
  "Network Config": "bg-light-blue text-white",
  "LAN/WAN": "bg-accent text-white",
  "Python": "bg-navy text-white",
  "Excel VBA": "bg-light-blue text-white",
  "Analytics": "bg-accent text-white",
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            data-testid="projects-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="projects-description"
          >
            Showcasing practical applications of my technical skills and problem-solving abilities
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              data-testid={`project-card-${project.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${technologyColors[tech] || "bg-gray-200 text-gray-700"}`}
                      data-testid={`tech-tag-${tech.toLowerCase().replace(/[^a-z]/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500" data-testid={`project-period-${index}`}>
                    {project.period}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-navy hover:text-light-blue"
                    data-testid={`project-link-${index}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
