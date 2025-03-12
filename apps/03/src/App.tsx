import { Card, Typography, HighlightToggle } from '@should-i-use-effect/ui';
import { MouseMovementMonitor } from './components/MouseMovementMonitor';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-50">
      <div className="max-w-3xl w-full py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Should I Use Effect?</h1>
          <p className="text-gray-600 mb-4">
            Assignment: Refactor to Use Callback Pattern Instead of useEffect
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/src/components/ASSIGNMENT.md"
              target="_blank"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              View Assignment Instructions
            </a>
          </div>
        </header>

        <Card elevation="flat" className="w-full mb-8 p-6">
          <Typography variant="h4" gutterBottom>
            Your Assignment
          </Typography>
          <Typography variant="body1" gutterBottom>
            Refactor the MouseMovementMonitor component and useIsMouseMoving hook to use a callback
            pattern instead of useEffect. The component should pass a callback to the hook that
            updates the message state directly.
          </Typography>
          <Typography variant="body2" className="text-gray-600 mt-2">
            <strong>Hint:</strong> Look at the files <code>src/hooks/useIsMouseMoving.ts</code> and{' '}
            <code>src/components/MouseMovementMonitor.tsx</code> and follow the instructions. You
            can also check the demo components for guidance.
          </Typography>
        </Card>

        <MouseMovementMonitor />

        <div className="mt-6 flex justify-center">
          <HighlightToggle defaultEnabled={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
