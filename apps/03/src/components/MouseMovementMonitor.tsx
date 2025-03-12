import { useState, useEffect } from 'react';
import { Card, Typography } from '@should-i-use-effect/ui';
import { useIsMouseMoving } from '../hooks/useIsMouseMoving';
import { useRenderCount } from '@should-i-use-effect/hooks';

/**
 * MouseMovementMonitor - A component that demonstrates the anti-pattern
 *
 * ANTI-PATTERN: This component uses useEffect to react to changes from the useIsMouseMoving hook.
 * This creates an indirect communication pattern that leads to extra renders and unnecessary complexity.
 *
 * The assignment is to refactor this component to use a callback pattern instead.
 */
export function MouseMovementMonitor() {
  const [message, setMessage] = useState('');
  const renderCount = useRenderCount();

  // Get the mouse movement status from the hook
  const isMoving = useIsMouseMoving();

  // ANTI-PATTERN: Using useEffect to react to changes in the boolean value
  useEffect(() => {
    setMessage(isMoving ? 'Mouse is moving' : 'Mouse is not moving');
  }, [isMoving]);

  return (
    <Card elevation="raised" className="p-6 mb-6">
      <Typography variant="h4" gutterBottom>
        Mouse Movement Monitor
      </Typography>

      <div className="flex items-center justify-between mb-4">
        <Typography variant="h5" className={isMoving ? 'text-green-600' : 'text-red-600'}>
          {isMoving ? 'Moving' : 'Not Moving'}
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
          Current status: {isMoving ? 'Mouse is moving' : 'Mouse is not moving'}
        </Typography>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-md">
        <Typography variant="body2" className="text-yellow-800">
          <strong>Anti-Pattern:</strong> This component uses useEffect to react to changes from the
          useIsMouseMoving hook. This causes extra renders and adds unnecessary complexity. Your
          task is to refactor this to use a callback pattern.
        </Typography>
      </div>
    </Card>
  );
}
