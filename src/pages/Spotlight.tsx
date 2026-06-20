const Spotlight = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">Featured</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Spotlight</h1>
          <p className="mt-4 text-sm text-[#8DB8A2] max-w-md mx-auto">
            Highlights from our latest research, projects, and announcements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 text-center">
        <p className="text-[#6B6455] text-sm">Content coming soon.</p>
      </div>
    </div>
  );
};

export default Spotlight;
