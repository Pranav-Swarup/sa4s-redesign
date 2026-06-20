import { publicUrl } from '../lib/utils';

const logos = [
  { src: '/images/logos/iiit-new.png', alt: 'IIIT Hyderabad' },
  { src: '/images/logos/serc.png',     alt: 'SERC' },
  { src: '/images/logos/sa4s.png',     alt: 'SA4S' },
];

const LogoCloud = () => {
  return (
    <div className="bg-[#F0EBE1] border-t border-[#D8D2C4] py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-center text-[10px] text-[#7A7060] tracking-[0.3em] uppercase font-medium mb-10">
          Part of
        </p>
        <div className="grid grid-cols-3 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center p-4">
              <img
                className="max-h-14 w-full object-contain transition-transform duration-200 hover:scale-110"
                src={publicUrl(logo.src)}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
