export interface Phase {
  id: number;
  title: string;
  duration: string;
  steps: Step[];
  isCompleted: boolean;
}

export interface Step {
  id: number;
  description: string;
  isCompleted: boolean;
}