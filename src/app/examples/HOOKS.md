# React Hooks - Complete Guide

## What are Hooks?

Hooks are special functions that let you "hook into" React features from function components. They were introduced in React 16.8.

## Basic Hooks

### useState

Manages the local state of a component.

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### useEffect

Handles side effects such as API calls, subscriptions, etc.

```tsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]); // Runs when userId changes

  return <div>{user?.name}</div>;
}
```

### useContext

Accesses context without prop drilling.

```tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

## Optimization Hooks

### useMemo

Memoizes expensive values.

```tsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);

  return <div>{/* render sortedItems */}</div>;
}
```

### useCallback

Memoizes functions to avoid recreating them.

```tsx
import { useCallback } from 'react';

function Parent({ items }) {
  const handleClick = useCallback((id) => {
    console.log('Clicked', id);
  }, []);

  return <Child onClick={handleClick} />;
}
```

## Custom Hooks

You can create your own hooks to reuse logic.

```tsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Usage
function MyComponent() {
  const { count, increment } = useCounter(10);
  return <button onClick={increment}>{count}</button>;
}
```

## Rules of Hooks

1. Only call Hooks at the top level (not inside loops, conditions, or nested functions)
2. Only call Hooks from function components or custom hooks
