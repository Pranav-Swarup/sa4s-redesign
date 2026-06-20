
import { publicUrl } from '../lib/utils';

const Footer = () => {
  return (
    <footer className="bg-[#0C2118] border-t border-[#1C4030]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Left — Address */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xs text-white/60 tracking-[0.25em] uppercase font-semibold mb-4">Address</h3>
            <div className="text-white/75 text-sm space-y-1 leading-relaxed">
              <p>International Institute of Information Technology</p>
              <p>Gachibowli, Hyderabad</p>
              <p>Telangana 500032, India</p>
            </div>
          </div>

          {/* Middle — Logo & Title */}
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={publicUrl("/images/logos/sa4s.png")}
              alt="SA4S Logo"
              className="w-14 h-14 object-contain"
            />
            <div className="text-center">
              <div className="font-semibold text-white/90 text-sm tracking-wide">SA4S Research Group</div>
              <div className="text-[10px] text-white/60 tracking-wider uppercase mt-0.5">SERC · IIIT Hyderabad</div>
            </div>
          </div>

          {/* Right — Contact */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xs text-white/60 tracking-[0.25em] uppercase font-semibold mb-4">Contact Us</h3>
            <div className="text-white/75 text-sm space-y-1 leading-relaxed">
              <p>
                <a href="mailto:sa4s@iiit.ac.in" className="hover:text-white/90 transition-colors duration-150">
                  sa4s@iiit.ac.in
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-[#1C4030] mt-10 pt-6 text-center">
          <p className="text-white/40 text-xs tracking-wide">
            © 2026 SA4S @ SERC · IIIT Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
