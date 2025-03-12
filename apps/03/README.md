# Should I Use Effect? - Callback Pattern Assignment

This application demonstrates how to refactor a component that uses a boolean hook with `useEffect` to a more efficient pattern using callbacks.

## The Problem

When a hook returns a boolean value, components often use `useEffect` to react to changes in that value. This creates an indirect communication pattern that leads to:

1. Extra renders
2. Unnecessary complexity
3. Harder to debug code

## The Solution

By modifying the hook to accept a callback function, we can:

1. Reduce the number of renders
2. Create a more direct communication pattern
3. Make the code more declarative and easier to understand

## Assignment

In this assignment, you'll refactor the `useOnlineStatus` hook and the `NetworkStatus` component to use a callback pattern instead of `useEffect`.

## Getting Started

1. Examine the current implementation in:
   - `src/hooks/useOnlineStatus.ts`
   - `src/components/NetworkStatus.tsx`

2. Follow the instructions in the `ASSIGNMENT.md` file to complete the refactoring.

3. Run the tests to verify your solution:
   ```
   npm test
   ```

## Demo Components

The application includes demo components that show both the anti-pattern and the recommended pattern for comparison.

## Learning Objectives

- Understand the problems with using `useEffect` with boolean hooks
- Learn how to implement the callback pattern
- See the benefits in terms of reduced renders and cleaner code 