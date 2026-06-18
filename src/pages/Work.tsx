
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
    summary: 'SustAInd project focuses on building AI systems that are technically, environmentally and economically sustainable. A software-centric framework is being developed to reduce energy use while maintaining system performance. This project will look at architecture design, runtime management and effective trade-offs. Overall, the project supports organisations in creating AI solutions aligned with India\'s sustainability goals.',
    members: [
      { name: 'Aneetta Sara', role: 'Junior Research Fellow' },
      { name: 'Chandrasekar S', role: 'Junior Research Fellow / Master\'s Student' },
      { name: 'Akhila Matathammal', role: 'PhD Student' },
      { name: 'Hiya Bhatt', role: 'Master\'s Student' },
      { name: 'Shaunak Biswas', role: 'DD Student' },
      { name: 'Arihant Tripathy', role: 'DD Student' },
    ]
  },
  {
    id: 'llm4adr',
    title: 'LLM4ADR',
    summary: 'LLM4ADR is a research project that aims to generate architecture design decisions in the context of Architecture Decision Records, with Generative AI - LLMs.',
    members: [
      { name: 'Rudra Dhar', role: 'PhD Student' },
      { name: 'Adyansh Kakran', role: 'DD Student' },
      { name: 'Amey Karan', role: 'DD Student' },
    ]
  },
  {
    id: 'adamls',
    title: 'AdaMLs',
    summary: 'AdaMLs is a research project that aims to enable self-adaptation in machine learning enabled systems targeting QoS.',
    members: [
      { name: 'Arya Marda', role: 'Honours Student' },
      { name: 'Shubham Kulkarni', role: 'Masters Student' },
    ]
  },
  {
    id: 'locoml-platform',
    title: 'LoCoML Platform',
    summary: 'LoCoML is a low-code machine learning platform designed to allow users with limited machine learning knowledge to easily build, update, and deploy models tailored to their specific needs. It incorporates automation features throughout the machine learning pipeline, from data pre-processing to model deployment.',
    members: [
      { name: 'Chandrasekar S', role: 'Masters Student' },
      { name: 'Maddireddy Kritin', role: 'Honours Student' },
      { name: 'Kotekal Methukula Santhosh', role: 'Honours Student' },
      { name: 'Nijesh Raghava', role: 'BTP Student' },
      { name: 'Varanasi Vamseedhar', role: 'BTP Student' },
      { name: 'Ayush Agarwal', role: 'BTP Student' },
      { name: 'Siddharth Mavani', role: 'BTP Student' },
      { name: 'Rohan C', role: 'BTP Student' },
      { name: 'Harshit Karwal', role: 'BTP Student' },
      { name: 'Mukta Chanda', role: 'BTP Student' },
      { name: 'Shashwat Dash', role: 'BTP Student' },
    ]
  },
  {
    id: 'sa4s',
    title: 'SA4S',
    summary: 'SA4S is an architecture-based approach for sustainable data intensive software systems. The project aims to address technical and environmental sustainability challenges faced by modern software systems through an architecture-centric approach. It focuses on determining the sustainability of legacy or green field software systems through the lens of software architecture, considering costs related to maintainability, evolvability, and energy consumption, particularly for IoT and Machine Learning enabled Data Intensive Software Systems (DISS).',
    members: [
      { name: 'Shubham Kulkarni', role: 'Masters Student' },
      { name: 'Arya Marda', role: 'Honours Student' },
      { name: 'Meghana Tedla', role: 'Honours Student' },
      { name: 'Akhila Matathammal', role: 'PhD Student' },
      { name: 'Hiya Bhatt', role: 'External Student' },
    ]
  },
  {
    id: 'llm-cloudops',
    title: 'LLM Powered Autonomous CloudOps',
    summary: 'LLM Powered Autonomous CloudOps is a project focused on developing an LLM powered system for autonomous cloud operations. The project, in collaboration with MontyCloud Inc., aims to automate cloud operations with minimal human support, including performing security checks, compliance checks, running well-architected assessments, and recommending actions to enhance security, reduce cost, and improve reliability. The first version of the product, CloudOps Copilot, is now available.',
    members: [
      { name: 'Mahisha Ramesh', role: 'Research Engineer' },
      { name: 'Rudra Dhar', role: 'PhD Student' },
      { name: 'Sreemaee Akshathala', role: 'Research Engineer' },
      { name: 'Amey Karan', role: 'DD Student' },
      { name: 'Bassam Adnan', role: 'DD Student' },
      { name: 'Adyansh Kakran', role: 'DD Student' },
      { name: 'Shrikara A', role: 'Honours Student' },
    ]
  },
  {
    id: 'greensam',
    title: 'GreenSAM',
    summary: 'Development of approaches, frameworks and tools for greening software deployments. The goal of the project is to develop approaches, frameworks and tools for greening software deployments. The project is in collaboration with Lloyds Technology Center.',
    members: [
      { name: 'Akhila Matathammal', role: 'PhD Student' },
      { name: 'Shaunak Biswas', role: 'BTP Student' },
      { name: 'Prakhar Singhal', role: 'BTP Student' },
    ]
  },
  {
    id: 'model-switching',
    title: 'Model Switching',
    summary: 'Enhancing Sustainability at the Edge using model Switching. This is a project as a part of the Qualcomm EdgeAI labs at IIIT Hyderabad.',
    members: [
      { name: 'Akhila Matathammal', role: 'PhD Student' },
      { name: 'Arya Marda', role: 'BTP Student' },
    ]
  },
  {
    id: 'python-vlabs',
    title: 'Python - Vlabs',
    summary: 'Python - Vlabs is a project focused on developing Python lab experiments as part of the Virtual Labs Project. Virtual Labs is a national funded project by MHRD, Government of India that aims to provide a platform for students to learn various engineering concepts in an interactive and engaging manner. This specific project develops additional experiments for teaching advanced topics in Python, including concepts like exception handling, complex data types, higher order functions, and lambda functions.',
    members: [
      { name: 'Adyansh Kakran', role: 'DD Student' },
      { name: 'Prathistha Abrol', role: 'DD Student' },
      { name: 'Karthik Konar', role: 'Masters Student' },
      { name: 'Mohit Patni', role: 'External Student' },
    ]
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sa4s-teal-50 to-sa4s-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Current Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our active research initiatives in self-adaptive systems and sustainable computing.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={project.id}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg hover:border-sa4s-blue-500 transition-all duration-150 group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sa4s-blue-600 transition-colors duration-150">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Users className="mr-2 text-sa4s-teal-600" size={20} />
                      <h3 className="text-lg font-semibold text-gray-900">Members</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-sa4s-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                          <span className="font-medium">{member.name}</span>
                          <span className="text-gray-500 ml-2">— {member.role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Section divider - only show between rows, not after last items */}
                {index < projects.length - 2 && (index % 2 === 1 || (index === projects.length - 2 && projects.length % 2 === 1)) && (
                  <div className="col-span-1 lg:col-span-2 my-8">
                    <hr className="border-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
