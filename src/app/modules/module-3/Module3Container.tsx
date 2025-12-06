import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-3-1',
    title: 'Exercise 3-1',
    description: 'Nested Routing',
  },
  {
    path: 'exercise-3-2',
    title: 'Exercise 3-2',
    description: 'Route Guards',
  },
];

export default function Module3Container() {
  return (
    <ModuleContainer
      title="Module 3: Routing and Navigation"
      subtitle="React Router, nested routes, route guards, and deep linking"
      exercises={exercises}
    />
  );
}

