import { useState } from 'react';
import { Button, Card, HighlightToggle } from '@should-i-use-effect/ui';
import { useRenderCount, useRenderHighlight } from '@should-i-use-effect/hooks';
import { CardHead } from './components/CardHead';
import { CardContent } from './components/CardContent';
import { CardFooter } from './components/CardFooter';

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRenderCount();
  const ref = useRenderHighlight({
    componentName: 'App',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-6 w-full">
      <Card
        ref={ref}
        elevation="raised"
        className="max-w-md w-full rounded-xl overflow-hidden bg-white shadow-xl border-0"
      >
        <CardHead />
        <div className="p-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center w-full">
              <CardContent count={count} renderCount={renderCount} />

              <div className="flex gap-3 mt-2 w-full">
                <Button
                  variant="primary"
                  onClick={() => setCount(count + 1)}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                >
                  Increment
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setCount(0)}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700"
                >
                  Reset
                </Button>
              </div>
            </div>

            <CardFooter />
          </div>
        </div>
      </Card>

      <HighlightToggle className="mt-6" />
    </div>
  );
}

export default App;
