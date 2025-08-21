import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project screenshots
import alsProjectImage from "@assets/Screenshot 2024-11-14 025523_1755797269715.png";
import librarySystemImage from "@assets/Screenshot 2025-08-22 011158_1755797262500.png";
import inventorySystemImage from "@assets/413026850_919894533007379_812480102757554550_n_1755797286663.png";
import ecommerceImage from "@assets/Screenshot 2025-08-22 011455_1755797262500.png";

const projectsData = [
  {
    title: "Online Learning Platform for Cabuyao ALS",
    description: "Capstone project: Comprehensive e-learning platform for the Alternative Learning System program, featuring enrollment, modules, assessments, and progress tracking.",
    image: alsProjectImage,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    period: "Capstone Project 2024",
  },
  {
    title: "Library Management System",
    description: "Desktop application for Pamantasan ng Cabuyao library operations with book inventory, member management, and transaction tracking.",
    image: librarySystemImage,
    technologies: ["Java", "Java Swing", "MySQL"],
    period: "Academic Project",
  },
  {
    title: "Inventory Management System",
    description: "Windows-based inventory application with comprehensive tracking, delivery management, point of sale, and sales monitoring capabilities.",
    image: inventorySystemImage,
    technologies: ["C#", "MySQL", "Windows Forms"],
    period: "Development Project",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with product catalog, shopping cart, user authentication, and comprehensive order management system.",
    image: ecommerceImage,
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    period: "Web Development Project",
  },
];

const technologyColors: { [key: string]: string } = {
  "HTML": "bg-orange-500 text-white",
  "CSS": "bg-blue-500 text-white", 
  "JavaScript": "bg-yellow-500 text-black",
  "PHP": "bg-purple-600 text-white",
  "MySQL": "bg-blue-600 text-white",
  "Java": "bg-red-600 text-white",
  "Java Swing": "bg-red-500 text-white",
  "C#": "bg-green-600 text-white",
  "Windows Forms": "bg-gray-600 text-white",
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="section-padding bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light text-navy mb-6 text-balance"
            data-testid="projects-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
            data-testid="projects-description"
          >
            Showcasing practical applications of my technical skills and problem-solving abilities
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden card-minimal"
              data-testid={`project-card-${project.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-navy mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600 font-medium"
                      data-testid={`tech-tag-${tech.toLowerCase().replace(/[^a-z]/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400" data-testid={`project-period-${index}`}>
                    {project.period}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-navy hover:text-navy-light p-1"
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
