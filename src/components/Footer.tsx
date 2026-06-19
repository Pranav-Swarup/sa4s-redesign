
import { Github, Youtube } from 'lucide-react';
import { publicUrl } from '../lib/utils';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={publicUrl("/images/logos/sa4s.png")}
                  alt="SA4S Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">SA4S @ SERC</div>
                <div className="text-sm text-gray-600">Research Group</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Software Architecture for Sustainability Research Group at IIIT-Hyderabad, 
              advancing the frontiers of adaptive and energy-efficient software systems.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Address</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p>International Institute of Information Technology</p>
              <p>Gachibowli, Hyderabad</p>
              <p>Telangana 500032, India</p>
            </div>
          </div>


        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 SA4S @ SERC - IIIT-Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
