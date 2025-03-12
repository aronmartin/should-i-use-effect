import { useState, useEffect } from 'react';
import { Card, Typography } from '@should-i-use-effect/ui';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useRenderCount } from '@should-i-use-effect/hooks';

/**
 * NetworkStatus - A component that demonstrates the anti-pattern
 *
 * ANTI-PATTERN: This component uses useEffect to react to changes from the useOnlineStatus hook.
 * This creates an indirect communication pattern that leads to extra renders and unnecessary complexity.
 *
 * The assignment is to refactor this component to use a callback pattern instead.
 */
export function NetworkStatus() {
  const [message, setMessage] = useState('');
  const renderCount = useRenderCount();

  // Get the online status from the hook
  const isOnline = useOnlineStatus();

  // ANTI-PATTERN: Using useEffect to react to changes in the boolean value
  useEffect(() => {
    setMessage(isOnline ? 'You are online' : 'You are offline');
  }, [isOnline]);

  // Function to toggle network status for demonstration
  const toggleNetwork = () => {
    // This is just for demonstration purposes
    Object.defineProperty(navigator, 'onLine', {
      writable: true,
      value: !navigator.onLine,
    });

    // Manually dispatch the event to trigger the hook
    window.dispatchEvent(new Event(navigator.onLine ? 'online' : 'offline'));
  };

  return (
    <Card elevation="raised" className="p-6 mb-6">
      <Typography variant="h4" gutterBottom>
        Network Status Monitor
      </Typography>

      <div className="flex items-center justify-between mb-4">
        <Typography variant="h5" className={isOnline ? 'text-green-600' : 'text-red-600'}>
          {isOnline ? 'Connected' : 'Disconnected'}
        </Typography>
        <div className="bg-gray-100 px-3 py-1 rounded-full">
          <Typography variant="body2">
            Renders: <span className="font-mono">{renderCount}</span>
          </Typography>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <Typography variant="body1" className="render-highlight">
          {message}
        </Typography>
      </div>

      <div className="flex justify-between items-center">
        <Typography variant="body2" className="text-gray-600">
          Current status: {isOnline ? 'Connected' : 'Disconnected'}
        </Typography>

        <button
          onClick={toggleNetwork}
          className={`px-4 py-2 rounded-md ${
            isOnline ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          } text-white transition-colors`}
        >
          Toggle Network
        </button>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-md">
        <Typography variant="body2" className="text-yellow-800">
          <strong>Anti-Pattern:</strong> This component uses useEffect to react to changes from the
          useOnlineStatus hook. This causes extra renders and adds unnecessary complexity. Your task
          is to refactor this to use a callback pattern.
        </Typography>
      </div>
    </Card>
  );
}
