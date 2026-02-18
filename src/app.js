import React, { useState } from 'react';
import scenarios from './data/scenarios.json';

function App() {
  const [currentScenario] = useState(scenarios[0]);

  // Fragility Logic
  const calculateFragility = (f) => {
    const score = (f.touchpoints * 3.0) + (f.handovers * 2.5) + (f.complexity * 2.0);
    return Math.min(100, score);
  };

  const score = calculateFragility(currentScenario.fragilityFactors);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <nav className="bg-indigo-950 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-black tracking-tighter">RADIX</h1>
        <div className="text-xs uppercase tracking-widest text-indigo-300">
          Architecting Robust Processes
        </div>
      </nav>

      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scenario Info */}
        <section className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-lg mb-2">{currentScenario.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{currentScenario.context}</p>
          </div>

          {/* Fragility Meter */}
          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Process Fragility</span>
              <span className="text-red-400 font-black text-xl">{score}/100</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div style={{width: `${score}%`}} className="bg-red-500 h-full transition-all duration-1000"></div>
            </div>
            <p className="mt-4 text-xs text-slate-400 italic font-medium">
              "This score suggests a high probability of manual override during transitions."
            </p>
          </div>
        </section>

        {/* The Workbench */}
        <section className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
           <div className="bg-slate-50 border-b p-4 text-xs font-bold uppercase text-slate-500 tracking-widest">
             Evidence Lab
           </div>
           <div className="p-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="text-[10px] bg-slate-200 px-2 py-1 rounded text-slate-600 font-bold uppercase">Management Response</span>
                <p className="italic text-slate-700">"{currentScenario.evidence.managementResponse}"</p>
              </div>
              <div className="space-y-4 border-l pl-8">
                <span className="text-[10px] bg-red-100 px-2 py-1 rounded text-red-700 font-bold uppercase">Forensic Metadata</span>
                <div className="font-mono text-xs space-y-2 text-slate-500">
                  <p>FILE: Oct_UAR_Final.xlsx</p>
                  <p className="text-red-600 font-bold">MODIFIED: {currentScenario.evidence.metadataWarning}</p>
                </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}

export default App;
