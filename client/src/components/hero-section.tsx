import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import profileImage from "@assets/490989181_1316131402821498_6105561555245170207_n_1755794161001.jpg";

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
                Full-Stack IT Professional | Hardware & Software Specialist
              </h2>
              <p
                className="text-base sm:text-lg text-white/70 max-w-xl text-balance leading-relaxed"
                data-testid="hero-description"
              >
                BSIT graduate with comprehensive expertise in both hardware solutions and software development. 
                From PC building and network infrastructure to web development and system programming.
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
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-2xl p-4 border border-white/20">
              <img 
                src={profileImage} 
                alt="Rey-Ann Rongavilla - Professional graduation photo"
                className="w-full h-full object-cover rounded-xl shadow-lg"
                data-testid="profile-photo"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
