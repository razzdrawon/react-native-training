# Before Hooks vs After Hooks

A simple comparison showing how React code changed with the introduction of Hooks.

## Example: Counter Component

### Before Hooks (Class Components)

```tsx
import React, { Component } from 'react';

class Counter extends Component {
  // State initialization
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Bind methods to 'this'
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Methods
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  // Lifecycle methods
  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count changed');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // Render method
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
```

### After Hooks (Function Components)

```tsx
import React, { useState, useEffect } from 'react';

function Counter() {
  // State initialization - much simpler!
  const [count, setCount] = useState(0);

  // Lifecycle effects - cleaner!
  useEffect(() => {
    console.log('Component mounted');
    
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty array = runs once on mount

  useEffect(() => {
    console.log('Count changed');
  }, [count]); // Runs when count changes

  // Methods - no binding needed!
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Return JSX directly - no render method!
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

## Key Differences

### 1. **State Management**

**Before:**
```tsx
// In constructor
this.state = { count: 0 };

// Update state
this.setState({ count: this.state.count + 1 });
```

**After:**
```tsx
// Declare state
const [count, setCount] = useState(0);

// Update state
setCount(count + 1);
// or
setCount(prev => prev + 1);
```

### 2. **Lifecycle Methods**

**Before:**
```tsx
componentDidMount() {
  // Runs after component mounts
}

componentDidUpdate(prevProps, prevState) {
  // Runs after updates
}

componentWillUnmount() {
  // Runs before unmount
}
```

**After:**
```tsx
useEffect(() => {
  // Runs after render
  return () => {
    // Cleanup (like componentWillUnmount)
  };
}, [dependencies]); // Empty = mount only, with deps = runs when deps change
```

### 3. **Method Binding**

**Before:**
```tsx
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  // 'this' is needed
}
```

**After:**
```tsx
// No binding needed!
const handleClick = () => {
  // Arrow function captures 'this' automatically
};
```

### 4. **Props**

**Before:**
```tsx
class MyComponent extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

**After:**
```tsx
function MyComponent({ name }) {
  return <div>{name}</div>;
}
```

## Example: Fetching Data

### Before Hooks

```tsx
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser();
    }
  }

  fetchUser = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(`/api/users/${this.props.userId}`);
      const user = await response.json();
      this.setState({ user, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { user, loading, error } = this.state;
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return <div>{user?.name}</div>;
  }
}
```

### After Hooks

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{user?.name}</div>;
}
```

## Benefits of Hooks

1. **Less Code**: Fewer lines, less boilerplate
2. **Easier to Read**: More declarative, less imperative
3. **Easier to Reuse**: Custom hooks can share logic between components
4. **No 'this' Confusion**: No need to bind methods or worry about context
5. **Better Performance**: Function components are generally faster
6. **Easier Testing**: Simpler to test function components

## When to Use What?

- **Use Function Components + Hooks**: For all new code (modern React)
- **Use Class Components**: Only when maintaining legacy code or using libraries that require it

