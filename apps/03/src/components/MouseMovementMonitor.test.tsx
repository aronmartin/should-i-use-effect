import { render, screen, fireEvent } from '@testing-library/react';
import { MouseMovementMonitor } from './MouseMovementMonitor';
import * as hooks from '../hooks/useIsMouseMoving';
import { vi, expect, describe, test } from 'vitest';

// Mock the useIsMouseMoving hook
vi.mock('../hooks/useIsMouseMoving', () => ({
  useIsMouseMoving: vi.fn(),
}));

describe('MouseMovementMonitor Component', () => {
  beforeEach(() => {
    // Reset the mock and set default return value
    vi.mocked(hooks.useIsMouseMoving).mockReturnValue(true);
  });

  test('renders with initial mouse movement status', () => {
    render(<MouseMovementMonitor />);
    // Use a more specific selector to target only the message element
    const messageElement = screen.getByText(/Mouse is moving/i, { selector: '.bg-gray-50 p-4 *' });
    expect(messageElement).toBeInTheDocument();
  });

  test('updates message when mouse movement status changes', () => {
    // Start with moving status
    const { rerender } = render(<MouseMovementMonitor />);
    const messageElement = screen.getByText(/Mouse is moving/i, { selector: '.bg-gray-50 p-4 *' });
    expect(messageElement).toBeInTheDocument();

    // Change to not moving
    vi.mocked(hooks.useIsMouseMoving).mockReturnValue(false);
    rerender(<MouseMovementMonitor />);
    const notMovingElement = screen.getByText(/Mouse is not moving/i, {
      selector: '.bg-gray-50 p-4 *',
    });
    expect(notMovingElement).toBeInTheDocument();

    // Change back to moving
    vi.mocked(hooks.useIsMouseMoving).mockReturnValue(true);
    rerender(<MouseMovementMonitor />);
    const movingAgainElement = screen.getByText(/Mouse is moving/i, {
      selector: '.bg-gray-50 p-4 *',
    });
    expect(movingAgainElement).toBeInTheDocument();
  });

  test('toggles mouse movement status when button is clicked', () => {
    // Mock window.dispatchEvent
    window.dispatchEvent = vi.fn();

    render(<MouseMovementMonitor />);

    // Initial state
    const messageElement = screen.getByText(/Mouse is moving/i, { selector: '.bg-gray-50 p-4 *' });
    expect(messageElement).toBeInTheDocument();

    // Click toggle button
    fireEvent.click(screen.getByText(/Toggle Status/i));

    // Should trigger a mouse movement event
    expect(window.dispatchEvent).toHaveBeenCalled();
  });

  // New test to check if the component is using the callback pattern instead of useEffect
  test('should use callback pattern instead of useEffect (anti-pattern check)', () => {
    // Get the component's source code
    const componentSource = MouseMovementMonitor.toString();

    // Check if the component contains the anti-pattern
    const hasUseEffectForMouseMoving =
      componentSource.includes('useEffect') &&
      componentSource.includes('setMessage') &&
      componentSource.includes('[isMoving]');

    // This test will fail if the component is still using useEffect for mouse movement status changes
    expect(hasUseEffectForMouseMoving).toBe(false);

    // Check if useIsMouseMoving was called with a callback function
    const mockUseIsMouseMoving = vi.mocked(hooks.useIsMouseMoving);
    render(<MouseMovementMonitor />);

    // Check if the hook was called with a function parameter
    expect(mockUseIsMouseMoving).toHaveBeenCalled();
    const firstCall = mockUseIsMouseMoving.mock.calls[0];
    const hasCallback = firstCall && firstCall.length > 0 && typeof firstCall[0] === 'function';

    // This test will fail if the hook is not called with a callback
    expect(hasCallback).toBe(true);
  });
});
