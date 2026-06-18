import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { categories, defaultPhoto, teamMembers } from "../data/teamData";

const Team = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMembers =
    activeCategory === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sa4s-teal-50 to-sa4s-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Team</h1>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-medium rounded-t-lg transition-all duration-150 ${
                activeCategory === category
                  ? "bg-sa4s-teal-600 text-white"
                  : "text-gray-600 hover:text-sa4s-teal-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.name+"-"+member.role}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={member.photo === "" ? defaultPhoto : member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              {member.education && member.education.length > 0 && (
                <ul className="text-left text-gray-500 mt-4 list-disc list-inside">
                  {member.education.map((edu, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: edu }}
                    ></li>
                  ))}
                </ul>
              )}
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-gray-200 hover:bg-sa4s-teal-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-150"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={20} />
                </a>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 hover:bg-sa4s-blue-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-150"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={20} />
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
