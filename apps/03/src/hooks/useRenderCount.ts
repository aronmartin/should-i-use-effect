import { useRef } from 'react';

/**
 * A hook that tracks how many times a component has rendered.
 * Useful for demonstrating render optimization.
 *
 * @returns The number of times the component has rendered
 */
export function useRenderCount(): number {
  const renderCount = useRef(0);

  // Increment on each render
  renderCount.current += 1;

  return renderCount.current;
}
