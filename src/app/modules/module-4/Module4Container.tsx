import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-4-1',
    title: 'Exercise 4-1',
    description: 'Optimized List',
  },
  {
    path: 'exercise-4-2',
    title: 'Exercise 4-2',
    description: 'Code Splitting',
  },
];

export default function Module4Container() {
  return (
    <ModuleContainer
      title="Module 4: Performance and Optimization"
      subtitle="React.memo, useMemo, useCallback, virtual scrolling, and code splitting"
      exercises={exercises}
    />
  );
}

