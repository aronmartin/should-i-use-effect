import { useState, useEffect } from 'react';
import { Card, Typography } from '@should-i-use-effect/ui';
import { useIsMouseMoving } from '../hooks/useIsMouseMoving';
import { useRenderCount } from '@should-i-use-effect/hooks';

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
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h4" gutterBottom>
          Mouse Movement Monitor
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
    </Card>
  );
}
