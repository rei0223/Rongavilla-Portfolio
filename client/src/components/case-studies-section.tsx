import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Dock, Users } from "lucide-react";

const caseStudiesData = [
  {
    title: "Developing Online Learning Platform for Cabuyao ALS",
    duration: "6 months",
    scope: "Capstone Project",
    situation: "Cabuyao ALS program needed a digital learning platform to support students with flexible online education, but had no existing e-learning system.",
    action: "Designed and developed a comprehensive web-based platform using HTML, CSS, JavaScript, PHP, and MySQL with enrollment, modules, assessments, and progress tracking features.",
    result: "Successfully delivered a working online learning platform that supports student enrollment, course management, and progress tracking for the ALS program.",
    icon: Dock,
  },
  {
    title: "PC Hardware Assembly and Troubleshooting",
    duration: "During Internship",
    scope: "Computer Lab Setup",
    situation: "Multiple desktop computers needed hardware upgrades and component installation, including SSD installations and system optimization for better performance.",
    action: "Performed hands-on PC building, component installation, SSD upgrades, BIOS configuration, and system testing to ensure optimal performance.",
    result: "Successfully assembled and optimized multiple systems, gained practical hardware troubleshooting experience, and improved system performance through proper configurations.",
    icon: Users,
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light text-navy mb-6 text-balance"
            data-testid="case-studies-title"
          >
            Problem-Solving Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
            data-testid="case-studies-description"
          >
            Real-world challenges and solutions demonstrating technical expertise and problem-solving abilities
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg card-minimal"
              data-testid={`case-study-card-${index}`}
            >
              <div className="mb-8">
                <h3 className="text-lg font-medium text-navy mb-3" data-testid={`case-study-title-${index}`}>
                  {study.title}
                </h3>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center" data-testid={`case-study-duration-${index}`}>
                    <Clock className="w-3 h-3 mr-1" />
                    {study.duration}
                  </span>
                  <span className="flex items-center" data-testid={`case-study-scope-${index}`}>
                    <study.icon className="w-3 h-3 mr-1" />
                    {study.scope}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Situation */}
                <div className="border-l-2 border-red-300 pl-4">
                  <h4 className="font-medium text-red-600 mb-2 text-sm">Situation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed" data-testid={`case-study-situation-${index}`}>
                    {study.situation}
                  </p>
                </div>

                {/* Action */}
                <div className="border-l-2 border-blue-300 pl-4">
                  <h4 className="font-medium text-blue-600 mb-2 text-sm">Action</h4>
                  <p className="text-gray-600 text-sm leading-relaxed" data-testid={`case-study-action-${index}`}>
                    {study.action}
                  </p>
                </div>

                {/* Result */}
                <div className="border-l-2 border-green-300 pl-4">
                  <h4 className="font-medium text-green-600 mb-2 text-sm">Result</h4>
                  <p className="text-gray-600 text-sm leading-relaxed" data-testid={`case-study-result-${index}`}>
                    {study.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
