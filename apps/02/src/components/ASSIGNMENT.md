# Assignment: Refactor to Avoid useEffect for Derived State

## Background

React's useEffect hook is often misused to calculate derived state. This leads to unnecessary renders and more complex code. In this assignment, you'll refactor a component to avoid this anti-pattern.

## The Problem

The `PriceCalculator` component currently uses useEffect to calculate the final amount based on price and discount:

```tsx
// Anti-pattern: Using useEffect to calculate derived state
const [finalAmount, setFinalAmount] = useState(initialPrice);

useEffect(() => {
  setFinalAmount(price - discount);
}, [price, discount]);
```

This approach causes extra renders:
1. When price or discount changes, the component renders once
2. Then useEffect runs and updates finalAmount, causing a second render

## Your Task

Refactor the `PriceCalculator` component in `src/components/PriceCalculator.tsx` to:

1. Remove the finalAmount state
2. Remove the useEffect
3. Calculate the final amount directly during render
4. Make sure all functionality remains the same

## Requirements

- The component should still display the correct final amount
- The component should render fewer times after your changes
- All tests in `PriceCalculator.test.tsx` should pass

## Resources

- Look at the demo components in the `/demo` directory for guidance
- The solution is available in `/demo/PriceCalculatorSolution.tsx` (but try to solve it yourself first!)

## Testing Your Solution

Run the tests to verify your solution:

```
npm test
```

## Why This Matters

Learning to avoid unnecessary effects is crucial for writing efficient React code. This pattern of deriving values during render instead of using effects is a key React optimization technique. 