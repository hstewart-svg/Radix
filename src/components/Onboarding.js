import React from 'react';

const Onboarding = ({ onDismiss }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/90 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
        <div className="bg-indigo-600 p-8 text-white text-center">
          <h2 className="text-3xl font-black tracking-tighter mb-2 text-white">WELCOME TO RADIX</h2>
          <p className="text-indigo-100 text-sm uppercase tracking-widest font-bold">Architecting Robust Processes</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-indigo-600">1</div>
            <div>
              <h4 className="font-bold text-slate-800">Identify Fragility</h4>
              <p className="text-sm text-slate-500">Use the Fragility Meter to quantify why manual processes fail during transitions.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-indigo-600">2</div>
            <div>
              <h4 className="font-bold text-slate-800">Review Forensic Metadata</h4>
              <p className="text-sm text-slate-500">Look beyond the "I misunderstood" excuse. Verify timestamps and custody in the Evidence Lab.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-indigo-600">3</div>
            <div>
              <h4 className="font-bold text-slate-800">Propose Automation</h4>
              <p className="text-sm text-slate-500">Transition from an "Audit Checker" to a "Process Architect" with system-driven solutions.</p>
            </div>
          </div>

          <button 
            onClick={onDismiss}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-colors"
          >
            START INVESTIGATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
