
import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, PROJECTS, PUBLICATIONS } from './constants';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, MapPin, Award, BookOpen, Terminal } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-300/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <p className="text-purple-600 font-mono mb-4 animate-fade-in uppercase tracking-widest text-sm font-bold">Hello, I am</p>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm a <span className="text-purple-700 font-semibold">{PERSONAL_INFO.title}</span> specializing in building scalable systems and leveraging machine learning for impactful insights.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-200">
              View Work <ExternalLink size={18} />
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-purple-200 text-purple-700 rounded-lg font-bold hover:bg-purple-50 transition-all">
              Contact Me
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="text-slate-400 hover:text-purple-600 transition-colors">
              <Github size={24} />
            </a>
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-slate-400 hover:text-purple-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-purple-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-200 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* About / Education Section */}
      <Section id="about" title="About & Education">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600">
              I am currently pursuing a {PERSONAL_INFO.education.degree} with a <span className="text-purple-600 font-bold">GPA of {PERSONAL_INFO.education.gpa}</span>. My focus is on the intersection of Software Engineering and Artificial Intelligence.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 border border-purple-100">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900">{PERSONAL_INFO.education.school}</p>
                <p className="text-sm text-slate-500">Expected Graduation: {PERSONAL_INFO.education.expected}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 border border-purple-100">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900">{PERSONAL_INFO.location}</p>
                <p className="text-sm text-slate-500">US Citizen</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="text-purple-600" size={20} /> Honors & Awards
            </h3>
            <ul className="space-y-3">
              {PERSONAL_INFO.education.awards.map(award => (
                <li key={award} className="flex items-start gap-2 text-slate-700">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.name} className="glass p-6 rounded-xl hover:border-purple-300 transition-colors shadow-sm">
              <h4 className="text-purple-600 font-mono text-sm uppercase tracking-wider mb-4 font-bold">{cat.name}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="bg-white text-slate-700 px-3 py-1 rounded-md text-sm border border-purple-50 shadow-sm hover:border-purple-200 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" className="bg-purple-50/50 border-y border-purple-100">
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-purple-100 hover:border-purple-400 transition-colors py-2">
              <div className="absolute -left-[9px] top-4 w-4 h-4 bg-white border-2 border-purple-600 rounded-full shadow-sm shadow-purple-200"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-purple-600 font-semibold">{exp.company}</p>
                </div>
                <div className="text-slate-500 text-sm md:text-right mt-2 md:mt-0 font-mono italic">
                  {exp.period} <br /> {exp.location}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-slate-600 flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-300 shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Technical Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-white border border-purple-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-purple-100 transition-all border-b-4 hover:border-b-purple-600">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Terminal size={24} />
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">{project.period}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-purple-50 text-purple-700 border border-purple-100">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-3 mb-6">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-sm text-slate-600 leading-relaxed">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Publications & Presentations" className="bg-purple-50/50 border-y border-purple-100">
        <div className="grid gap-6">
          {PUBLICATIONS.map((pub, idx) => (
            <div key={idx} className="flex gap-6 p-6 bg-white border border-purple-100 rounded-xl items-center group hover:shadow-lg transition-all shadow-sm">
              <div className="hidden md:flex w-16 h-16 bg-purple-50 border border-purple-100 rounded-full items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner shadow-purple-100">
                <BookOpen className="group-hover:text-white text-purple-600 transition-colors" size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded uppercase border border-purple-100">{pub.conference}</span>
                   <span className="text-xs text-slate-400">{pub.year}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{pub.title}</h3>
                <p className="text-slate-500 text-sm italic">{pub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership & Activities */}
      <Section id="leadership" title="Leadership & Activities">
         <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-purple-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
               <h3 className="text-xl font-bold text-slate-900 mb-4">Supplemental Instruction Leader</h3>
               <p className="text-purple-600 mb-4 font-semibold">Data Structures & Algorithms</p>
               <ul className="text-sm space-y-3 text-slate-600">
                  <li>• Lead weekly SI sessions for 10+ students covering advanced data structures (trees, graphs, heaps, hash tables).</li>
                  <li>• Achieved up to <span className="text-slate-900 font-bold">25% grade improvement</span> through collaborative learning.</li>
                  <li>• Mentor students in debugging methodology and Big O notation analysis.</li>
               </ul>
            </div>
            <div className="p-8 border border-purple-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
               <h3 className="text-xl font-bold text-slate-900 mb-4">NYIT Cybersecurity Club (NYITSec)</h3>
               <p className="text-purple-600 mb-4 font-semibold">Secretary</p>
               <ul className="text-sm space-y-3 text-slate-600">
                  <li>• Manage communications for 50+ active members and organize weekly club meetings.</li>
                  <li>• Coordinate guest speaker sessions and technical workshops on emerging threats.</li>
                  <li>• Ensure smooth operations and effective information dissemination within the college.</li>
               </ul>
            </div>
         </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Available for internships and research opportunities.">
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-lg mb-12 leading-relaxed text-slate-600">
            Whether you have a question or just want to connect, feel free to reach out. I'm always looking to collaborate on interesting projects or research initiatives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center gap-4 p-8 bg-white border border-purple-100 rounded-2xl hover:bg-purple-50 hover:shadow-lg transition-all group shadow-sm">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md shadow-purple-50">
                <Mail size={24} />
              </div>
              <div className="text-center">
                <span className="block text-sm font-bold text-slate-900 mb-1 uppercase tracking-wider">Email Me</span>
                <span className="text-xs text-slate-500 truncate max-w-[150px] block">{PERSONAL_INFO.email}</span>
              </div>
            </a>
            
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="flex flex-col items-center gap-4 p-8 bg-white border border-purple-100 rounded-2xl hover:bg-purple-50 hover:shadow-lg transition-all group shadow-sm">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md shadow-purple-50">
                <Linkedin size={24} />
              </div>
              <div className="text-center">
                <span className="block text-sm font-bold text-slate-900 mb-1 uppercase tracking-wider">LinkedIn</span>
                <span className="text-xs text-slate-500 block">Let's Connect</span>
              </div>
            </a>

            <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="flex flex-col items-center gap-4 p-8 bg-white border border-purple-100 rounded-2xl hover:bg-purple-50 hover:shadow-lg transition-all group shadow-sm">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md shadow-purple-50">
                <Github size={24} />
              </div>
              <div className="text-center">
                <span className="block text-sm font-bold text-slate-900 mb-1 uppercase tracking-wider">GitHub</span>
                <span className="text-xs text-slate-500 block">Check my Code</span>
              </div>
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-purple-100 text-center text-slate-400 text-sm bg-purple-50/20">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Tailwind CSS, and Passion.</p>
        <p className="mt-2 font-mono uppercase tracking-[0.2em] text-[10px] text-purple-300">Excellence in every line of code</p>
      </footer>
    </div>
  );
};

export default App;
