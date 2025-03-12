import { useRef, useEffect } from 'react';

/**
 * A hook that counts the number of times a component has rendered.
 *
 * @param componentName - Optional name for the component to identify in debug logs
 * @param enableLogging - Whether to log render counts to the console
 * @returns The current render count
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const renderCount = useRenderCount('MyComponent', true);
 *
 *   return (
 *     <div>This component has rendered {renderCount} times</div>
 *   );
 * }
 * ```
 */
export function useRenderCount(componentName?: string, enableLogging = false): number {
  const renderCount = useRef(0);

  // Increment the render count on each render
  renderCount.current += 1;

  useEffect(() => {
    // Log the render count if logging is enabled
    if (enableLogging) {
      const name = componentName ? `${componentName} component` : 'Component';
      console.log(`${name} rendered ${renderCount.current} times`);
    }
  });

  return renderCount.current;
}
