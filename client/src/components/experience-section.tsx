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
    <section id="experience" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            data-testid="experience-title"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="experience-description"
          >
            Building expertise through hands-on experience in IT infrastructure and technical support
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy"></div>

            {/* Experience Item */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex items-start mb-12"
              data-testid="experience-item"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white z-10">
                <Laptop className="w-6 h-6" />
              </div>
              <div className="ml-8 bg-gray-50 p-6 rounded-xl flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-navy" data-testid="position-title">
                      {experienceData.position}
                    </h3>
                    <p className="text-lg text-gray-700" data-testid="company-name">
                      {experienceData.company}
                    </p>
                    <p className="text-gray-600" data-testid="work-location">
                      {experienceData.location}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-navy text-white px-4 py-2 rounded-full text-sm" data-testid="work-period">
                      {experienceData.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {experienceData.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start"
                      data-testid={`achievement-${index}`}
                    >
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
