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
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 min-h-screen flex items-center">
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
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light"
                data-testid="hero-title"
              >
                Fresh Graduate | Aspiring IT Support Specialist & Software Developer
              </h2>
              <p
                className="text-base sm:text-lg text-gray-600 max-w-xl text-balance leading-relaxed"
                data-testid="hero-description"
              >
                Recent BSIT graduate eager to learn and contribute to the IT field. Passionate about both hardware troubleshooting and software development, with hands-on experience in PC building, system configuration, and developing web applications using modern technologies.
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
                className="bg-accent text-white hover:bg-accent/90 px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => handleNavClick("#projects")}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-xl font-medium transition-all duration-200"
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
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-3xl p-4 border border-gray-200 shadow-2xl">
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
