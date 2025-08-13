import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, CheckCircle } from "lucide-react";

const experienceData = {
  position: "Technical Support Intern",
  company: "University of Cabuyao - Management Information System Dept.",
  location: "Cabuyao City, Laguna",
  period: "Jan 2025 - April 2025",
  achievements: [
    "Monitored and maintained performance of 50+ lab computers and peripheral devices",
    "Resolved 15+ daily technical issues, improving uptime and productivity",
    "Installed, configured, and standardized setups, reducing reconfiguration time by 30%",
    "Conducted preventive maintenance, cutting downtime by 20%",
    "Prepared comprehensive documentation and reports, improving knowledge sharing",
    "Collaborated with IT team to successfully upgrade 6 computer labs",
  ],
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="section-padding bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light text-navy mb-6 text-balance"
            data-testid="experience-title"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
            data-testid="experience-description"
          >
            Building expertise through hands-on experience in IT infrastructure and technical support
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg card-minimal"
            data-testid="experience-item"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy mb-1" data-testid="position-title">
                    {experienceData.position}
                  </h3>
                  <p className="text-gray-600 mb-1" data-testid="company-name">
                    {experienceData.company}
                  </p>
                  <p className="text-gray-400 text-sm" data-testid="work-location">
                    {experienceData.location}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium" data-testid="work-period">
                  {experienceData.period}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {experienceData.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-start"
                  data-testid={`achievement-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-navy mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
