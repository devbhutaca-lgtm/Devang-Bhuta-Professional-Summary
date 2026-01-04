import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Simple interface for sections
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bg?: string;
  subtitle?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, bg = "bg-white", subtitle }) => (
  <section id={id} className={`py-28 ${bg}`}>
    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter flex items-center justify-center md:justify-start">
          <span className="w-16 h-2 bg-blue-600 mr-6 inline-block rounded-full"></span>
          {title}
        </h2>
        {subtitle && <div className="mt-8 text-slate-500 max-w-3xl text-xl font-medium leading-relaxed">{subtitle}</div>}
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
          <i className="fa-solid fa-user-tie text-8xl mb-4"></i>
          <p className="text-xs font-black uppercase tracking-widest">Image Link Invalid</p>
          <p className="text-[10px] mt-1 opacity-60 px-4">Ensure your profileImage variable is a direct image URL (ending in .jpg, .png, etc.)</p>
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

  /**
   * PHOTO UPDATE INSTRUCTIONS:
   * Replace the URL below with your actual direct image link.
   * Note: Links from Google Drive or Wix require specific "Direct Link" formats.
   * If the image doesn't show up, the current code will show a professional fallback icon.
   */
  const profileImage = "https://res.cloudinary.com/doy6jwq1k/image/upload/v1767548995/Devang_tbb8uo.jpg"; 

  const stats = [
    { label: "Global Revenue", value: "$12M+" },
    { label: "1st Year Impact", value: "$8M" },
    { label: "Annual Savings", value: "$5M" },
    { label: "Escalation Delta", value: "-85%" }
  ];

  const tools = {
    "Product Management": ["Jira", "Confluence", "Monday", "Miro", "Tableau", "Google Studio", "AHA"],
    "Technical Stack": ["Python", "Java", "SQL", "REST APIs", "Microservices", "AWS", "GCP", "Azure"],
    "AI & Automation": ["ChatGPT", "Claude", "Gemini", "n8n", "Bubble.io"],
    "Leadership": ["Agile", "OKRs", "Privacy-by-Design", "Data-Driven Roadmaps"]
  };

  const experience = [
    {
      company: "TELUS",
      location: "Toronto, Canada",
      role: "Sr. Technical Product Manager",
      period: "Mar 2019 – Present",
      products: "Subscription Platform, Loyalty Platform, Supply Ops Re-Engineering",
      highlights: [
        "Led three product teams delivering digital platforms, accelerating time-to-market by 30%.",
        "Launched a subscription platform that generated $8M in its first year with $5M in annual savings.",
        "Established a strategic roadmap to onboard 30+ products by 2027.",
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
      products: "SCMProfit (Logistics), Mozido (Payments), Cybersecurity",
      highlights: [
        "Launched SCMProfit across 15+ countries, generating over $12M in revenue for global shipping clients.",
        "Delivered a payments platform with a 94% transaction success rate and <4% failure rate.",
        "Managed development of a cybersecurity platform, reducing incident rates by 30% via advanced threat detection.",
        "Ensured 100% on-time releases of mission-critical enterprise SaaS products globally."
      ]
    }
  ];

  const personalProjects = [
    {
      name: "Warranted",
      url: "https://docs.google.com/document/d/1OYZ4d8igBlJB_qNd1ETLaXbzkPCJXcCQKo3ZcQdcgZY/edit?tab=t.0#heading=h.hste2nz6njr",
      category: "Innovation",
      desc: "Revolutionizing product warranty management and lifecycle tracking through technical automation.",
      icon: "fa-shield-halved"
    },
    {
      name: "My Personal Blackbox",
      url: "https://docs.google.com/document/d/1vt5eh3B_j4QdkCegnmytbGVGHKwTAigBg52DiHRNa0o/edit?tab=t.0#heading=h.la3chc29h8nr",
      category: "Security",
      desc: "High-security personal data vault design focused on secure digital legacy and recovery protocols.",
      icon: "fa-vault"
    },
    {
      name: "My Review Buddy",
      url: "https://docs.google.com/document/d/1R6VbJke_O26x2DftQaK1SYq9v384yOF3Q7xH-xbjLBU/edit?tab=t.0",
      category: "AI Productivity",
      desc: "AI-driven synthesis for professional reviews, helping leaders manage feedback at scale.",
      icon: "fa-comments"
    }
  ];

  const featuredVentures = [
    {
      name: "Little Wizards",
      url: "https://littlewizardsclass.vercel.app/",
      type: "EdTech",
      desc: "Interactive, gamified learning environment designed to empower the next generation of learners."
    },
    {
      name: "Kri-Sun Solutions",
      url: "https://kri-sun.vercel.app/",
      type: "B2B Strategy",
      desc: "Strategic digital presence focused on business consulting and modern technology integration."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100 py-4' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <div className="text-3xl font-black tracking-tighter text-slate-900 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-blue-600">DEVANG</span> BHUTA
          </div>
          <div className="hidden lg:flex space-x-12 font-bold text-slate-500 text-[11px] tracking-[0.25em] uppercase">
            <a href="#about" className="nav-link hover:text-slate-900">About</a>
            <a href="#skills" className="nav-link hover:text-slate-900">Toolkit</a>
            <a href="#experience" className="nav-link hover:text-slate-900">Experience</a>
            <a href="#projects" className="nav-link text-blue-600 hover:text-blue-700">Projects</a>
            <a href="#ventures" className="nav-link hover:text-slate-900">Ventures</a>
          </div>
          <a href="mailto:devbhuta@gmail.com" className="bg-slate-900 hover:bg-blue-600 text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all btn-shadow">
            Connect
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-48 pb-24 md:pt-64 md:pb-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 hero-pattern opacity-[0.4]"></div>
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="flex-1 space-y-12">
            <div className="inline-flex items-center gap-4 bg-blue-50 text-blue-700 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Certified Product Leader
            </div>
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Hello, I'm <br/><span className="gradient-text">Devang Bhuta</span>
              </h1>
              <p className="text-2xl text-slate-500 leading-relaxed font-semibold max-w-3xl mx-auto lg:mx-0">
                A Technical Product Manager with 14+ years of experience delivering SaaS and AI solutions globally.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
              <div className="space-y-6">
                <h3 className="font-black text-slate-900 text-[10px] uppercase tracking-[0.4em] border-b pb-3">Professional Impact</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Leading product at <strong>TELUS</strong> and formerly <strong>Aurionpro</strong>, I've generated over <strong>$12M in revenue</strong> and specialized in high-uptime payment & supply chain platforms.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="font-black text-slate-900 text-[10px] uppercase tracking-[0.4em] border-b pb-3">Creative Geek</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Avid <strong>Lord of the Rings</strong> aficionado and <strong>Roger Federer</strong> enthusiast. I blend strategic logic with creative sketching passion.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-12 pt-12">
              <div className="flex items-center text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] group cursor-default">
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center mr-6 group-hover:bg-blue-50 transition-colors">
                  <i className="fa-solid fa-location-dot text-blue-600 text-2xl"></i>
                </div>
                Toronto, ON
              </div>
              <div className="flex items-center text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center mr-6 group-hover:bg-blue-50 transition-colors">
                  <i className="fa-brands fa-linkedin text-blue-600 text-3xl"></i>
                </div>
                <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 underline underline-offset-8 decoration-4">Linkedin</a>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 relative">
            <div className="relative group">
              <ImageWithFallback 
                src={profileImage} 
                alt="Devang Bhuta" 
                className="w-80 h-80 md:w-[480px] md:h-[480px] rounded-[5rem] shadow-2xl relative z-10 border-[16px] border-white group-hover:scale-[1.02] transition-transform duration-1000"
              />
              <div className="absolute -bottom-16 -right-16 w-full h-full bg-blue-600/5 rounded-[5rem] -z-0 border-2 border-blue-50"></div>
              <div className="absolute -top-16 -left-16 w-44 h-44 bg-blue-600 rounded-[3rem] flex items-center justify-center text-white text-7xl shadow-2xl shadow-blue-200 z-20 transform -rotate-6 hover:rotate-0 transition-all duration-700 cursor-help">
                <i className="fa-solid fa-crown"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics Bar */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-7xl font-black mb-6 text-white group-hover:text-blue-400 transition-colors duration-500">{stat.value}</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black leading-relaxed max-w-[200px] mx-auto">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[180px] rounded-full"></div>
      </section>

      {/* Toolkit */}
      <Section id="skills" title="Technical Toolkit" bg="bg-slate-50" subtitle="Expertise across product strategy, engineering logic, and AI-first workflows.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(tools).map(([category, items], idx) => (
            <div key={idx} className="bg-white p-14 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-4xl transition-all duration-700 group flex flex-col">
              <div className="mb-12">
                <div className="w-20 h-20 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <i className={`fa-solid ${idx === 0 ? 'fa-diagram-project' : idx === 1 ? 'fa-code-branch' : idx === 2 ? 'fa-robot' : 'fa-handshake'}`}></i>
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tighter">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                {items.map((item, i) => (
                  <span key={i} className="bg-slate-50 text-slate-800 px-5 py-2.5 rounded-2xl text-[10px] font-black border border-slate-100 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="space-y-24">
          {experience.map((exp, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -left-12 top-0 bottom-0 w-2 bg-slate-50 group-hover:bg-blue-600 transition-all duration-700 rounded-full"></div>
              <div className="pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-10">
                  <div className="space-y-4">
                    <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">{exp.role}</h3>
                    <div className="flex items-center text-blue-600 font-black text-sm uppercase tracking-[0.3em]">
                      {exp.company} <span className="mx-6 text-slate-200">/</span> {exp.location}
                    </div>
                  </div>
                  <div className="bg-slate-900 text-white px-10 py-5 rounded-3xl font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-slate-200 group-hover:scale-105 transition-transform">
                    {exp.period}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
                  <div className="lg:col-span-2">
                    <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 h-full flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 block mb-8">Ecosystem focus</span>
                      <p className="text-slate-900 font-bold text-2xl leading-tight tracking-tight italic">"{exp.products}"</p>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-8">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start group/li">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mr-10 mt-1 flex-shrink-0 group-hover/li:bg-blue-600 group-hover/li:text-white transition-all">
                            <i className="fa-solid fa-check text-sm"></i>
                          </div>
                          <span className="text-slate-600 font-medium text-xl leading-relaxed">{h}</span>
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

      {/* Projects Section */}
      <Section id="projects" title="Personal Projects" bg="bg-slate-950" subtitle={<span className="text-slate-400">Strategic concepts and high-fidelity frameworks designed to optimize complex product ecosystems.</span>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {personalProjects.map((proj, idx) => (
            <a 
              key={idx} 
              href={proj.url} 
              target="_blank" 
              className="bg-white/5 backdrop-blur-xl p-14 rounded-[5rem] border border-white/10 flex flex-col hover:bg-white hover:shadow-4xl transition-all duration-700 group card-hover-effect"
            >
              <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white text-5xl mb-14 shadow-4xl shadow-blue-900/40 group-hover:rotate-6 transition-all duration-500">
                <i className={`fa-solid ${proj.icon}`}></i>
              </div>
              <h3 className="text-3xl font-black text-white group-hover:text-slate-900 mb-6 tracking-tighter">{proj.name}</h3>
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 block">{proj.category}</span>
              <p className="text-slate-400 group-hover:text-slate-600 font-medium text-xl leading-relaxed mb-14 flex-grow">{proj.desc}</p>
              
              <div className="pt-12 border-t border-white/10 group-hover:border-slate-100 flex items-center justify-between text-white group-hover:text-slate-900 font-black text-[11px] uppercase tracking-widest">
                Explore Strategy <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-4"></i>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Featured Ventures */}
      <Section id="ventures" title="Featured Ventures" subtitle="Platforms delivering measurable business value and educational delight.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {featuredVentures.map((proj, idx) => (
            <div key={idx} className="group relative bg-white rounded-[5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-4xl transition-all duration-1000 flex flex-col h-full card-hover-effect">
              <div className="h-80 bg-slate-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 to-transparent"></div>
                <h3 className="text-[12rem] text-white/5 font-black absolute bottom-0 left-0 tracking-tighter uppercase select-none group-hover:text-blue-500/10 transition-colors pointer-events-none">
                  {proj.name.substring(0, 1)}
                </h3>
                <i className={`fa-solid ${idx === 0 ? 'fa-wand-magic-sparkles' : 'fa-rocket'} text-9xl text-blue-600/10 group-hover:scale-125 group-hover:text-blue-600/40 transition-all duration-1000`}></i>
              </div>
              <div className="p-20 flex-1 flex flex-col">
                <span className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block">{proj.type}</span>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-8">{proj.name}</h3>
                <p className="text-slate-600 font-medium text-2xl leading-relaxed mb-16">{proj.desc}</p>
                <div className="mt-auto">
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    className="inline-flex items-center justify-center w-full md:w-auto bg-slate-900 hover:bg-blue-600 text-white px-14 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-4xl shadow-slate-100 hover:shadow-blue-200"
                  >
                    Launch Platform <i className="fa-solid fa-external-link ml-6 text-sm"></i>
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
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-32 border-b border-white/5 pb-48 mb-24">
            <div className="max-w-4xl space-y-12">
              <h2 className="text-7xl md:text-9xl font-black mb-12 leading-[0.85] tracking-tighter italic">
                Let's <span className="text-blue-500">Design</span> the <br/>Future Together.
              </h2>
              <p className="text-slate-400 text-4xl font-medium leading-relaxed">
                Open to strategic leadership and high-impact technical product opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-14 w-full lg:w-auto">
              <a href="mailto:devbhuta@gmail.com" className="group flex items-center gap-12 bg-white/5 p-12 rounded-[4rem] hover:bg-white hover:text-slate-950 transition-all duration-700 border border-white/10 shadow-4xl">
                <div className="w-28 h-28 bg-blue-600 rounded-[2.5rem] flex items-center justify-center text-5xl group-hover:rotate-12 transition-all duration-500 shadow-4xl shadow-blue-900/50 group-hover:shadow-blue-200">
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
                <div className="text-left">
                  <div className="text-[12px] text-slate-500 uppercase font-black tracking-[0.6em] mb-4">Direct Channel</div>
                  <div className="text-3xl font-black tracking-tight">devbhuta@gmail.com</div>
                </div>
              </a>
              <div className="flex gap-12 justify-center lg:justify-start">
                <a href="https://linkedin.com" target="_blank" className="w-28 h-28 bg-white/5 rounded-[2.5rem] flex items-center justify-center hover:bg-blue-600 transition-all duration-500 text-5xl border border-white/10 hover:-translate-y-6">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-28 h-28 bg-white/5 rounded-[2.5rem] flex items-center justify-center hover:bg-blue-600 transition-all duration-500 text-5xl border border-white/10 hover:-translate-y-6">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-[12px] font-black uppercase tracking-[0.7em] gap-20">
            <p>&copy; 2024 Devang Bhuta. Product Leadership & Engineering Strategy.</p>
            <div className="flex space-x-20">
              <a href="#about" className="hover:text-blue-400 transition-colors">Origins</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Career</a>
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