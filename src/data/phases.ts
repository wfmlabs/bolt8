import { Phase } from '../types';

export const initialPhases: Phase[] = [
  {
    id: 1,
    title: 'Bolt.new & Initial Deploy',
    duration: '5-10 minutes',
    isCompleted: false,
    steps: [
      { id: 1, description: 'Build your application in Bolt.new', isCompleted: false },
      { id: 2, description: 'Test thoroughly using Preview button', isCompleted: false },
      { id: 3, description: 'Click blue "Deploy" button in top right', isCompleted: false },
      { id: 4, description: 'Wait for Netlify deployment', isCompleted: false },
      { id: 5, description: 'Save the random URL (e.g., happy-pizza-123.netlify.app)', isCompleted: false },
      { id: 6, description: 'Click "Download" to get project files', isCompleted: false },
      { id: 7, description: 'Unzip the downloaded package', isCompleted: false },
    ],
  },
  {
    id: 2,
    title: 'GitHub Setup',
    duration: '5 minutes',
    isCompleted: false,
    steps: [
      { id: 1, description: 'Go to github.com/new', isCompleted: false },
      { id: 2, description: 'Create new repository', isCompleted: false },
      { id: 3, description: 'Make it public', isCompleted: false },
      { id: 4, description: 'Do not initialize with README', isCompleted: false },
      { id: 5, description: 'Upload all unzipped files from Bolt.new', isCompleted: false },
      { id: 6, description: 'Verify files appear in repository', isCompleted: false },
      { id: 7, description: 'Ensure \'main\' branch is present', isCompleted: false },
    ],
  },
  {
    id: 3,
    title: 'Connect Netlify to GitHub',
    duration: '5 minutes',
    isCompleted: false,
    steps: [
      { id: 1, description: 'Return to Netlify site (random-name.netlify.app)', isCompleted: false },
      { id: 2, description: 'Go to Site settings', isCompleted: false },
      { id: 3, description: 'Find "Build & deploy" section', isCompleted: false },
      { id: 4, description: 'Click "Link site to Git"', isCompleted: false },
      { id: 5, description: 'Select GitHub', isCompleted: false },
      { id: 6, description: 'Choose your repository', isCompleted: false },
      { id: 7, description: 'Configure build settings (npm run build, dist)', isCompleted: false },
      { id: 8, description: 'Verify deployment', isCompleted: false },
    ],
  },
];