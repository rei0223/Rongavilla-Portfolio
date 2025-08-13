import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    quote: "Rey-Ann demonstrated exceptional technical skills and professionalism during the internship. The systematic approach to problem-solving and attention to detail significantly improved our lab operations.",
    name: "Arcelito Quiatchon",
    title: "Department Chair, University of Cabuyao",
    initials: "AQ",
  },
  {
    quote: "Working with Rey-Ann has been a pleasure. The dedication to continuous learning and ability to adapt quickly to new technologies makes for an excellent IT professional.",
    name: "Jocelyn G. Llanderal, MIT",
    title: "Instructor III, City College of Calamba",
    initials: "JL",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light text-navy mb-6 text-balance"
            data-testid="testimonials-title"
          >
            Professional References
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
            data-testid="testimonials-description"
          >
            What colleagues and supervisors say about my work and professional contributions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg relative card-minimal"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="absolute top-6 left-6 text-navy/10">
                <Quote className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm" data-testid={`testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-navy font-medium text-sm" data-testid={`testimonial-initials-${index}`}>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs" data-testid={`testimonial-title-${index}`}>
                      {testimonial.title}
                    </p>
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
