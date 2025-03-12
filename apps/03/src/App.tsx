import { useState, useEffect } from 'react';
import { Card, Typography, HighlightToggle } from '@should-i-use-effect/ui';
import { NetworkStatus } from './components/NetworkStatus';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-50">
      <div className="max-w-3xl w-full py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Should I Use Effect?</h1>
          <p className="text-gray-600 mb-4">
            Assignment: Refactor to Use Callback Pattern Instead of useEffect
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {showDemo ? 'Hide Demo Components' : 'Show Demo Components'}
            </button>
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
            Refactor the NetworkStatus component and useOnlineStatus hook to use a callback pattern
            instead of useEffect. The component should pass a callback to the hook that updates the
            message state directly.
          </Typography>
          <Typography variant="body2" className="text-gray-600 mt-2">
            <strong>Hint:</strong> Look at the files <code>src/hooks/useOnlineStatus.ts</code> and{' '}
            <code>src/components/NetworkStatus.tsx</code> and follow the instructions. You can also
            check the demo components for guidance.
          </Typography>
        </Card>

        <NetworkStatus />

        {showDemo && (
          <div className="mt-8">
            <Typography variant="h4" gutterBottom className="text-center">
              Demo Components
            </Typography>
            <Typography variant="body2" className="text-center mb-6 text-gray-600">
              These components demonstrate the anti-pattern and recommended pattern
            </Typography>

            <div className="grid grid-cols-1 gap-6">
              <DemoComponents />
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <HighlightToggle defaultEnabled={true} />
        </div>
      </div>
    </div>
  );
}

// Separate component to load demo components
const DemoComponents = () => {
  const [components, setComponents] = useState<React.ReactNode>(null);

  useEffect(() => {
    // We're using dynamic imports to avoid confusion
    const loadComponents = async () => {
      try {
        // Import all demo components
        const { ComparisonExplanation } = await import('./demo/ComparisonExplanation');
        const { NetworkStatusSolution } = await import('./demo/NetworkStatusSolution');

        setComponents(
          <>
            <ComparisonExplanation />
            <NetworkStatusSolution />
          </>
        );
      } catch (error) {
        console.error('Failed to load demo components:', error);
        setComponents(
          <Card elevation="flat" className="p-4">
            <Typography variant="body1" color="red-600">
              Failed to load demo components. Please check the console for errors.
            </Typography>
          </Card>
        );
      }
    };

    loadComponents();
  }, []);

  return (
    <div>
      {components || (
        <Card elevation="flat" className="p-4">
          <Typography variant="body1" className="text-center">
            Loading demo components...
          </Typography>
        </Card>
      )}
    </div>
  );
};

export default App;
