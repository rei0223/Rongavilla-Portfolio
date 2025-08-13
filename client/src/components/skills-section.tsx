import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Network, Database, Users, CheckCircle } from "lucide-react";

const skillsData = [
  {
    title: "Technical Skills",
    icon: Settings,
    color: "text-navy",
    bgColor: "bg-navy",
    skills: [
      { name: "System Monitoring", level: 90 },
      { name: "Troubleshooting", level: 85 },
      { name: "Windows OS Admin", level: 88 },
    ],
  },
  {
    title: "Network & Infrastructure",
    icon: Network,
    color: "text-light-blue",
    bgColor: "bg-light-blue",
    skills: [
      { name: "Network Setup", level: 82 },
      { name: "Router/Switch Config", level: 78 },
      { name: "Server Administration", level: 75 },
    ],
  },
  {
    title: "Development & Database",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent",
    skills: [
      { name: "SQL", level: 80 },
      { name: "Python", level: 70 },
      { name: "Data Analytics", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    softSkills: [
      "Communication",
      "Team Collaboration",
      "Problem Solving",
      "Time Management",
      "Adaptability",
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            data-testid="skills-title"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="skills-description"
          >
            Comprehensive technical and soft skills developed through education and hands-on experience
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl card-hover"
              data-testid={`skill-category-${category.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <div className="text-center mb-6">
                <category.icon className={`w-12 h-12 ${category.color} mb-4 mx-auto`} />
                <h3 className="text-xl font-semibold text-navy">{category.title}</h3>
              </div>

              {category.skills && (
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`${category.bgColor} h-2 rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                          data-testid={`skill-progress-${skill.name.toLowerCase().replace(/[^a-z]/g, '-')}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {category.softSkills && (
                <div className="space-y-3">
                  {category.softSkills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
