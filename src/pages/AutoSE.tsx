import { ArrowRight, BookOpen, FolderKanban, Handshake, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { publicUrl } from "../lib/utils";

import CountUp from "../components/CountUp";
import LifecycleMap from "../components/LifecycleMap";
import {
  lifecycleMapNodes,
  projectHighlights,
  publicationHighlights,
  talkHighlights,
} from "../data/auto-se";
import { AgenticLink } from "../data/auto-se";

function LinkButton({ link }: { link: AgenticLink }) {
  const className =
    "inline-flex items-center gap-2 text-sm font-medium text-[#2D6A4F] hover:text-[#1A1710] transition-colors duration-150";

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label}
        <ArrowRight size={13} />
      </a>
    );
  }

  return (
    <Link to={link.href} className={className}>
      {link.label}
      <ArrowRight size={13} />
    </Link>
  );
}

function LinkRow({ links }: { links: AgenticLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {links.map((link) => (
        <LinkButton key={`${link.label}-${link.href}`} link={link} />
      ))}
    </div>
  );
}

const AutoSE = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] pb-10 pt-16 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">Research</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">
            Our Exploration Towards Autonomous SE
          </h1>
        </div>
      </div>

      {/* Lifecycle map + stats */}
      <section className="border-b border-[#D8D2C4] bg-[#FAF7F2]">
        <div className="container mx-auto px-4 pb-12">
          <LifecycleMap nodes={lifecycleMapNodes} variant="autose" />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { value: projectHighlights.length,   label: 'Projects & systems' },
              { value: talkHighlights.length,       label: 'Talks & tutorials' },
              { value: lifecycleMapNodes.length,    label: 'Research papers' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F0EBE1] border border-[#D8D2C4] rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#1A1710]">
                  <CountUp to={stat.value} />
                </div>
                <p className="mt-1 text-sm text-[#6B6455]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three columns */}
      <section className="bg-[#FAF7F2] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">

            {/* Projects */}
            <div className="px-4 lg:px-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0EBE1] border border-[#D8D2C4] text-[#2D6A4F]">
                  <FolderKanban size={18} />
                </div>
                <h2 className="text-base font-bold text-[#1A1710]">Projects &amp; Systems</h2>
              </div>
              <div className="space-y-4">
                {projectHighlights.map((item) => (
                  <article key={item.title} className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-5 transition-all duration-150">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F]">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-2 text-sm font-bold text-[#1A1710]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6455]">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#FAF7F2] px-2.5 py-0.5 text-[10px] font-medium text-[#6B6455] ring-1 ring-[#D8D2C4]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <LinkRow links={item.links} />
                  </article>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex lg:items-stretch lg:justify-center lg:px-0">
              <div className="w-px bg-[#D8D2C4]" />
            </div>
            <hr className="my-8 border-[#D8D2C4] lg:hidden" />

            {/* Talks */}
            <div className="px-4 lg:px-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0EBE1] border border-[#D8D2C4] text-[#2D6A4F]">
                  <Mic size={18} />
                </div>
                <h2 className="text-base font-bold text-[#1A1710]">Talks &amp; Tutorials</h2>
              </div>
              <div className="space-y-4">
                {talkHighlights.map((item) => (
                  <article key={item.title} className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-5 transition-all duration-150">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F]">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-2 text-sm font-bold text-[#1A1710]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6455]">{item.description}</p>
                    <LinkRow links={item.links} />
                  </article>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex lg:items-stretch lg:justify-center lg:px-0">
              <div className="w-px bg-[#D8D2C4]" />
            </div>
            <hr className="my-8 border-[#D8D2C4] lg:hidden" />

            {/* Publications */}
            <div className="px-4 lg:px-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0EBE1] border border-[#D8D2C4] text-[#2D6A4F]">
                  <BookOpen size={18} />
                </div>
                <h2 className="text-base font-bold text-[#1A1710]">Publication Highlights</h2>
              </div>
              <div className="space-y-4">
                {publicationHighlights.map((item) => (
                  <article key={item.title} className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-5 transition-all duration-150">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F]">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-2 text-sm font-bold text-[#1A1710]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6455]">{item.description}</p>
                    <LinkRow links={item.links} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="border-t border-[#D8D2C4] bg-[#F0EBE1] py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-10 flex items-center justify-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FAF7F2] border border-[#D8D2C4] text-[#2D6A4F]">
              <Handshake size={18} />
            </div>
            <h2 className="text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold">
              Collaborations
            </h2>
          </div>

          <div className="mb-10">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6455]">Industry</p>
            <div className="flex items-center justify-center">
              <a
                href="https://montycloud.com"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 rounded-xl border border-[#D8D2C4] bg-[#FAF7F2] px-10 py-6 hover:border-[#2D6A4F]/40 transition-all duration-150"
              >
                <img
                  src={publicUrl("/images/collabpic/montycloud.png")}
                  alt="MontyCloud"
                  className="h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6455]">Research Groups</p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {[
                { href: 'https://s2group.cs.vu.nl/',         src: '/images/collabpic/s2group.png',  alt: 'S2 Research Group', label: 'VU Amsterdam' },
                { href: 'https://www.sdu.dk/',               src: '/images/collabpic/sdu.png',       alt: 'SDU',               label: 'Vejle, Denmark' },
                { href: 'https://framelab.disim.univaq.it/', src: '/images/collabpic/framelab.png', alt: 'FrameLab',          label: 'Univaq, Italy' },
              ].map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-xl border border-[#D8D2C4] bg-[#FAF7F2] px-8 py-5 hover:border-[#2D6A4F]/40 transition-all duration-150"
                >
                  <img src={publicUrl(c.src)} alt={c.alt} className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="text-xs text-[#6B6455]">{c.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoSE;
