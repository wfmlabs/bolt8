import React from 'react';
import { Check, Clock } from 'lucide-react';
import { Phase } from '../types';
import StepList from './StepList';

interface PhaseCardProps {
  phase: Phase;
  onComplete: (phaseId: number) => void;
}

export default function PhaseCard({ phase, onComplete }: PhaseCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 transition-all hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold">
            {phase.id}
          </span>
          <h2 className="text-xl font-bold text-white">{phase.title}</h2>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={16} />
          <span className="text-sm">{phase.duration}</span>
        </div>
      </div>
      
      <StepList steps={phase.steps} />
      
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => onComplete(phase.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors
            ${phase.isCompleted
              ? 'bg-green-600 text-white'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          disabled={phase.isCompleted}
        >
          {phase.isCompleted ? (
            <>
              <Check size={16} />
              Completed
            </>
          ) : (
            'Mark as Complete'
          )}
        </button>
      </div>
    </div>
  );
}