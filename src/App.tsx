import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { initialPhases } from './data/phases';
import PhaseCard from './components/PhaseCard';
import ProgressBar from './components/ProgressBar';

function App() {
  const [phases, setPhases] = useState(initialPhases);

  const handlePhaseComplete = (phaseId: number) => {
    setPhases(prevPhases =>
      prevPhases.map(phase =>
        phase.id === phaseId
          ? {
              ...phase,
              isCompleted: true,
              steps: phase.steps.map(step => ({ ...step, isCompleted: true })),
            }
          : phase
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-indigo-500" />
            <h1 className="text-3xl font-bold">Bolt.new Deployment Guide</h1>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Follow this step-by-step guide to deploy your Bolt.new project successfully.
            Total estimated time: 15-20 minutes.
          </p>
        </div>

        <ProgressBar phases={phases} />

        <div className="space-y-6">
          {phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              onComplete={handlePhaseComplete}
            />
          ))}
        </div>

        {phases.every(phase => phase.isCompleted) && (
          <div className="mt-8 p-6 bg-green-600 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-2">🎉 Deployment Complete!</h2>
            <p>Your project is now successfully deployed and connected to GitHub.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;