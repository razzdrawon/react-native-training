import ExerciseWrapper from '../../components/shared/ExerciseWrapper';
import ExerciseInstructions from '../../components/shared/ExerciseInstructions';
import Card from '../../components/shared/Card';

/**
 * Exercise 1-3: Zustand
 * 
 * TODO: This exercise will be implemented later
 * 
 * Objective: Implement state management using Zustand
 */

export default function Exercise13Zustand() {
  return (
    <ExerciseWrapper
      title="Exercise 1-3: Zustand"
      description="State management with Zustand (Coming soon)"
    >
      <ExerciseInstructions
        title="Zustand Exercise"
        description="This exercise will cover Zustand state management."
        objectives={[
          'Set up a Zustand store',
          'Create actions and selectors',
          'Use the store in components',
        ]}
      />

      <Card title="Exercise Coming Soon">
        <p>This exercise will be implemented in a future update.</p>
        <p style={{ marginTop: '1rem', color: '#666' }}>
          Check back later or start with exercises 1-1 and 1-2!
        </p>
      </Card>
    </ExerciseWrapper>
  );
}

