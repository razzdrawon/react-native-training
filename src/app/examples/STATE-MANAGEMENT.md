# State Management in React

## State Management Options

### 1. Local State (useState)

For state that only one component needs.

```tsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 2. Context API

For state that multiple components need, but is not global.

```tsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 3. Zustand

Lightweight and modern state management.

```tsx
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}
```

### 4. React Query

For server state and caching.

```tsx
import { useQuery } from '@tanstack/react-query';

function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  return <div>{data.map(u => <div key={u.id}>{u.name}</div>)}</div>;
}
```

## When to use each

- **useState**: Component local state
- **Context API**: State shared between few components
- **Zustand**: Simple to medium global state
- **Redux**: Complex global state (lots of state, middleware needed)
- **React Query**: Everything related to server data
