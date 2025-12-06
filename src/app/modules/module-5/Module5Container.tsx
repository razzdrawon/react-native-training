import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-5-1',
    title: 'Exercise 5-1',
    description: 'Multi-step Form',
  },
  {
    path: 'exercise-5-2',
    title: 'Exercise 5-2',
    description: 'Async Validation',
  },
];

export default function Module5Container() {
  return (
    <ModuleContainer
      title="Module 5: Forms and Advanced Validation"
      subtitle="React Hook Form, Zod validation, form arrays, and async validation"
      exercises={exercises}
    />
  );
}

