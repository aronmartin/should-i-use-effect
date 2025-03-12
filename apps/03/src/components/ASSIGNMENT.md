# Assignment: Refactor to Use Callback Pattern Instead of useEffect

## Background

When a hook returns a boolean value (or any value), components often use `useEffect` to react to changes in that value. This creates an indirect communication pattern that leads to extra renders and unnecessary complexity.

## The Problem

Currently, the `useOnlineStatus` hook returns a boolean indicating whether the user is online:

```tsx
// Current implementation in src/hooks/useOnlineStatus.ts
export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return isOnline;
}
```

The `NetworkStatus` component uses this hook and then uses `useEffect` to react to changes in the online status:

```tsx
// Current implementation in src/components/NetworkStatus.tsx
export function NetworkStatus() {
  const [message, setMessage] = useState('');
  const isOnline = useOnlineStatus();
  
  // ANTI-PATTERN: Using useEffect to react to changes in the boolean value
  useEffect(() => {
    setMessage(isOnline ? 'You are online' : 'You are offline');
  }, [isOnline]);
  
  // ... rest of the component
}
```

This pattern causes extra renders and adds unnecessary complexity.

## Your Task

1. Modify the `useOnlineStatus` hook to accept an `onChange` callback parameter
2. Call this callback when the online status changes
3. Continue to return the current online status
4. Remove the `useEffect` from the `NetworkStatus` component
5. Pass a callback to the hook that updates the message state directly

## Requirements

- The hook should still return the current online status
- The component should display the correct message based on the online status
- All tests should pass
- The component should render fewer times after your changes

## Resources

- Look at the demo components for guidance:
  - `src/demo/useOnlineStatusSolution.ts`
  - `src/demo/NetworkStatusSolution.tsx`

## Testing Your Solution

Run the tests to verify your solution:

```
npm test
```

## Why This Matters

The callback pattern is more efficient because:

1. It reduces unnecessary renders
2. It creates a more direct communication pattern
3. It makes the code more declarative and easier to understand
4. It eliminates the need for `useEffect` in many cases

This pattern is particularly useful when working with hooks that provide status information or other values that components need to react to. 