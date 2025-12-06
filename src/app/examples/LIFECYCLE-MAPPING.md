# Lifecycle Methods → useEffect Mapping

A clear guide showing how class component lifecycle methods map to `useEffect` hooks.

## Direct Mapping

### componentDidMount

**Class Component:**
```tsx
class MyComponent extends Component {
  componentDidMount() {
    console.log('Component mounted');
    // Setup: subscriptions, API calls, etc.
  }
}
```

**Function Component with Hooks:**
```tsx
function MyComponent() {
  useEffect(() => {
    console.log('Component mounted');
    // Setup: subscriptions, API calls, etc.
  }, []); // Empty array = runs once on mount
}
```

### componentDidUpdate

**Class Component:**
```tsx
class MyComponent extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      console.log('userId changed');
      // Do something when userId changes
    }
  }
}
```

**Function Component with Hooks:**
```tsx
function MyComponent({ userId }) {
  useEffect(() => {
    console.log('userId changed');
    // Do something when userId changes
  }, [userId]); // Runs when userId changes
}
```

### componentWillUnmount

**Class Component:**
```tsx
class MyComponent extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Cleanup
  }
}
```

**Function Component with Hooks:**
```tsx
function MyComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);

    // Return cleanup function (like componentWillUnmount)
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty array = runs once on mount
}
```

### componentDidMount + componentWillUnmount Together

**Class Component:**
```tsx
class MyComponent extends Component {
  componentDidMount() {
    // Setup
    this.subscription = subscribe();
  }

  componentWillUnmount() {
    // Cleanup
    this.subscription.unsubscribe();
  }
}
```

**Function Component with Hooks:**
```tsx
function MyComponent() {
  useEffect(() => {
    // Setup
    const subscription = subscribe();

    // Cleanup (runs on unmount)
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Empty array = mount only
}
```

## Complete Example: Subscription Pattern

### Before (Class Component)

```tsx
class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    // Subscribe when component mounts
    this.subscription = chatService.subscribe(this.props.roomId, (message) => {
      this.setState(prevState => ({
        messages: [...prevState.messages, message]
      }));
    });
  }

  componentDidUpdate(prevProps) {
    // Re-subscribe if roomId changes
    if (prevProps.roomId !== this.props.roomId) {
      this.subscription.unsubscribe();
      this.subscription = chatService.subscribe(this.props.roomId, (message) => {
        this.setState(prevState => ({
          messages: [...prevState.messages, message]
        }));
      });
    }
  }

  componentWillUnmount() {
    // Cleanup when component unmounts
    this.subscription.unsubscribe();
  }

  render() {
    return <div>{/* render messages */}</div>;
  }
}
```

### After (Function Component with Hooks)

```tsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Subscribe when component mounts or roomId changes
    const subscription = chatService.subscribe(roomId, (message) => {
      setMessages(prev => [...prev, message]);
    });

    // Cleanup: runs on unmount OR before re-running effect (when roomId changes)
    return () => {
      subscription.unsubscribe();
    };
  }, [roomId]); // Re-run when roomId changes

  return <div>{/* render messages */}</div>;
}
```

## Key Points

1. **componentDidMount** → `useEffect(() => {...}, [])`
   - Empty dependency array = runs once after mount

2. **componentDidUpdate** → `useEffect(() => {...}, [deps])`
   - With dependencies = runs when dependencies change

3. **componentWillUnmount** → `return () => {...}` inside `useEffect`
   - Cleanup function runs before unmount OR before effect re-runs

4. **All Three Together** → One `useEffect` handles everything
   - Setup in the effect body
   - Cleanup in the return function
   - Dependencies control when it re-runs

## Why This is Better

- **Single Place**: All related logic (setup + cleanup) in one place
- **Automatic Cleanup**: Cleanup runs automatically when dependencies change
- **Less Code**: No need to compare prevProps/prevState manually
- **More Flexible**: Easy to add/remove dependencies

## Common Patterns

### Pattern 1: Run Once on Mount
```tsx
useEffect(() => {
  // Runs once when component mounts
}, []); // Empty array
```

### Pattern 2: Run on Every Render
```tsx
useEffect(() => {
  // Runs on every render (usually avoid this)
}); // No dependency array
```

### Pattern 3: Run When Specific Value Changes
```tsx
useEffect(() => {
  // Runs when userId or filter changes
}, [userId, filter]); // Specific dependencies
```

### Pattern 4: Cleanup on Unmount
```tsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  
  return () => {
    clearInterval(timer); // Cleanup
  };
}, []); // Runs once, cleans up on unmount
```

### Pattern 5: Cleanup Before Re-run
```tsx
useEffect(() => {
  const subscription = subscribe(id);
  
  return () => {
    subscription.unsubscribe(); // Cleanup before re-subscribing
  };
}, [id]); // Re-runs when id changes, cleanup runs first
```

## Summary

| Class Component | Function Component |
|----------------|-------------------|
| `componentDidMount` | `useEffect(() => {...}, [])` |
| `componentDidUpdate` | `useEffect(() => {...}, [deps])` |
| `componentWillUnmount` | `return () => {...}` in `useEffect` |
| All three separate | One `useEffect` handles all |

**The lifecycle methods are replaced, but their functionality is preserved and improved with `useEffect`!**


