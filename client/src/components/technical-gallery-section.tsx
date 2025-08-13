import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, HardDrive, Cpu, Settings, Users, Network } from "lucide-react";

// Import the technical journey images
import internIdImage from "@assets/500ea944-adb9-47ea-a1ef-b964ca89947e_1755073885185.jpg";
import teamWorkImage from "@assets/3c8128d1-ceb6-467e-b9da-f00321360674_1755073885191.jpg";
import pcBuildImage from "@assets/f8885abb-85dd-4064-a6d0-c3dfc09ef0d3_1755073885191.jpg";
import ssdInstallImage from "@assets/268e6d82-97ba-42c6-8282-6710ec0d66d3_1755073885192.jpg";
import biosConfigImage from "@assets/59a5c658-080d-48de-8eb6-16c19efb4679_1755073885192.jpg";
import networkingImage from "@assets/f2cc8458-cb42-469c-9155-929be5ea814a_1755073885192.jpg";
import troubleshootingImage from "@assets/cd64fffd-b587-4614-a6fb-55c43e027b78_1755073885193.jpg";
import systemOptimizationImage from "@assets/da203feb-abe0-4cde-9866-da31fe4b0ed3_1755073885193.jpg";
import labManagementImage from "@assets/7a2bdc2a-8c98-436f-8a29-cbe2e180cfe9_1755073885193.jpg";
import computerLabImage from "@assets/06db855e-bb60-4c66-aa3e-41fa03de071e_1755073885194.jpg";
import labOverviewImage from "@assets/1c4612bc-6c5a-4385-b33c-2bb2e682456d_1755073885194.jpg";
import hardwareInstallImage from "@assets/d013dda9-e19e-45c4-b3b3-d1736424b60e_1755073885194.jpg";
import happyTechnicianImage from "@assets/c2d929d7-3bc7-489b-beb7-8dfd328b6358_1755073885195.jpg";
import networkInstallImage from "@assets/e1951e1b-1471-423a-8404-55272f625b29_1755073885195.jpg";
import systemRepairImage from "@assets/351d876f-927e-4ba6-9698-e9fb22f9f47d_1755073885195.jpg";
import teamCollaborationImage from "@assets/71d8e2f1-227e-45bc-844d-ef01ea02b745_1755073885195.jpg";
import networkRackImage from "@assets/bb08caf2-28ba-45dc-bdea-b991cb954e28_1755073885196.jpg";
import infrastructureImage from "@assets/7a769985-41be-4ed0-bf60-af29c45b44b4_1755073885196.jpg";
import audioSystemImage from "@assets/3bb01d35-a4f0-4e42-a295-1f675b227e0f_1755073885197.jpg";
import internWorkImage from "@assets/da203feb-abe0-4cde-9866-da31fe4b0ed3_1755073885193.jpg";

const technicalGalleryData = [
  {
    id: 1,
    title: "Professional IT Internship",
    description: "BSiT Intern badge and credentials from University of Cabuyao internship program",
    image: internIdImage,
    category: "Professional Development",
    icon: Users,
    skills: ["Professional Training", "Academic Partnership", "Industry Experience"]
  },
  {
    id: 2,
    title: "Computer Hardware Assembly",
    description: "Hands-on PC building and component installation in computer laboratory",
    image: pcBuildImage,
    category: "Hardware",
    icon: Cpu,
    skills: ["PC Building", "Component Installation", "Hardware Troubleshooting"]
  },
  {
    id: 3,
    title: "Storage Solution Implementation",
    description: "SSD installation and storage optimization for enhanced system performance",
    image: ssdInstallImage,
    category: "Storage",
    icon: HardDrive,
    skills: ["SSD Installation", "Storage Optimization", "Performance Tuning"]
  },
  {
    id: 4,
    title: "BIOS Configuration & Testing",
    description: "System-level configuration and BIOS optimization for optimal performance",
    image: biosConfigImage,
    category: "System Configuration",
    icon: Settings,
    skills: ["BIOS Configuration", "System Optimization", "Performance Testing"]
  },
  {
    id: 5,
    title: "Network Infrastructure Setup",
    description: "Network cable management and infrastructure installation",
    image: networkingImage,
    category: "Networking",
    icon: Network,
    skills: ["Network Cabling", "Infrastructure Setup", "Cable Management"]
  },
  {
    id: 6,
    title: "Team Collaboration & Training",
    description: "Working with technical teams and providing hands-on training sessions",
    image: teamWorkImage,
    category: "Leadership",
    icon: Users,
    skills: ["Team Leadership", "Technical Training", "Knowledge Transfer"]
  },
  {
    id: 7,
    title: "Computer Laboratory Management",
    description: "Managing and maintaining large-scale computer laboratory environments",
    image: computerLabImage,
    category: "Lab Management",
    icon: Monitor,
    skills: ["Lab Management", "System Maintenance", "Multi-system Administration"]
  },
  {
    id: 8,
    title: "Audio-Visual System Setup",
    description: "Professional audio mixing board configuration for multimedia systems",
    image: audioSystemImage,
    category: "AV Systems",
    icon: Settings,
    skills: ["Audio Systems", "AV Configuration", "Event Technology"]
  }
];

export default function TechnicalGallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="technical-gallery" className="section-padding bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light text-navy mb-6 text-balance"
            data-testid="technical-gallery-title"
          >
            Technical Journey Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
            data-testid="technical-gallery-description"
          >
            Visual documentation of hands-on technical work, professional development, and real-world IT solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalGalleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden card-minimal group"
              data-testid={`gallery-item-${item.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`gallery-image-${item.id}`}
                />
                <div className="absolute top-4 left-4 bg-white/90 rounded-md px-3 py-1 flex items-center space-x-2">
                  <item.icon className="w-4 h-4 text-navy" />
                  <span className="text-xs font-medium text-navy">{item.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-navy mb-3" data-testid={`gallery-title-${item.id}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed" data-testid={`gallery-description-${item.id}`}>
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md text-xs bg-white text-gray-600 font-medium"
                      data-testid={`gallery-skill-${item.id}-${skillIndex}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-lg font-medium text-navy mb-4">Hands-On Experience</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto">
              These images represent real technical work completed during my professional internship and academic projects. 
              From hardware assembly and system configuration to network infrastructure and team collaboration, 
              each photo demonstrates practical application of IT skills in professional environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}