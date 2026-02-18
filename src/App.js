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
