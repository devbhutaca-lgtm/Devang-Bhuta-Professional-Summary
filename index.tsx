import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Simple interface for sections
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bg?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, bg = "bg-white", subtitle }) => (
  <section id={id} className={`py-24 ${bg}`}>
    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 flex items-center tracking-tight">
          <span className="w-12 h-1.5 bg-blue-600 mr-4 inline-block rounded-full"></span>
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-slate-500 max-w-2xl text-lg font-medium">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileImage = "https://photos.google.com/photo/AF1QipO2FjDR3ezOG-COjFOR1VWM_5IdlKL1w_sfauE8"; 

  const stats = [
    { label: "Revenue Generated", value: "$12M+" },
    { label: "First Year Revenue", value: "$8M" },
    { label: "Annual Savings", value: "$5M" },
    { label: "Escalation Reduction", value: "85%" }
  ];

  const tools = {
    "Product & Program": ["Jira", "Confluence", "Monday", "Miro", "Tableau", "Google Studio", "AHA"],
    "Languages & Infra": ["Python", "Java", "SQL", "REST APIs", "Microservices", "AWS", "GCP", "Azure"],
    "AI Toolkit": ["ChatGPT", "Claude", "Gemini", "n8n", "Bubble.io"],
    "Practices": ["Agile", "OKRs", "Privacy-by-Design", "Data-Driven Roadmaps"]
  };

  const experience = [
    {
      company: "TELUS",
      location: "Toronto",
      role: "Sr. Technical Product Manager",
      period: "Mar 2019 – Present",
      products: "Subscription Platform, Loyalty Platform, Supply Ops Re-Engineering",
      highlights: [
        "Led three product teams to deliver digital platforms across subscription and loyalty, accelerating time-to-market by 30%.",
        "Spearheaded a subscription platform generating $8M in year one and $5M in annual savings.",
        "Established roadmap to onboard 30+ products by 2027 while driving strategic alignment.",
        "Integrated AI-driven analytics, boosting customer engagement by 8% MoM.",
        "Implemented proactive escalation management, reducing customer escalations by 85%.",
        "Developed 35+ KPI dashboards for 10+ teams, improving operational visibility by 50%."
      ]
    },
    {
      company: "Aurionpro Solutions",
      location: "Asia, US, Europe",
      role: "Product Owner / Technical Lead",
      period: "Jan 2012 – May 2018",
      products: "SCMProfit (SaaS Logistics), Mozido (Payments), Cybersecurity",
      highlights: [
        "Launched SCMProfit, a digital supply chain suite adopted in 15+ countries, generating $12M+ in revenue.",
        "Delivered a payments platform with a 94% transaction success rate and failure rate below 4%.",
        "Managed development of a cybersecurity platform, reducing incident rates by 30% via advanced threat detection.",
        "Guided three Agile teams to ensure 100% on-time releases of mission-critical B2B SaaS platforms."
      ]
    }
  ];

  const personalProjects = [
    {
      name: "Warranted",
      url: "https://docs.google.com/document/d/1OYZ4d8igBlJB_qNd1ETLaXbzkPCJXcCQKo3ZcQdcgZY/edit?tab=t.0#heading=h.hste2nz6njr",
      category: "Product Innovation",
      desc: "A comprehensive solution concept for revolutionizing product warranty management and lifecycle tracking.",
      icon: "fa-shield-halved",
      hasPrototype: true
    },
    {
      name: "My Personal Blackbox",
      url: "https://docs.google.com/document/d/1vt5eh3B_j4QdkCegnmytbGVGHKwTAigBg52DiHRNa0o/edit?tab=t.0#heading=h.la3chc29h8nr",
      category: "Data Privacy",
      desc: "A strategic design for a high-security personal data vault and digital legacy recovery system.",
      icon: "fa-vault",
      hasPrototype: true
    },
    {
      name: "My Review Buddy",
      url: "https://docs.google.com/document/d/1R6VbJke_O26x2DftQaK1SYq9v384yOF3Q7xH-xbjLBU/edit?tab=t.0",
      category: "AI Productivity",
      desc: "An AI-powered feedback synthesis engine designed to help product leaders manage multi-channel reviews.",
      icon: "fa-comments",
      hasPrototype: true
    }
  ];

  const featuredVentures = [
    {
      name: "Little Wizards",
      url: "https://littlewizardsclass.vercel.app/",
      type: "EdTech Platform",
      desc: "Interactive learning environment for kids, focusing on gamification and early education development."
    },
    {
      name: "Kri-Sun Solutions",
      url: "https://kri-sun.vercel.app/",
      type: "B2B Solutions",
      desc: "Strategic digital presence for modern business consulting and technology framework integration."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-slate-900 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-blue-600 group-hover:text-blue-700 transition-colors">DEVANG</span> BHUTA
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-slate-500 text-xs tracking-[0.15em] uppercase">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Toolkit</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link text-blue-600">Projects</a>
            <a href="#ventures" className="nav-link">Ventures</a>
          </div>
          <a href="mailto:devbhuta@gmail.com" className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-40 pb-20 md:pt-56 md:pb-32 bg-white relative">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Certified Product Leader
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                I Build <span className="gradient-text">Sustainable</span> <br/>High-Impact Products
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-semibold max-w-2xl">
                Technical Product Manager with 14+ years of experience delivering SaaS and AI solutions globally.
              </p>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-2xl text-slate-600 leading-relaxed space-y-6">
              <p className="font-medium">
                I bring a unique blend of strategic vision, technical depth, and global experience. From generating <strong>$12M+ in revenue</strong> for global logistics suites to reducing customer support escalations by <strong>85%</strong> at TELUS, I thrive on solving complex business challenges with elegant technical execution.
              </p>
              <p className="font-medium">
                Outside of product maps, I’m an avid <strong>Lord of the Rings</strong> aficionado, a lifelong geek, and a passionate tennis fan inspired by Roger Federer. I often blend my creative side with my technical depth—imagine cartoon sketching Frodo wielding a tennis racket!
              </p>
            </div>

            <div className="flex flex-wrap gap-10 pt-8 border-t border-slate-100">
              <div className="flex items-center text-slate-900 font-black text-xs uppercase tracking-widest group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                  <i className="fa-solid fa-location-dot text-blue-600 text-lg"></i>
                </div>
                Toronto, Canada
              </div>
              <div className="flex items-center text-slate-900 font-black text-xs uppercase tracking-widest group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                  <i className="fa-brands fa-linkedin text-blue-600 text-xl"></i>
                </div>
                <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 underline underline-offset-8 decoration-2">Connect</a>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white group">
              <img src={profileImage} alt="Devang Bhuta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-blue-600/5 rounded-[3rem] -z-0"></div>
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-5xl shadow-2xl shadow-blue-200 z-20 transform -rotate-12 hover:rotate-0 transition-all duration-500 cursor-pointer">
              <i className="fa-solid fa-bolt"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-6xl font-black mb-4 text-white group-hover:text-blue-400 transition-colors duration-500">{stat.value}</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-black">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
      </section>

      {/* Toolkit Section */}
      <Section id="skills" title="Technical Toolkit" bg="bg-slate-50" subtitle="Orchestrating complex architectures and product lifecycles with industry-leading stacks.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(tools).map(([category, items], idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm card-hover flex flex-col">
              <div className="mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <i className={`fa-solid ${idx === 0 ? 'fa-layer-group' : idx === 1 ? 'fa-code' : idx === 2 ? 'fa-microchip' : 'fa-gear'}`}></i>
                </div>
                <h4 className="text-xl font-black text-slate-900 tracking-tight">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {items.map((item, i) => (
                  <span key={i} className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl text-[10px] font-black border border-slate-100 uppercase tracking-widest">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Professional Experience Section */}
      <Section id="experience" title="Professional Experience">
        <div className="space-y-16">
          {experience.map((exp, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-slate-100 group-hover:bg-blue-600 transition-all duration-700 rounded-full"></div>
              <div className="pl-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 gap-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{exp.role}</h3>
                    <div className="flex items-center text-blue-600 font-black mt-3 text-lg">
                      <span className="tracking-widest uppercase text-sm">{exp.company}</span>
                      <span className="mx-4 text-slate-200">/</span>
                      <span className="text-slate-400 font-bold uppercase text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <div className="inline-block bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-slate-200">
                    {exp.period}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                  <div className="lg:col-span-1">
                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-4">Domain Focus</span>
                      <p className="text-slate-800 font-bold leading-relaxed">{exp.products}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start group/li">
                          <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mr-6 mt-1 flex-shrink-0 group-hover/li:bg-blue-600 group-hover/li:text-white transition-colors">
                            <i className="fa-solid fa-check text-xs"></i>
                          </div>
                          <span className="text-slate-600 font-medium text-lg leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Projects Section */}
      <Section id="projects" title="Personal Projects" bg="bg-slate-900" subtitle={<span className="text-slate-400">Deep dives into AI strategy, data security, and specialized product frameworks.</span>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {personalProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 flex flex-col hover:bg-white hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 group cursor-default"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-10 shadow-2xl shadow-blue-900 group-hover:shadow-blue-200 group-hover:rotate-6 transition-all duration-700">
                <i className={`fa-solid ${proj.icon}`}></i>
              </div>
              <h3 className="text-2xl font-black text-white group-hover:text-slate-900 mb-4 tracking-tight">{proj.name}</h3>
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">{proj.category}</span>
              <p className="text-slate-400 group-hover:text-slate-600 font-medium leading-relaxed mb-10 flex-grow">{proj.desc}</p>
              
              <div className="space-y-4 pt-8 border-t border-white/10 group-hover:border-slate-100">
                <a 
                  href={proj.url} 
                  target="_blank" 
                  className="w-full flex items-center justify-between bg-white/10 text-white group-hover:bg-slate-900 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105"
                >
                  View Document <i className="fa-solid fa-arrow-right-long"></i>
                </a>
                {proj.hasPrototype && (
                  <button 
                    className="w-full flex items-center justify-between bg-blue-600 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-blue-700 hover:scale-105"
                  >
                    Working Prototype <i className="fa-solid fa-flask"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Ventures */}
      <Section id="ventures" title="Featured Ventures" subtitle="Live deployments and business solutions built for impact and scalability.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredVentures.map((proj, idx) => (
            <div key={idx} className="group relative bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-1000 flex flex-col h-full">
              <div className="h-56 bg-slate-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
                <div className="text-6xl text-white/10 font-black absolute -bottom-4 -left-4 tracking-tighter uppercase select-none group-hover:text-blue-500/10 transition-colors">
                  {proj.name}
                </div>
                <i className={`fa-solid ${idx === 0 ? 'fa-wand-sparkles' : 'fa-lightbulb'} text-7xl text-blue-600/20 group-hover:scale-110 transition-transform duration-1000`}></i>
              </div>
              <div className="p-12 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-2 block">{proj.type}</span>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{proj.name}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <i className="fa-solid fa-code-branch"></i>
                  </div>
                </div>
                <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10">{proj.desc}</p>
                <div className="mt-auto">
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    className="inline-flex items-center justify-center w-full md:w-auto bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-slate-200 hover:shadow-blue-100"
                  >
                    Visit Live Platform <i className="fa-solid fa-arrow-up-right-from-square ml-4 text-[10px]"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <Section id="education" title="Credentials" bg="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 card-hover">
            <h4 className="text-2xl font-black mb-12 flex items-center gap-5 text-slate-900 tracking-tight">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              Education
            </h4>
            <div className="space-y-12">
              <div className="relative pl-10 border-l-4 border-blue-50">
                <h5 className="text-2xl font-black text-slate-900">MBA - Welingkar Institute</h5>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mt-3">Strategic Management | Mumbai, India</p>
              </div>
              <div className="relative pl-10 border-l-4 border-blue-50">
                <h5 className="text-2xl font-black text-slate-900">B.E., Computer Engineering</h5>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mt-3">Engineering Foundations | Mumbai University</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 card-hover">
            <h4 className="text-2xl font-black mb-12 flex items-center gap-5 text-slate-900 tracking-tight">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                <i className="fa-solid fa-award"></i>
              </div>
              Certifications
            </h4>
            <div className="space-y-6">
              {[
                "Scrum Alliance Certified Product Owner (CSPO)",
                "Benchmark Six Sigma Green Belt Certified",
                "CII - Supply Chain and Logistics Essentials"
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-6 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 group transition-all hover:bg-white hover:border-blue-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-500 shadow-sm group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-check text-sm"></i>
                  </div>
                  <span className="font-black text-sm tracking-tight">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 border-b border-white/10 pb-32 mb-20">
            <div className="max-w-2xl space-y-8">
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter italic">
                Let's Build the <span className="text-blue-500">Next Big</span> Thing Together.
              </h2>
              <p className="text-slate-400 text-2xl font-medium leading-relaxed">
                Seeking ambitious teams where strategic product vision and technical depth are the standard.
              </p>
            </div>
            <div className="flex flex-col gap-10 w-full lg:w-auto">
              <a href="mailto:devbhuta@gmail.com" className="group flex items-center gap-8 bg-white/5 p-8 rounded-[2.5rem] hover:bg-white hover:text-slate-900 transition-all duration-700 border border-white/10 shadow-3xl">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-blue-900/50 group-hover:shadow-blue-200">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.4em] mb-2">Direct Channel</div>
                  <div className="text-2xl font-black tracking-tight">devbhuta@gmail.com</div>
                </div>
              </a>
              <div className="flex gap-8 justify-center lg:justify-start">
                <a href="#" className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-blue-600 transition-all duration-500 text-3xl border border-white/10 hover:-translate-y-3">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-blue-600 transition-all duration-500 text-3xl border border-white/10 hover:-translate-y-3">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] gap-12 text-center">
            <p>&copy; 2024 Devang Bhuta. High-Impact Technical Product Leader.</p>
            <div className="flex space-x-12">
              <a href="#about" className="hover:text-blue-400 transition-colors">Origins</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Journey</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Labs</a>
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
