import ExerciseWrapper from '../../components/shared/ExerciseWrapper';
import ExerciseInstructions from '../../components/shared/ExerciseInstructions';
import Card from '../../components/shared/Card';

/**
 * Exercise 1-4: React Query Dashboard
 * 
 * TODO: This exercise will be implemented later
 * 
 * Objective: Build a reactive dashboard using React Query
 */

export default function Exercise14ReactQuery() {
  return (
    <ExerciseWrapper
      title="Exercise 1-4: React Query Dashboard"
      description="Reactive dashboard with React Query (Coming soon)"
    >
      <ExerciseInstructions
        title="React Query Dashboard Exercise"
        description="This exercise will cover building a dashboard with React Query for server state management."
        objectives={[
          'Set up React Query',
          'Create queries and mutations',
          'Build a reactive dashboard',
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

