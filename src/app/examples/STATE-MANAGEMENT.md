# State Management en React

## Opciones de State Management

### 1. Local State (useState)

Para estado que solo un componente necesita.

```tsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 2. Context API

Para estado que varios componentes necesitan, pero no es global.

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

State management ligero y moderno.

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

Para estado del servidor y caché.

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

## Cuándo usar cada uno

- **useState**: Estado local del componente
- **Context API**: Estado compartido entre pocos componentes
- **Zustand**: Estado global simple a mediano
- **Redux**: Estado global complejo (mucho estado, middleware necesario)
- **React Query**: Todo lo relacionado con datos del servidor

