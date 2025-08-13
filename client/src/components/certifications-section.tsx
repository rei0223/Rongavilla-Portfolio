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
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            data-testid="certifications-title"
          >
            Certifications & Training
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="certifications-description"
          >
            Continuous learning through industry-recognized certifications and professional development
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${cert.bgGradient} p-8 rounded-xl border ${cert.borderColor} card-hover`}
              data-testid={`certification-card-${cert.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${cert.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <cert.icon className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy" data-testid={`cert-title-${index}`}>
                    {cert.title}
                  </h3>
                  <p className="text-gray-600" data-testid={`cert-provider-${index}`}>
                    {cert.provider}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Certificate ID:</span>
                  <span className="text-sm text-gray-600 font-mono" data-testid={`cert-id-${index}`}>
                    {cert.certificateId}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Expiry Date:</span>
                  <span className="text-sm text-gray-600" data-testid={`cert-expiry-${index}`}>
                    {cert.expiryDate}
                  </span>
                </div>
                <div className="pt-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
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
