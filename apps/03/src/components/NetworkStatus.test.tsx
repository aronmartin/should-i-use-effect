import { render, screen, fireEvent } from '@testing-library/react';
import { NetworkStatus } from './NetworkStatus';
import * as hooks from '../hooks/useOnlineStatus';
import { vi, expect, describe, test } from 'vitest';

// Mock the useOnlineStatus hook
vi.mock('../hooks/useOnlineStatus', () => ({
  useOnlineStatus: vi.fn(),
}));

describe('NetworkStatus Component', () => {
  beforeEach(() => {
    // Reset the mock and set default return value
    vi.mocked(hooks.useOnlineStatus).mockReturnValue(true);
  });

  test('renders with initial online status', () => {
    render(<NetworkStatus />);
    expect(screen.getByText(/You are online/i)).toBeInTheDocument();
  });

  test('updates message when network status changes', () => {
    // Start with online status
    const { rerender } = render(<NetworkStatus />);
    expect(screen.getByText(/You are online/i)).toBeInTheDocument();

    // Change to offline
    vi.mocked(hooks.useOnlineStatus).mockReturnValue(false);
    rerender(<NetworkStatus />);
    expect(screen.getByText(/You are offline/i)).toBeInTheDocument();

    // Change back to online
    vi.mocked(hooks.useOnlineStatus).mockReturnValue(true);
    rerender(<NetworkStatus />);
    expect(screen.getByText(/You are online/i)).toBeInTheDocument();
  });

  test('toggles network status when button is clicked', () => {
    // Mock navigator.onLine
    Object.defineProperty(navigator, 'onLine', {
      writable: true,
      value: true,
    });

    render(<NetworkStatus />);

    // Initial state
    expect(screen.getByText(/You are online/i)).toBeInTheDocument();

    // Click toggle button
    fireEvent.click(screen.getByText(/Toggle Network/i));

    // Should be offline now
    expect(navigator.onLine).toBe(false);
  });
});
