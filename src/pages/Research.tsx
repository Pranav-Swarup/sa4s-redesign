import React from 'react';
import { publicUrl } from '@/lib/utils';

const researchAreas = [
  {
    title: 'AI for Software Architecture (Design-Time)',
    description: 'This direction looks at how AI can support architects before a system is ever deployed. Work here covers using LLMs and agents to generate architectural decision records, recover traceability links, produce architecture views from source code, and manage architecture knowledge over the lifetime of a project. Recent work includes ArchBench, a benchmarking platform for evaluating LLMs on these tasks, and ArchView, which studies automated architecture view generation across hundreds of open-source repositories.',
  },
  {
    title: 'AI for Software Architecture (Run-Time)',
    description: 'This direction focuses on systems that can observe themselves, reason about what is happening, and reconfigure without human intervention. The group has worked extensively on MAPE-K based self-adaptive systems for ML pipelines and IoT deployments, studying how architectural patterns can help systems meet quality goals around performance, energy consumption, and reliability even as their environment changes.',
  },
  {
    title: 'Architecting AI Systems',
    description: 'As AI moves into production, the question of how to structure and sustain AI-enabled systems becomes critical. This includes architectural patterns for multi-agent systems, sustainable MLOps practices that reduce unnecessary retraining, design guidelines for LLM-based pipelines, and empirical studies on how agentic systems behave in real software engineering workflows. Tools like HarmonE and the MOYA framework for agentic architectural patterns came out of this line of work.',
  },
  {
    title: 'Code Generation',
    description: 'This direction examines whether AI agents can generate functional software components reliably enough to be useful in practice. Recent work evaluated agents on microservice generation across real integration scenarios and found meaningful gaps between unit and integration test pass rates. The group is interested in understanding where agent-generated code falls short architecturally, and what guardrails or evaluation frameworks can make generation more trustworthy.',
  },
];

const collaborators = [
  { name: 'Frame Lab, University of L\'Aquila', logo: '/images/collabpic/framelab.png' },
  { name: 'DeepSE Group, Politechnico di Milano', logo: '/images/collabpic/deepse.png' },
  { name: 'S2 Group, VU', logo: '/images/collabpic/s2.png' },
  { name: 'Middlesex University', logo: '/images/collabpic/middlesex.png' },
  { name: 'Linnaeus University', logo: '/images/collabpic/lnu.png' },
  { name: 'Smart City Living Lab, IIIT Hyderabad', logo: '/images/collabpic/scrc.png' },
  { name: 'MontyCloud', logo: '/images/collabpic/montycloud.png' },
  { name: 'Qualcomm', logo: '/images/collabpic/qualcomm.png' },
  { name: 'Lloyds Banking Group', logo: '/images/collabpic/lloyds-bank.jpg' },
];

const Research: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16 text-center">
        <div className="container mx-auto px-4">
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Research Areas</h1>
          <p className="mt-4 text-[#8DB8A2] mx-auto">Building the foundations for smarter software systems that learn, adapt, and evolve to be sustainable</p>
        </div>
      </div>

      {/* Research Areas */}
      <div className="px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-5">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-[#F0EBE1] border border-[#D8D2C4] rounded-xl p-7">
              <h2 className="mb-3 text-base font-bold text-[#1A1710]">{area.title}</h2>
              <p className="text-sm leading-relaxed text-[#6B6455]">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Collaborators */}
      <div className="bg-[#F0EBE1] border-t border-[#D8D2C4] py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold mb-10">
            Our Collaborators
          </h2>
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {collaborators.map((collaborator) => (
              <div key={collaborator.name} className="flex justify-center">
                <img
                  className="max-h-20 w-full object-contain transition-transform duration-200 hover:scale-110"
                  src={publicUrl(collaborator.logo)}
                  alt={collaborator.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
