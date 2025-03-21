import { HighlightToggle } from '@should-i-use-effect/ui';
import { PriceCalculator } from './components/PriceCalculator';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-50">
      <div className="max-w-3xl w-full py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Should I Use Effect?</h1>
          <p className="text-gray-600 mb-4">Assignment: optimize the PriceCalculator component</p>
        </header>

        <PriceCalculator initialPrice={100} />

        <div className="mt-6 flex justify-center">
          <HighlightToggle defaultEnabled={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
