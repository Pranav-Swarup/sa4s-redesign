
const logos = [
  { src: '/images/logos/iiit-new.png', alt: 'IIIT Hyderabad' },
  { src: '/images/logos/serc.png',     alt: 'SERC' },
  { src: '/images/logos/sa4s.png',     alt: 'SA4S' },
];

const LogoCloud = () => {
  return (
    <div className="bg-[#112F72] border-t border-[#1A428A] py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-center text-[10px] text-[#B8CCE8] tracking-[0.3em] uppercase font-medium mb-10">
          Part of
        </p>
        <div className="grid grid-cols-3 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center p-4">
              <img
                className="max-h-14 w-full object-contain opacity-50 hover:opacity-80 transition-opacity duration-200"
                src={logo.src}
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
