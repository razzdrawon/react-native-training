import { useReducer, useState } from 'react';
import ExerciseWrapper from '../../components/shared/ExerciseWrapper';
import ExerciseInstructions from '../../components/shared/ExerciseInstructions';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';

/**
 * Exercise 1-2: useReducer
 * 
 * Objective: Implement a todo list using useReducer instead of useState
 * 
 * TODO:
 * 1. Define the Todo type/interface
 *    - Should have: id, text, completed
 * 
 * 2. Define the State type
 *    - Should have: todos array and filter ('all' | 'active' | 'completed')
 * 
 * 3. Define the Action type
 *    - Should support: ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER
 * 
 * 4. Create the reducer function
 *    - Handle all action types
 *    - Return new state immutably
 * 
 * 5. Use useReducer in the component
 *    - Initialize with empty todos and 'all' filter
 * 
 * 6. Implement the UI
 *    - Add todo input and button
 *    - Filter buttons (All, Active, Completed)
 *    - Todo list with toggle and delete
 *    - Show count of active todos
 */

// TODO: Define types
// type Todo = {
//   id: number;
//   text: string;
//   completed: boolean;
// };

// type State = {
//   todos: Todo[];
//   filter: 'all' | 'active' | 'completed';
// };

// type Action =
//   | { type: 'ADD_TODO'; payload: string }
//   | { type: 'TOGGLE_TODO'; payload: number }
//   | { type: 'DELETE_TODO'; payload: number }
//   | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

// TODO: Create reducer function
// const todoReducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     // Your implementation here
//   }
// };

export default function Exercise12UseReducer() {
  // TODO: Replace with useReducer
  const [todos, setTodos] = useState<Array<{ id: number; text: string; completed: boolean }>>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [inputValue, setInputValue] = useState('');

  // TODO: Implement reducer actions
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // TODO: Use reducer state instead
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <ExerciseWrapper
      title="Exercise 1-2: useReducer"
      description="Build a todo list using useReducer for state management"
    >
      <ExerciseInstructions
        title="useReducer Exercise"
        description="In this exercise, you'll refactor a todo list from useState to useReducer."
        objectives={[
          'Define proper TypeScript types for Todo, State, and Action',
          'Create a reducer function that handles all todo operations',
          'Use useReducer instead of multiple useState calls',
          'Implement filtering functionality',
        ]}
        steps={[
          'Define Todo, State, and Action types',
          'Create the todoReducer function with all action cases',
          'Replace useState with useReducer',
          'Update all handlers to dispatch actions',
          'Test adding, toggling, deleting, and filtering todos',
        ]}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card title="Add Todo">
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
              }}
            />
            <Button label="Add Todo" onClick={addTodo} variant="primary" />
          </div>
        </Card>

        <Card title={`Todos (${activeCount} active)`}>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
            <Button
              label="All"
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'primary' : 'secondary'}
            />
            <Button
              label="Active"
              onClick={() => setFilter('active')}
              variant={filter === 'active' ? 'primary' : 'secondary'}
            />
            <Button
              label="Completed"
              onClick={() => setFilter('completed')}
              variant={filter === 'completed' ? 'primary' : 'secondary'}
            />
          </div>

          {filteredTodos.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>
              No todos found. {filter !== 'all' && 'Try changing the filter.'}
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {filteredTodos.map(todo => (
                <li
                  key={todo.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    background: '#f8f9fa',
                    borderRadius: '6px',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    style={{ width: '1.25rem', height: '1.25rem' }}
                  />
                  <span
                    style={{
                      flex: 1,
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? '#999' : '#333',
                    }}
                  >
                    {todo.text}
                  </span>
                  <Button
                    label="Delete"
                    onClick={() => deleteTodo(todo.id)}
                    variant="secondary"
                  />
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </ExerciseWrapper>
  );
}

