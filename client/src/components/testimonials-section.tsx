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
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            data-testid="testimonials-title"
          >
            What Others Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="testimonials-description"
          >
            Feedback from supervisors and colleagues highlighting professional capabilities
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl relative card-hover"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="absolute top-4 left-4 text-4xl text-navy opacity-20">
                <Quote className="w-8 h-8" />
              </div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 italic" data-testid={`testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold" data-testid={`testimonial-initials-${index}`}>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm" data-testid={`testimonial-title-${index}`}>
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
