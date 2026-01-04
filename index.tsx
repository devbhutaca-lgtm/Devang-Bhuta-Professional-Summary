import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Simple interface for sections
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bg?: string;
  subtitle?: React.ReactNode;
  isDark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, bg = "bg-white", subtitle, isDark = false }) => (
  <section id={id} className={`py-32 ${bg}`}>
    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      <div className="mb-20 text-center md:text-left">
        <h2 className={`text-4xl md:text-7xl font-black tracking-tighter flex items-center justify-center md:justify-start ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <span className="w-20 h-2 bg-blue-600 mr-8 inline-block rounded-full"></span>
          {title}
        </h2>
        {subtitle && <div className={`mt-8 max-w-3xl text-xl font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</div>}
      </div>
      {children}
    </div>
  </section>
);

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${className} bg-slate-100 relative flex items-center justify-center overflow-hidden`}>
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
          <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
      {error ? (
        <div className="flex flex-col items-center justify-center text-slate-400 p-8 text-center">
          <i className="fa-solid fa-image text-6xl mb-4"></i>
          <p className="text-xs font-black uppercase tracking-widest">Image Unavailable</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      )}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileImage = "https://res.cloudinary.com/doy6jwq1k/image/upload/v1767548995/Devang_tbb8uo.jpg"; 
  const emailLink = "mailto:devbhuta@gmail.com?subject=Connect%20with%20Devang";
  const githubLink = "https://github.com/devbhutaca-lgtm";

  const mainMetrics = [
    { label: "Global Revenue Generated", value: "$12M+", sub: "Across 15+ countries at Aurionpro" },
    { label: "Annual Operational Savings", value: "$5M", sub: "Achieved via platform re-engineering at TELUS" },
    { label: "Support Escalation Reduction", value: "85%", sub: "Driven by AI-powered assistant launch" },
    { label: "Payment Transaction Success", value: "94%", sub: "High-uptime platform delivery (Mozido)" }
  ];

  const tools = {
    "AI & Agentic": ["Vertex AI", "AI Studio", "Code Wiki", "Zapier", "n8n", "ChatGPT/Claude", "LLM Discovery", "Agentic Workflows"],
    "Product Strategy": ["Jira", "Confluence", "Miro", "Tableau", "AHA", "Experimentation Frameworks", "Roadmap Scaling"],
    "Technical Stack": ["Python", "Java", "SQL", "REST APIs", "Microservices", "AWS", "GCP", "Azure Infra"],
    "Leadership Skills": ["Customer Obsession", "Ownership", "Bias for Action", "Data-Driven Decisions", "Strategic Trade-offs", "Privacy-by-Design"]
  };

  const experience = [
    {
      company: "TELUS",
      role: "Sr. Technical Product Manager",
      period: "Mar 2019 – Present",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      ecoFocus: "Subscription Marketplace, Loyalty Platform, Supply Ops, Data Cleanroom",
      highlights: [
        "Led 3 product teams to deliver digital platforms, accelerating time-to-market by 30%.",
        "Launched a subscription platform generating $8M in its first year and delivered $5M in annual savings.",
        "Establishing a roadmap to onboard 30+ products by 2027.",
        "Integrated AI-driven analytics, boosting customer engagement by 8% MoM.",
        "Reduced customer escalations by 85% via proactive escalation management.",
        "Developed 35+ KPI dashboards for 10+ teams, improving operational visibility by 50%."
      ]
    },
    {
      company: "Aurionpro Solutions",
      role: "Product Owner / Technical Lead",
      period: "Jan 2012 – May 2018",
      location: "Asia, US, Europe",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      ecoFocus: "SCMProfit (Logistics), Mozido (Payments), Cybersecurity Frameworks",
      highlights: [
        "Led delivery of enterprise-scale B2B SaaS platforms globally across 3 Agile teams.",
        "Launched SCMProfit in over 15 countries, generating $12M+ in revenue for shipping/warehousing clients.",
        "Built a payments platform with 94% transaction success rate and <4% failure rate.",
        "Managed cybersecurity platform development, reducing incident rates by 30% via threat detection.",
        "Ensured 100% on-time releases of mission-critical logistics and fintech products."
      ]
    }
  ];

  const personalProjects = [
    {
      name: "Warranted",
      url: "https://docs.google.com/document/d/1OYZ4d8igBlJB_qNd1ETLaXbzkPCJXcCQKo3ZcQdcgZY/edit?tab=t.0#heading=h.hste2nz6njr",
      category: "Innovation",
      desc: "Revolutionizing product warranty management and lifecycle tracking through technical automation.",
      icon: "fa-shield-halved",
      protoUrl: "https://github.com/devbhutaca-lgtm"
    },
    {
      name: "My Personal Blackbox",
      url: "https://docs.google.com/document/d/1vt5eh3B_j4QdkCegnmytbGVGHKwTAigBg52DiHRNa0o/edit?tab=t.0#heading=h.la3chc29h8nr",
      category: "Security",
      desc: "High-security personal data vault design focused on secure digital legacy and recovery protocols.",
      icon: "fa-vault",
      protoUrl: "https://github.com/devbhutaca-lgtm"
    },
    {
      name: "My Review Buddy",
      url: "https://docs.google.com/document/d/1R6VbJke_O26x2DftQaK1SYq9v384yOF3Q7xH-xbjLBU/edit?tab=t.0",
      category: "AI Productivity",
      desc: "AI-driven synthesis for professional reviews, helping leaders manage feedback at scale.",
      icon: "fa-comments",
      protoUrl: "https://github.com/devbhutaca-lgtm"
    }
  ];

  const featuredVentures = [
    {
      name: "Little Wizards",
      url: "https://littlewizardsclass.vercel.app/",
      type: "EdTech",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
      desc: "An interactive, gamified learning platform for kids, empowering young minds through curiosity-driven education."
    },
    {
      name: "Kri-Sun",
      url: "https://kri-sun.vercel.app/",
      type: "Event Management",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      desc: "Specialized event management company focused on creating high-impact experiences for smaller gatherings and private boutique events."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <div className="text-3xl font-black tracking-tighter text-slate-900 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-blue-600">DEVANG</span> BHUTA
          </div>
          <div className="hidden lg:flex space-x-12 font-bold text-slate-500 text-[11px] tracking-[0.25em] uppercase">
            <a href="#about" className="nav-link hover:text-slate-900">About</a>
            <a href="#skills" className="nav-link hover:text-slate-900">Toolkit</a>
            <a href="#experience" className="nav-link hover:text-slate-900">Experience</a>
            <a href="#projects" className="nav-link text-blue-600 hover:text-blue-700">Projects</a>
            <a href={githubLink} target="_blank" className="nav-link hover:text-slate-900">GitHub</a>
          </div>
          <a href={emailLink} className="bg-slate-900 hover:bg-blue-600 text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all btn-shadow">
            Connect
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-48 pb-24 md:pt-64 md:pb-40 relative overflow-hidden bg-white">
        <div className="absolute inset-0 hero-pattern opacity-[0.4]"></div>
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="flex-1 space-y-12">
            <div className="inline-flex items-center gap-4 bg-blue-50 text-blue-700 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Technology Product Leader
            </div>
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                Transforming <br/><span className="gradient-text">Platforms</span>
              </h1>
              <p className="text-2xl text-slate-500 leading-relaxed font-semibold max-w-3xl mx-auto lg:mx-0">
                14+ Years of Technical Product Leadership delivering SaaS, AI Solutions, and Platform Strategy for Enterprise Giants.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
              <div className="space-y-4">
                <h3 className="font-black text-slate-900 text-[10px] uppercase tracking-[0.4em]">Career Impact</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
                  "Specializing in zero-to-one product launches and complex technical re-engineering at scale."
                </p>
              </div>
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl">
                   <i className="fa-solid fa-play"></i>
                 </div>
                 <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em]">Built for Growth</span>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 relative">
            <div className="relative group">
              <ImageWithFallback 
                src={profileImage} 
                alt="Devang Bhuta" 
                className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-[6rem] shadow-3xl relative z-10 border-[16px] border-white group-hover:scale-[1.02] transition-transform duration-1000"
              />
              <div className="absolute -bottom-16 -right-16 w-full h-full bg-blue-600/5 rounded-[6rem] -z-0 border-2 border-blue-50"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-600 rounded-[3rem] flex items-center justify-center text-white text-7xl shadow-2xl shadow-blue-200 z-20 transform -rotate-6">
                <i className="fa-solid fa-crown"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Analytics Dashboard */}
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {mainMetrics.map((stat, i) => (
               <div key={i} className="group p-10 bg-white/5 border border-white/10 rounded-[4rem] hover:bg-white/10 transition-all duration-500 hover:scale-105">
                 <div className="text-6xl font-black mb-4 text-blue-500">{stat.value}</div>
                 <div className="text-white text-lg font-bold mb-2">{stat.label}</div>
                 <div className="text-slate-500 text-xs font-medium uppercase tracking-widest">{stat.sub}</div>
               </div>
             ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[150px] rounded-full"></div>
      </section>

      {/* Technical Toolkit */}
      <Section id="skills" title="Technical Toolkit" bg="bg-slate-50" subtitle="Orchestrating complex ecosystems with an AI-first approach and high-level strategy.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(tools).map(([category, items], idx) => (
            <div key={idx} className="bg-white p-14 rounded-[5rem] border border-slate-100 shadow-sm group hover:shadow-4xl transition-all duration-700">
              <div className="flex items-center gap-8 mb-12">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 text-4xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <i className={`fa-solid ${idx === 0 ? 'fa-robot' : idx === 1 ? 'fa-layer-group' : idx === 2 ? 'fa-code' : 'fa-chess-king'}`}></i>
                </div>
                <h4 className="text-4xl font-black text-slate-900 tracking-tighter">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-4">
                {items.map((item, i) => (
                  <span key={i} className="bg-slate-50 text-slate-800 px-6 py-4 rounded-3xl text-[11px] font-black border border-slate-100 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Professional Experience */}
      <Section id="experience" title="Professional Experience">
        <div className="space-y-40">
          {experience.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col lg:flex-row gap-20">
                 {/* ECOSYSTEM SIDEBAR - Redesigned Look */}
                 <div className="lg:w-1/3 space-y-12">
                    <div className="relative rounded-[4rem] overflow-hidden aspect-square shadow-2xl group-hover:shadow-4xl transition-all duration-1000">
                      <ImageWithFallback src={exp.image} alt={exp.company} className="w-full h-full" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-10 left-10 text-white font-black text-3xl tracking-tighter">{exp.company}</div>
                    </div>
                    
                    <div className="bg-slate-950 p-12 rounded-[4rem] border border-white/10 relative overflow-hidden group/eco">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 blur-[60px] rounded-full"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 block mb-8">Ecosystem Focus</span>
                      <p className="text-white font-bold text-xl leading-relaxed italic tracking-tight opacity-90">
                        "{exp.ecoFocus}"
                      </p>
                    </div>
                 </div>

                 {/* HIGHLIGHTS */}
                 <div className="lg:w-2/3">
                    <div className="mb-14">
                      <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4">{exp.role}</h3>
                      <div className="flex items-center text-blue-600 font-black text-sm uppercase tracking-[0.3em] gap-6">
                        {exp.period} <span className="w-2 h-2 rounded-full bg-slate-200"></span> {exp.location}
                      </div>
                    </div>
                    
                    <ul className="grid grid-cols-1 gap-10">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start group/li">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mr-8 mt-1 flex-shrink-0 group-hover/li:bg-blue-600 group-hover/li:text-white transition-all duration-300">
                            <i className="fa-solid fa-check text-sm"></i>
                          </div>
                          <span className="text-slate-600 font-medium text-2xl leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Projects */}
      <Section id="projects" title="Personal Projects" bg="bg-slate-950" isDark subtitle={<span className="text-slate-400">Strategic frameworks and proof-of-concepts designed to optimize professional and personal workflows.</span>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {personalProjects.map((proj, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl p-14 rounded-[5rem] border border-white/10 flex flex-col hover:bg-white hover:shadow-4xl transition-all duration-700 group card-hover-effect">
              <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white text-5xl mb-14 shadow-4xl shadow-blue-900/40 group-hover:rotate-6 transition-all duration-500">
                <i className={`fa-solid ${proj.icon}`}></i>
              </div>
              <h3 className="text-3xl font-light text-white group-hover:text-slate-950 mb-6 tracking-tighter italic">{proj.name}</h3>
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 block">{proj.category}</span>
              <p className="text-slate-400 group-hover:text-slate-700 font-medium text-xl leading-relaxed mb-16 flex-grow">{proj.desc}</p>
              
              <div className="space-y-4">
                <a href={proj.url} target="_blank" className="w-full flex items-center justify-between bg-white/10 text-white group-hover:bg-slate-900 group-hover:text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all">
                  Documentation <i className="fa-solid fa-file-lines"></i>
                </a>
                <a href={proj.protoUrl} target="_blank" className="w-full flex items-center justify-between bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all hover:bg-blue-700">
                  Working Prototype <i className="fa-solid fa-flask"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Ventures */}
      <Section id="ventures" title="Featured Ventures" subtitle="Platforms engineered for educational impact and strategic boutique events.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {featuredVentures.map((proj, idx) => (
            <div key={idx} className="group bg-white rounded-[5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-4xl transition-all duration-1000 flex flex-col h-full card-hover-effect">
              <div className="h-96 relative overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors"></div>
                <div className="absolute bottom-10 left-10">
                   <span className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-slate-900 text-[10px] font-black uppercase tracking-widest">{proj.type}</span>
                </div>
              </div>
              <div className="p-20 flex-1 flex flex-col">
                <h3 className="text-6xl font-black text-slate-900 tracking-tighter mb-8">{proj.name}</h3>
                <p className="text-slate-600 font-medium text-2xl leading-relaxed mb-16">{proj.desc}</p>
                <div className="mt-auto">
                  <a href={proj.url} target="_blank" className="inline-flex items-center justify-center w-full md:w-auto bg-slate-900 hover:bg-blue-600 text-white px-14 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-4xl">
                    Launch Platform <i className="fa-solid fa-arrow-right-long ml-6"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-56 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-[0.05]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-32 border-b border-white/5 pb-48 mb-24">
            <div className="max-w-4xl space-y-12">
              <h2 className="text-7xl md:text-9xl font-black mb-12 leading-[0.85] tracking-tighter italic">
                Let's <span className="text-blue-500">Design</span> the <br/>Future.
              </h2>
              <p className="text-slate-400 text-4xl font-medium leading-relaxed">
                Open to strategic leadership and technical product opportunities globally.
              </p>
            </div>
            <div className="flex flex-col gap-14 w-full lg:w-auto">
              <a href={emailLink} className="group flex items-center gap-12 bg-white/5 p-12 rounded-[4rem] hover:bg-white hover:text-slate-950 transition-all duration-700 border border-white/10">
                <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-5xl group-hover:rotate-12 transition-all">
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.6em] mb-2">Direct Channel</div>
                  <div className="text-2xl font-black">devbhuta@gmail.com</div>
                </div>
              </a>
              <div className="flex gap-10">
                <a href="https://linkedin.com" target="_blank" className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-blue-600 transition-all text-4xl border border-white/10 hover:-translate-y-4">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={githubLink} target="_blank" className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-blue-600 transition-all text-4xl border border-white/10 hover:-translate-y-4">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-black uppercase tracking-[0.7em] gap-20">
            <p>&copy; 2024 Devang Bhuta. High-Impact Product Leadership.</p>
            <div className="flex space-x-14">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Toolkit</a>
              <a href="#experience" className="hover:text-white transition-colors">Career</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);