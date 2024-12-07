import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Step } from '../types';

interface StepListProps {
  steps: Step[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-3">
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex items-start gap-3 text-gray-300 p-2 rounded-md hover:bg-gray-700/50"
        >
          <CheckCircle2
            size={20}
            className={step.isCompleted ? 'text-green-500' : 'text-gray-600'}
          />
          <span>{step.description}</span>
        </div>
      ))}
    </div>
  );
}