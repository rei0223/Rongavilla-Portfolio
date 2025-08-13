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
    <section id="home" className="pt-24 pb-20 gradient-minimal text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-balance"
                data-testid="hero-name"
              >
                Rey-Ann Rongavilla
              </h1>
              <h2
                className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light"
                data-testid="hero-title"
              >
                IT Infrastructure Specialist & System Administrator
              </h2>
              <p
                className="text-base sm:text-lg text-white/70 max-w-xl text-balance leading-relaxed"
                data-testid="hero-description"
              >
                Recent BSIT graduate with hands-on experience in IT infrastructure support, system monitoring, and troubleshooting. 
                Passionate about optimizing operational efficiency through innovative technical solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-white text-navy hover:bg-gray-50 px-8 py-3 rounded-md font-medium transition-all duration-200"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => handleNavClick("#projects")}
                variant="outline"
                className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-200"
                data-testid="button-projects"
              >
                View My Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
              <div className="w-56 h-56 sm:w-72 sm:h-72 bg-white/10 rounded-xl flex items-center justify-center" data-testid="profile-photo-placeholder">
                <User className="w-24 h-24 sm:w-32 sm:h-32 text-white/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
