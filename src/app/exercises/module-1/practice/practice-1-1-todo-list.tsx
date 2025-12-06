import ExerciseWrapper from '../../../components/shared/ExerciseWrapper';
import ExerciseInstructions from '../../../components/shared/ExerciseInstructions';
import Card from '../../../components/shared/Card';
import Button from '../../../components/shared/Button';

/**
 * Practice 1-1: Todo List
 * 
 * This is a practice exercise where you'll build a complete todo list application
 * using the concepts learned in Module 1.
 * 
 * TODO: Implement a full-featured todo list with:
 * - Add new todos
 * - Mark todos as complete/incomplete
 * - Delete todos
 * - Filter todos (All, Active, Completed)
 * - Persist todos in localStorage
 * - Use custom hooks for state management
 */

export default function Practice11TodoList() {
  return (
    <ExerciseWrapper
      title="Practice 1-1: Todo List"
      description="Build a complete todo list application"
    >
      <ExerciseInstructions
        title="Todo List Practice"
        description="In this practice, you'll build a complete todo list application using all the concepts from Module 1."
        objectives={[
          'Create a todo list with add, toggle, and delete functionality',
          'Implement filtering (All, Active, Completed)',
          'Use custom hooks for state management',
          'Persist todos in localStorage',
          'Apply useReducer for complex state management',
        ]}
        steps={[
          'Set up the basic todo list structure',
          'Implement add, toggle, and delete functionality',
          'Add filtering capabilities',
          'Create custom hooks for localStorage persistence',
          'Refactor to use useReducer if needed',
          'Style and polish the UI',
        ]}
      />

      <Card title="Your Todo List">
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Implement your todo list here. This is a practice exercise where you apply
          everything you've learned in Module 1.
        </p>
        {/* TODO: Implement your todo list here */}
      </Card>
    </ExerciseWrapper>
  );
}

