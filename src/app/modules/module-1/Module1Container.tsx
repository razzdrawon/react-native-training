import ModuleContainer, { Exercise } from '../../components/shared/ModuleContainer';

const exercises: Exercise[] = [
  {
    path: 'exercise-1-1',
    title: 'Exercise 1-1',
    description: 'Custom Hooks',
  },
  {
    path: 'exercise-1-2',
    title: 'Exercise 1-2',
    description: 'useReducer',
  },
  {
    path: 'exercise-1-3',
    title: 'Exercise 1-3',
    description: 'Zustand',
  },
  {
    path: 'exercise-1-4',
    title: 'Exercise 1-4',
    description: 'React Query Dashboard',
  },
];

const practices: Exercise[] = [
  {
    path: 'practice-1-1',
    title: 'Practice 1-1',
    description: 'Todo List',
  },
  {
    path: 'practice-1-2',
    title: 'Practice 1-2',
    description: 'Shopping Cart',
  },
];

export default function Module1Container() {
  return (
    <ModuleContainer
      title="Module 1: Advanced React Hooks and State Management"
      subtitle="Custom Hooks, useReducer, Zustand, and React Query"
      exercises={exercises}
      practices={practices}
    />
  );
}

