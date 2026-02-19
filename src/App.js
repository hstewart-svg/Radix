import React, { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding'; // Updated path
import scenarios from './data/scenarios.json';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentScenario] = useState(scenarios[0]);

  useEffect(() => {
    if (localStorage.getItem('radix-onboarded')) setShowWelcome(false);
  }, []);

  const handleDismiss = () => {
    setShowWelcome(false);
    localStorage.setItem('radix-onboarded', 'true');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {showWelcome && <Onboarding onDismiss={handleDismiss} />}
      
      <nav className="bg-indigo-950 text-white p-6 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-2xl font-black tracking-tighter">RADIX</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-300">Architecting Robust Processes</p>
        </div>
      </nav>

      {/* The rest of your dashboard logic goes here */}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import Onboarding from './components/Onboarding';
import scenarios from './data/scenarios.json';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [forensicMode, setForensicMode] = useState(false);
  const currentScenario = scenarios[0];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {showWelcome && <Onboarding onDismiss={() => setShowWelcome(false)} />}
      
      {/* Executive Header */}
      <nav className="bg-indigo-950 text-white p-6 shadow-xl border-b-4 border-indigo-500">
        <h1 className="text-3xl font-black tracking-tighter uppercase">Radix</h1>
        <p className="text-[10px] tracking-[0.3em] text-indigo-300 font-bold">Architecting Robust Processes</p>
      </nav>

      <main className="p-8 max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-800">
          
          {/* Evidence Bench */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Evidence Lab: {currentScenario.title}</h2>
              <button 
                onClick={() => setForensicMode(!forensicMode)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase transition-all ${forensicMode ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-600'}`}
              >
                {forensicMode ? 'Close Forensic Analysis' : 'Run Forensic Check'}
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg italic text-slate-600">
                "{currentScenario.evidence.managementResponse}"
              </div>
              
              {forensicMode && (
                <div className="p-6 bg-red-50 border border-red-200 rounded-lg animate-pulse">
                  <h4 className="text-xs font-black text-red-700 uppercase mb-2">Metadata Warning Found</h4>
                  <p className="font-mono text-sm text-red-600">
                    Warning: File 'Oct_UAR_Final.xlsx' was modified on {currentScenario.evidence.metadataWarning}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
