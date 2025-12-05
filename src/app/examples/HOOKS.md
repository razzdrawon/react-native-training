# React Hooks - Guía Completa

## ¿Qué son los Hooks?

Los Hooks son funciones especiales que te permiten "engancharte" a características de React desde componentes funcionales. Fueron introducidos en React 16.8.

## Hooks Básicos

### useState

Maneja el estado local de un componente.

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

Maneja efectos secundarios (side effects) como llamadas a APIs, suscripciones, etc.

```tsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]); // Se ejecuta cuando userId cambia

  return <div>{user?.name}</div>;
}
```

### useContext

Accede al contexto sin prop drilling.

```tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

## Hooks de Optimización

### useMemo

Memoiza valores costosos.

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

Memoiza funciones para evitar recrearlas.

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

Puedes crear tus propios hooks para reutilizar lógica.

```tsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Uso
function MyComponent() {
  const { count, increment } = useCounter(10);
  return <button onClick={increment}>{count}</button>;
}
```

## Reglas de los Hooks

1. Solo llama Hooks en el nivel superior (no dentro de loops, condiciones, o funciones anidadas)
2. Solo llama Hooks desde componentes funcionales o custom hooks

