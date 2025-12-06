import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-2-1',
    title: 'Exercise 2-1',
    description: 'Component Composition',
  },
  {
    path: 'exercise-2-2',
    title: 'Exercise 2-2',
    description: 'Error Boundaries',
  },
];

export default function Module2Container() {
  return (
    <ModuleContainer
      title="Module 2: Advanced React Patterns"
      subtitle="Component composition, render props, HOCs, and error boundaries"
      exercises={exercises}
    />
  );
}

