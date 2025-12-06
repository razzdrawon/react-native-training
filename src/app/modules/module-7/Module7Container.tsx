import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-7-1',
    title: 'Exercise 7-1',
    description: 'Component Testing',
  },
  {
    path: 'exercise-7-2',
    title: 'Exercise 7-2',
    description: 'Hook Testing',
  },
];

export default function Module7Container() {
  return (
    <ModuleContainer
      title="Module 7: Advanced Testing"
      subtitle="Jest, React Testing Library, testing hooks, and E2E testing"
      exercises={exercises}
    />
  );
}

