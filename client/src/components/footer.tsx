import { Download, Mail, Github } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-medium text-white mb-2" data-testid="footer-name">
              Rey-Ann Rongavilla
            </h3>
            <p className="text-gray-400 text-sm" data-testid="footer-subtitle">
              Fresh Graduate | Aspiring IT Support Specialist & Software Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>

            <div className="flex space-x-4">
              <a
                href="mailto:reyann.rongavilla@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-link-email"
              >
                <Mail className="w-5 h-5" />
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            &copy; {currentYear} Rey-Ann Rongavilla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
