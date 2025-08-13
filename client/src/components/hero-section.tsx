import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-navy to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              data-testid="hero-name"
            >
              Rey-Ann Rongavilla
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-6"
              data-testid="hero-title"
            >
              IT Infrastructure Specialist & System Administrator
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
              data-testid="hero-description"
            >
              Recent BSIT graduate with hands-on experience in IT infrastructure support, system monitoring, and troubleshooting. 
              Passionate about optimizing operational efficiency through innovative technical solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-white text-navy hover:bg-gray-100"
                size="lg"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => handleNavClick("#projects")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy"
                size="lg"
                data-testid="button-projects"
              >
                View My Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          >
            <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
              <div className="w-72 h-72 bg-white/20 rounded-full flex items-center justify-center" data-testid="profile-photo-placeholder">
                <User className="w-32 h-32 text-white/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
