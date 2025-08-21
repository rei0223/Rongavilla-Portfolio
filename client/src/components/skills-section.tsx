import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Network, Database, Users, CheckCircle } from "lucide-react";

const skillsData = [
  {
    title: "Hardware Expertise",
    icon: Settings,
    color: "text-navy",
    bgColor: "bg-navy",
    skills: [
      { name: "PC Building & Assembly", level: 95 },
      { name: "Hardware Diagnostics", level: 90 },
      { name: "Component Installation", level: 92 },
      { name: "BIOS Configuration", level: 88 },
    ],
  },
  {
    title: "Software Development",
    icon: Database,
    color: "text-light-blue",
    bgColor: "bg-light-blue",
    skills: [
      { name: "React/TypeScript", level: 85 },
      { name: "Node.js/Express", level: 80 },
      { name: "Database Design", level: 82 },
      { name: "API Development", level: 78 },
    ],
  },
  {
    title: "System Administration",
    icon: Network,
    color: "text-accent",
    bgColor: "bg-accent",
    skills: [
      { name: "Windows Server", level: 85 },
      { name: "Network Configuration", level: 82 },
      { name: "Active Directory", level: 80 },
      { name: "Security Implementation", level: 78 },
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    softSkills: [
      "Technical Problem Solving",
      "Team Leadership",
      "Client Communication",
      "Project Management",
      "Knowledge Transfer",
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="section-padding bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light text-navy mb-6 text-balance"
            data-testid="skills-title"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
            data-testid="skills-description"
          >
            Comprehensive technical and soft skills developed through education and hands-on experience
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg card-minimal"
              data-testid={`skill-category-${category.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <div className="text-center mb-8">
                <category.icon className={`w-8 h-8 ${category.color} mb-4 mx-auto`} />
                <h3 className="text-lg font-medium text-navy">{category.title}</h3>
              </div>

              {category.skills && (
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-1">
                        <motion.div
                          className="bg-navy h-1 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                          data-testid={`skill-progress-${skill.name.toLowerCase().replace(/[^a-z]/g, '-')}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {category.softSkills && (
                <div className="space-y-4">
                  {category.softSkills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-navy mr-3" />
                      <span className="text-sm text-gray-700">{skill}</span>
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
