import React from 'react';
import { Phase } from '../types';

interface ProgressBarProps {
  phases: Phase[];
}

export default function ProgressBar({ phases }: ProgressBarProps) {
  const completedPhases = phases.filter(phase => phase.isCompleted).length;
  const progress = (completedPhases / phases.length) * 100;

  return (
    <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
      <div
        className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}