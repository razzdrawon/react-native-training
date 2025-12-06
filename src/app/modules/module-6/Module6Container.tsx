import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-6-1',
    title: 'Exercise 6-1',
    description: 'Expo Setup',
  },
  {
    path: 'exercise-6-2',
    title: 'Exercise 6-2',
    description: 'Native Components',
  },
];

export default function Module6Container() {
  return (
    <ModuleContainer
      title="Module 6: React Native Fundamentals"
      subtitle="Expo, Expo Router, native components, and platform-specific code"
      exercises={exercises}
    />
  );
}

