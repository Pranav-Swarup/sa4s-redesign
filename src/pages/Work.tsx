
import { Users } from 'lucide-react';

interface ProjectMember {
  name: string;
  role: string;
}

interface Project {
  id: string;
  title: string;
  summary: string;
  members: ProjectMember[];
}

const projects: Project[] = [
  {
    id: 'sustaind',
    title: 'SustAInd',
    summary: 'SustAInd focuses on building AI systems that are technically, environmentally and economically sustainable. A software-centric framework is being developed to reduce energy use while maintaining system performance, covering architecture design, runtime management and effective trade-offs to align with India\'s sustainability goals.',
    members: [
      { name: 'Aneetta Sara',          role: 'Junior Research Fellow' },
      { name: 'Chandrasekar S',        role: 'Junior Research Fellow / Master\'s Student' },
      { name: 'Akhila Matathammal',    role: 'PhD Student' },
      { name: 'Hiya Bhatt',            role: 'Master\'s Student' },
      { name: 'Shaunak Biswas',        role: 'DD Student' },
      { name: 'Arihant Tripathy',      role: 'DD Student' },
    ],
  },
  {
    id: 'llm4adr',
    title: 'LLM4ADR',
    summary: 'LLM4ADR aims to generate architecture design decisions in the context of Architecture Decision Records, using Generative AI and LLMs.',
    members: [
      { name: 'Rudra Dhar',    role: 'PhD Student' },
      { name: 'Adyansh Kakran',role: 'DD Student' },
      { name: 'Amey Karan',    role: 'DD Student' },
    ],
  },
  {
    id: 'adamls',
    title: 'AdaMLs',
    summary: 'AdaMLs enables self-adaptation in machine learning enabled systems targeting Quality of Service.',
    members: [
      { name: 'Arya Marda',        role: 'Honours Student' },
      { name: 'Shubham Kulkarni',  role: 'Masters Student' },
    ],
  },
  {
    id: 'locoml-platform',
    title: 'LoCoML Platform',
    summary: 'LoCoML is a low-code machine learning platform allowing users with limited ML knowledge to build, update, and deploy models. It incorporates automation throughout the pipeline — from data pre-processing to deployment — with ~2% runtime overhead.',
    members: [
      { name: 'Chandrasekar S',         role: 'Masters Student' },
      { name: 'Maddireddy Kritin',      role: 'Honours Student' },
      { name: 'Kotekal Methukula Santhosh', role: 'Honours Student' },
      { name: 'Nijesh Raghava',         role: 'BTP Student' },
      { name: 'Varanasi Vamseedhar',    role: 'BTP Student' },
      { name: 'Ayush Agarwal',          role: 'BTP Student' },
      { name: 'Siddharth Mavani',       role: 'BTP Student' },
      { name: 'Rohan C',                role: 'BTP Student' },
      { name: 'Harshit Karwal',         role: 'BTP Student' },
      { name: 'Mukta Chanda',           role: 'BTP Student' },
      { name: 'Shashwat Dash',          role: 'BTP Student' },
    ],
  },
  {
    id: 'sa4s',
    title: 'SA4S',
    summary: 'An architecture-based approach for sustainable data intensive software systems. Addresses technical and environmental sustainability through an architecture-centric lens, considering maintainability, evolvability, and energy consumption for IoT and ML-enabled data intensive systems.',
    members: [
      { name: 'Shubham Kulkarni',   role: 'Masters Student' },
      { name: 'Arya Marda',         role: 'Honours Student' },
      { name: 'Meghana Tedla',      role: 'Honours Student' },
      { name: 'Akhila Matathammal', role: 'PhD Student' },
      { name: 'Hiya Bhatt',         role: 'External Student' },
    ],
  },
  {
    id: 'llm-cloudops',
    title: 'LLM Powered Autonomous CloudOps',
    summary: 'Developing an LLM-powered system for autonomous cloud operations in collaboration with MontyCloud Inc. The system automates security checks, compliance assessments, and cost/reliability recommendations. The first product, CloudOps Copilot, is now available.',
    members: [
      { name: 'Mahisha Ramesh',     role: 'Research Engineer' },
      { name: 'Rudra Dhar',         role: 'PhD Student' },
      { name: 'Sreemaee Akshathala',role: 'Research Engineer' },
      { name: 'Amey Karan',         role: 'DD Student' },
      { name: 'Bassam Adnan',       role: 'DD Student' },
      { name: 'Adyansh Kakran',     role: 'DD Student' },
      { name: 'Shrikara A',         role: 'Honours Student' },
    ],
  },
  {
    id: 'greensam',
    title: 'GreenSAM',
    summary: 'Development of approaches, frameworks and tools for greening software deployments, in collaboration with Lloyds Technology Center.',
    members: [
      { name: 'Akhila Matathammal', role: 'PhD Student' },
      { name: 'Shaunak Biswas',     role: 'BTP Student' },
      { name: 'Prakhar Singhal',    role: 'BTP Student' },
    ],
  },
  {
    id: 'model-switching',
    title: 'Model Switching',
    summary: 'Enhancing sustainability at the edge using model switching, as part of the Qualcomm EdgeAI labs at IIIT Hyderabad.',
    members: [
      { name: 'Akhila Matathammal', role: 'PhD Student' },
      { name: 'Arya Marda',         role: 'BTP Student' },
    ],
  },
  {
    id: 'python-vlabs',
    title: 'Python — VLabs',
    summary: 'Developing Python lab experiments as part of the Virtual Labs Project (MHRD, Government of India). Covers advanced topics including exception handling, complex data types, higher-order functions, and lambda functions.',
    members: [
      { name: 'Adyansh Kakran',    role: 'DD Student' },
      { name: 'Prathistha Abrol',  role: 'DD Student' },
      { name: 'Karthik Konar',     role: 'Masters Student' },
      { name: 'Mohit Patni',       role: 'External Student' },
    ],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">Projects</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Current Projects</h1>
          <p className="mt-3 text-[#8DB8A2] max-w-2xl">
            Active research initiatives in self-adaptive systems and sustainable computing.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-6 transition-all duration-200 group"
              >
                <h2 className="text-lg font-bold text-[#1A1710] mb-3 group-hover:text-[#2D6A4F] transition-colors duration-150">
                  {project.title}
                </h2>
                <p className="text-sm text-[#6B6455] mb-5 leading-relaxed">
                  {project.summary}
                </p>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="text-[#2D6A4F]" size={15} />
                    <span className="text-xs text-[#2D6A4F] tracking-[0.15em] uppercase font-semibold">Members</span>
                  </div>
                  <ul className="space-y-1.5">
                    {project.members.map((member, i) => (
                      <li key={i} className="flex items-center text-sm text-[#6B6455]">
                        <span className="w-1.5 h-1.5 bg-[#2D6A4F] rounded-full mr-3 flex-shrink-0" />
                        <span className="font-medium text-[#1A1710]">{member.name}</span>
                        <span className="ml-2 text-[#6B6455]">— {member.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
