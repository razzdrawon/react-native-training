import { useState } from 'react';
import ExerciseWrapper from '../../components/shared/ExerciseWrapper';
import ExerciseInstructions from '../../components/shared/ExerciseInstructions';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';

/**
 * Exercise 1-1: Custom Hooks
 * 
 * Objective: Create and use custom hooks to encapsulate reusable logic
 * 
 * TODO:
 * 1. Create a custom hook called `useCounter` that manages count state
 *    - Should return: { count, increment, decrement, reset }
 *    - Should accept an optional initial value
 * 
 * 2. Create a custom hook called `useLocalStorage` that syncs state with localStorage
 *    - Should accept a key and initial value
 *    - Should return: [value, setValue] similar to useState
 *    - Should persist value to localStorage on changes
 *    - Should load initial value from localStorage if it exists
 * 
 * 3. Use both hooks in this component
 *    - Use `useCounter` for the counter section
 *    - Use `useLocalStorage` for the name input
 * 
 * 4. Test that the name persists after page refresh
 */

// TODO: Create useCounter hook
// const useCounter = (initialValue = 0) => {
//   // Your implementation here
// };

// TODO: Create useLocalStorage hook
// const useLocalStorage = <T,>(key: string, initialValue: T) => {
//   // Your implementation here
// };

export default function Exercise11CustomHooks() {
  // TODO: Replace with useCounter hook
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // TODO: Replace with useLocalStorage hook
  const [name, setName] = useState('');

  return (
    <ExerciseWrapper
      title="Exercise 1-1: Custom Hooks"
      description="Create reusable custom hooks for counter and localStorage"
    >
      <ExerciseInstructions
        title="Custom Hooks Exercise"
        description="In this exercise, you'll create two custom hooks and use them in this component."
        objectives={[
          'Create a useCounter hook that manages count state',
          'Create a useLocalStorage hook that syncs with localStorage',
          'Use both hooks in the component',
          'Verify that localStorage persists data across page refreshes',
        ]}
        steps={[
          'Create the useCounter hook in this file (or a separate hooks file)',
          'Create the useLocalStorage hook with proper TypeScript generics',
          'Replace the useState calls with your custom hooks',
          'Test the functionality and localStorage persistence',
        ]}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card title="Counter with useCounter Hook">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button label="Decrement" onClick={decrement} variant="secondary" />
              <Button label="Reset" onClick={reset} variant="secondary" />
              <Button label="Increment" onClick={increment} variant="primary" />
            </div>
          </div>
        </Card>

        <Card title="LocalStorage with useLocalStorage Hook">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
              }}
            />
            {name && (
              <p style={{ fontSize: '1.1rem' }}>
                Hello, <strong>{name}</strong>! This value should persist after page refresh.
              </p>
            )}
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Try refreshing the page - your name should still be here if you implemented useLocalStorage correctly.
            </p>
          </div>
        </Card>
      </div>
    </ExerciseWrapper>
  );
}

