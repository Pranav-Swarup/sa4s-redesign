const logos = [
  { src: '/images/logos/iiit-new.png', alt: 'IIIT Hyderabad' },
  { src: '/images/logos/serc.png', alt: 'SERC' },
  { src: '/images/logos/sa4s.png', alt: 'SA4S' },
];

const LogoCloud = () => {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {logos.map((logo) => (
            <div key={logo.alt} className="bg-gray-50/50 p-6 sm:p-8">
              <img
                className="max-h-24 w-full object-contain"
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
