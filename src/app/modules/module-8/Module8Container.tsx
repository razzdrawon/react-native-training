import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-8-1',
    title: 'Exercise 8-1',
    description: 'SSR/PWA',
  },
  {
    path: 'exercise-8-2',
    title: 'Exercise 8-2',
    description: 'Native Modules',
  },
];

export default function Module8Container() {
  return (
    <ModuleContainer
      title="Module 8: Advanced Features"
      subtitle="SSR, PWA, micro-frontends, and native modules"
      exercises={exercises}
    />
  );
}

