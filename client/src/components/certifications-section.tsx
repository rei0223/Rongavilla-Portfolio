import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { SiGoogle, SiPython } from "react-icons/si";

const certificationsData = [
  {
    title: "Google Analytics",
    provider: "by Google Skillshop",
    certificateId: "140912621",
    expiryDate: "April 24, 2026",
    icon: SiGoogle,
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-600",
  },
  {
    title: "Python Data Associate",
    provider: "by DataCamp",
    certificateId: "PDA0011846898662",
    expiryDate: "April 25, 2027",
    icon: SiPython,
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-600",
  },
];

export default function CertificationsSection() {
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
            data-testid="certifications-title"
          >
            Certifications & Training
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
            data-testid="certifications-description"
          >
            Continuous learning through industry-recognized certifications and professional development
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg card-minimal"
              data-testid={`certification-card-${cert.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cert.icon className="text-gray-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy mb-1" data-testid={`cert-title-${index}`}>
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-sm" data-testid={`cert-provider-${index}`}>
                    {cert.provider}
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Certificate ID:</span>
                  <span className="text-gray-400 font-mono text-xs" data-testid={`cert-id-${index}`}>
                    {cert.certificateId}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Expiry Date:</span>
                  <span className="text-gray-500" data-testid={`cert-expiry-${index}`}>
                    {cert.expiryDate}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-xs font-medium">
                    <CheckCircle className="w-3 h-3 inline mr-1" />
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
