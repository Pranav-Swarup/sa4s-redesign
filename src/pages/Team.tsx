
import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { categories, defaultPhoto, teamMembers } from "../data/teamData";
import { publicUrl } from "../lib/utils";

const Team = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMembers =
    activeCategory === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">People</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Our Team</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">

        {/* Category tabs */}
        <div className="flex flex-wrap gap-1.5 mb-10 border-b border-[#D8D2C4] pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-sm font-medium rounded transition-all duration-150 ${
                activeCategory === category
                  ? "bg-[#1F4A30] text-[#EDE8DF]"
                  : "text-[#6B6455] hover:text-[#2D6A4F] hover:bg-[#EAE4D6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMembers.map((member) => (
            <div
              key={member.name + "-" + member.role}
              className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-5 text-center transition-all duration-200"
            >
              <img
                src={publicUrl(member.photo === "" ? defaultPhoto : member.photo)}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover ring-2 ring-[#D8D2C4]"
              />
              <h3 className="text-base font-bold text-[#1A1710] mb-0.5">{member.name}</h3>
              <p className="text-sm text-[#6B6455]">{member.role}</p>
              {member.education && member.education.length > 0 && (
                <ul className="text-left text-sm text-[#6B6455] mt-4 list-disc list-inside space-y-1">
                  {member.education.map((edu, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: edu }} />
                  ))}
                </ul>
              )}
              <div className="flex justify-center mt-4 gap-2">
                <a
                  href={`mailto:${member.email}`}
                  className="w-9 h-9 bg-[#E8E2D8] hover:bg-[#2D6A4F] hover:text-white text-[#6B6455] rounded-lg flex items-center justify-center transition-all duration-150"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={16} />
                </a>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#E8E2D8] hover:bg-[#2D6A4F] hover:text-white text-[#6B6455] rounded-lg flex items-center justify-center transition-all duration-150"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
