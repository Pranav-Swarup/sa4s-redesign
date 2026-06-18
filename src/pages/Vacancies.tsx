const Vacancies = () => {
  const pastInterns = [
    {
      name: 'Subhashree L',
      linkedin: 'https://www.linkedin.com/in/subhashree-l-26b604290/'
    },
    {
      name: 'Shreenithi C',
      linkedin: 'https://www.linkedin.com/in/shreenithi-c-6955a0249/'
    },
    {
      name: 'Preethi PM',
      linkedin: 'https://www.linkedin.com/in/preethi-pm/'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Open positions
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            We currently have no open positions.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            However, if you really have the passion and talent to work with us, please fill out the form below. We will contact you if a suitable position opens up.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmG9IoHf6YBjFZDQoZK3YQgEMdV9bGIk2S3HJzyZd3MR_XWg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold text-lg mb-12 inline-block"
          >
            APPLY HERE
          </a>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Past Interns
            </h2>
            <div className="space-y-4">
              {pastInterns.map((intern, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-700 mr-2">{intern.name}</span>
                  <a 
                    href={intern.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label={`${intern.name}'s LinkedIn profile`}
                  >
                    <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
