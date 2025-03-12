import { useState, useEffect } from 'react';

/**
 * useOnlineStatus - A hook that returns the current online status
 *
 * ANTI-PATTERN: This hook only returns a boolean value that components would likely
 * use in a useEffect, leading to unnecessary complexity.
 *
 * Assignment:
 * 1. Modify this hook to accept an onChange callback
 * 2. Call this callback when the online status changes
 * 3. Continue to return the current online status
 * 4. Make sure all functionality remains the same
 */
export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
