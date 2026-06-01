import React, { useState } from 'react';
import { Shield, Cloud, FileText, Bell, Search, ExternalLink, Terminal, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const updates = [
    {
      id: 1,
      category: 'licensing',
      title: 'Microsoft 365 Enterprise Licensing Updates',
      summary: 'Critical changes affecting enterprise EA renewals and step-up paths for cloud suites.',
      date: 'June 2026',
      severity: 'High Impact'
    },
    {
      id: 2,
      category: 'cloud',
      title: 'Azure Cloud Infrastructure Transformation Roadmap',
      summary: 'New architectural patterns for hybrid cloud landing zones and cost optimization protocols.',
      date: 'May 2026',
      severity: 'Strategy'
    },
    {
      id: 3,
      category: 'security',
      title: 'Copilot & AI Governance Security Framework',
      summary: 'Data protection strategies, tenant isolation controls, and compliance baseline assessments.',
      date: 'May 2026',
      severity: 'Critical'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Layers size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Microsoft Tech Intelligence Hub
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-semibold text-sm">
              AG
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Hero Banner */}
        <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/20 to-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Enterprise Technology Briefings</h1>
          <p className="text-slate-400 max-w-2xl">
            Bridging the gap between procurement, finance, and technical architecture. Access real-time strategies on cloud transformation, licensing operations, and optimization frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Filters */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3">Filter Intelligence</h3>
            <nav className="space-y-1">
              {[
                { id: 'all', label: 'All Briefings', icon: FileText },
                { id: 'licensing', label: 'Licensing Strategy', icon: Terminal },
                { id: 'cloud', label: 'Cloud & Infrastructure', icon: Cloud },
                { id: 'security', label: 'Security & Governance', icon: Shield }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Main Feed */}
          <div className="lg:col-span-3 space-y-4">
            {updates
              .filter(item => activeTab === 'all' || item.category === activeTab)
              .map((item) => (
                <article key={item.id} className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      item.severity === 'Critical' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                      item.severity === 'High Impact' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {item.severity}
                    </span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-2">
                    {item.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <div className="flex items-center text-xs text-blue-400 font-semibold group-hover:underline cursor-pointer">
                    Read analysis framework <ExternalLink size={12} className="ml-1" />
                  </div>
                </article>
              ))}
          </div>
        </div>
      </main>
