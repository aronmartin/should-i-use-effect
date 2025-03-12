import { Card, Typography, HighlightToggle } from '@should-i-use-effect/ui';
import { PriceCalculator } from './components/PriceCalculator';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-50">
      <div className="max-w-3xl w-full py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Should I Use Effect?</h1>
          <p className="text-gray-600 mb-4">Assignment: optimize the PriceCalculator component</p>
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
            Refactor the PriceCalculator component below to avoid using useEffect for derived state.
            The component should calculate the final amount directly during render instead of using
            state and effects.
          </Typography>
          <Typography variant="body2" className="text-gray-600 mt-2">
            <strong>Hint:</strong> Look at the file <code>src/components/PriceCalculator.tsx</code>{' '}
            and follow the TODO comments. You can also check the demo components for guidance.
          </Typography>
        </Card>

        <PriceCalculator initialPrice={100} />

        <div className="mt-6 flex justify-center">
          <HighlightToggle defaultEnabled={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
