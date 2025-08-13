import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Cabuyao – Pamantasan ng Cabuyao",
    period: "2021 - 2025",
    type: "Bachelor's Degree",
    icon: GraduationCap,
    coursework: [
      "System Administration",
      "Network Security",
      "Database Management",
      "Software Engineering",
    ],
  },
  {
    degree: "Information and Communication Technology (ICT) Strand",
    institution: "St. Ignatius Academy - Cabuyao Campus",
    period: "2019 - 2021",
    type: "Senior High School",
    icon: School,
    coursework: [
      "Computer Programming",
      "Web Development",
      "Digital Media",
      "Technical Support",
    ],
  },
];

const courseColors = [
  "bg-navy text-white",
  "bg-light-blue text-white",
  "bg-accent text-white",
  "bg-purple-600 text-white",
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            data-testid="education-title"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="education-description"
          >
            Strong academic foundation in Information Technology and related fields
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((education, index) => (
            <motion.div
              key={education.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              data-testid={`education-card-${education.type.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <div className="text-center mb-6">
                <education.icon className="w-12 h-12 text-navy mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-navy">{education.type}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800" data-testid={`degree-${index}`}>
                    {education.degree}
                  </p>
                  <p className="text-gray-600" data-testid={`institution-${index}`}>
                    {education.institution}
                  </p>
                  <p className="text-gray-500" data-testid={`period-${index}`}>
                    {education.period}
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">
                    {education.type === "Bachelor's Degree" ? "Relevant Coursework:" : "Specialized in:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, courseIndex) => (
                      <span
                        key={course}
                        className={`px-3 py-1 rounded-full text-xs ${courseColors[courseIndex % courseColors.length]}`}
                        data-testid={`course-${course.toLowerCase().replace(/[^a-z]/g, '-')}`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
