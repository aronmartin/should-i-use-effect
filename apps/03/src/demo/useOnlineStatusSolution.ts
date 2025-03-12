import { useState, useEffect, useCallback } from 'react';

/**
 * SOLUTION:
 *
 * This hook accepts an onChange callback that will be called when the online status changes.
 * This avoids the need for useEffect in consumer components, reducing renders and complexity.
 *
 * @param onChange - Optional callback that will be called when the online status changes
 * @returns The current online status
 */
export function useOnlineStatusSolution(onChange?: (isOnline: boolean) => void) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Initialize with the current status
  useEffect(() => {
    if (onChange) {
      onChange(isOnline);
    }
  }, []);

  useEffect(() => {
    const handleStatusChange = (status: boolean) => {
      setIsOnline(status);

      // Call the onChange callback if provided
      if (onChange) {
        onChange(status);
      }
    };

    const handleOnline = () => {
      handleStatusChange(true);
    };

    const handleOffline = () => {
      handleStatusChange(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [onChange]);

  return isOnline;
}
