import { useState, useCallback } from 'react';
import { Card, Typography } from '@should-i-use-effect/ui';
import { useRenderCount } from '../hooks/useRenderCount';
import { useOnlineStatusSolution } from './useOnlineStatusSolution';

/**
 * NetworkStatusSolution - A component that demonstrates the callback pattern
 *
 * This component uses the callback pattern with useOnlineStatusSolution hook
 * to handle online status changes without using useEffect.
 *
 * Key improvements:
 * - Reduces unnecessary renders
 * - Provides cleaner code
 * - Makes the relationship between the hook and component more explicit
 */
export function NetworkStatusSolution() {
  const [message, setMessage] = useState('');
  const renderCount = useRenderCount();

  // Define a callback function to handle status changes
  const handleStatusChange = useCallback((isOnline: boolean) => {
    setMessage(isOnline ? 'You are online' : 'You are offline');
  }, []);

  // Use the solution hook with the callback
  const isOnline = useOnlineStatusSolution(handleStatusChange);

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
        Solution: Using Callback Pattern
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
          {isOnline ? 'Simulate Offline' : 'Simulate Online'}
        </button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
        <Typography variant="body2" className="text-blue-800">
          <strong>Note:</strong> This component uses the callback pattern. The hook accepts a
          callback function that is called whenever the online status changes. This eliminates the
          need for useEffect in the component and reduces renders.
        </Typography>
      </div>
    </Card>
  );
}
