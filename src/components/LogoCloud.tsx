import { publicUrl } from '../lib/utils';

const logos = [
  { src: '/images/logos/iiit-new.png', alt: 'IIIT Hyderabad', href: 'https://www.iiit.ac.in/' },
  { src: '/images/logos/serc.png',     alt: 'SERC',           href: 'https://serc.iiit.ac.in/' },
];

const LogoCloud = () => {
  return (
    <div className="bg-[#F0EBE1] border-t border-[#D8D2C4] py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-center text-[10px] text-[#7A7060] tracking-[0.3em] uppercase font-medium mb-10">
          Part of
        </p>
        <div className="flex justify-center gap-16 items-center">
          {logos.map((logo) => {
            const img = (
              <img
                className="max-h-14 w-full object-contain transition-transform duration-200 hover:scale-110"
                src={publicUrl(logo.src)}
                alt={logo.alt}
              />
            );
            return (
              <div key={logo.alt} className="flex items-center justify-center p-4">
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt}>
                    {img}
                  </a>
                ) : img}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
