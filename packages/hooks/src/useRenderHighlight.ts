import { useRef, useEffect, RefObject } from 'react';
import { useRenderCount } from './useRenderCount';

/**
 * Configuration options for the useRenderHighlight hook
 */
export interface RenderHighlightOptions {
  /** Duration of the highlight effect in milliseconds */
  duration?: number;
  /** CSS class to apply for highlighting */
  highlightClass?: string;
  /** Whether to log render counts to the console */
  enableLogging?: boolean;
  /** Name of the component for logging purposes */
  componentName?: string;
  /** Whether the highlight effect is enabled */
  enabled?: boolean;
}

/**
 * A hook that highlights an element with a CSS class whenever it re-renders.
 * Returns a ref that should be attached to the element you want to highlight.
 *
 * @param options - Configuration options for the highlight effect
 * @returns A ref object to attach to the element you want to highlight
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const ref = useRenderHighlight({
 *     componentName: 'MyComponent',
 *     enableLogging: true
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       This element will be highlighted when it re-renders
 *     </div>
 *   );
 * }
 * ```
 */
export function useRenderHighlight<T extends HTMLElement = HTMLDivElement>(
  options: RenderHighlightOptions = {}
): RefObject<T> {
  const {
    duration = 500,
    highlightClass = 'render-highlight',
    enableLogging = false,
    componentName,
    enabled = true,
  } = options;

  // Create a ref to attach to the element
  const ref = useRef<T>(null);

  // Use the render count hook to track renders
  const renderCount = useRenderCount(componentName, enableLogging);

  // Apply the highlight effect on each render (except the first one)
  useEffect(() => {
    // Skip if disabled, first render, or no ref
    if (!enabled || renderCount <= 1 || !ref.current || !highlightClass) return;

    // Add the highlight class
    ref.current.classList.add(highlightClass);

    // Remove the highlight class after the specified duration
    const timeoutId = setTimeout(() => {
      if (ref.current && highlightClass) {
        ref.current.classList.remove(highlightClass);
      }
    }, duration);

    // Clean up the timeout if the component unmounts
    return () => {
      if (ref.current && highlightClass) {
        ref.current.classList.remove(highlightClass);
      }
      clearTimeout(timeoutId);
    };
  }, [renderCount, highlightClass, duration, enabled]);

  return ref;
}
