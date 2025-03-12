import { useState, useEffect } from 'react';
import { Card, Typography, Button } from '@should-i-use-effect/ui';
import { useRenderCount, useRenderHighlight } from '@should-i-use-effect/hooks';

interface PriceCalculatorProps {
  initialPrice: number;
}

/**
 * ASSIGNMENT:
 *
 * This component has an anti-pattern: it uses a state setter inside useEffect.
 * Your task is to refactor this component to avoid using useEffect for calculating the final amount.
 *
 * Requirements:
 * 1. Remove the finalAmount state and useEffect
 * 2. Calculate the final amount directly during render
 * 3. Make sure all functionality remains the same
 * 4. The component should render fewer times after your changes
 *
 * HINT: Look at the demo components in the /demo directory for guidance
 */
export const PriceCalculator = ({ initialPrice }: PriceCalculatorProps) => {
  // Track render count
  const renderCount = useRenderCount('PriceCalculator');
  const ref = useRenderHighlight({ componentName: 'PriceCalculator' });

  // State for the price and discount
  const [price, setPrice] = useState(initialPrice);
  const [discount, setDiscount] = useState(0);

  // TODO: This state and the useEffect below should be removed
  const [finalAmount, setFinalAmount] = useState(initialPrice);

  // TODO: This useEffect should be removed
  useEffect(() => {
    // This causes an extra render and is unnecessary
    setFinalAmount(price - discount);
  }, [price, discount]);

  return (
    <Card ref={ref} elevation="raised" className="w-full mb-6 overflow-hidden">
      <div className="bg-blue-600 p-4 text-white">
        <Typography variant="h5" className="text-white font-bold">
          Price Calculator
        </Typography>
        <Typography variant="body2" className="text-blue-100">
          This component has rendered {renderCount} times
        </Typography>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <Typography variant="body2" className="text-gray-500">
              Base Price: ${price.toFixed(2)}
            </Typography>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setPrice(p => p - 10)}
                className="text-sm py-1"
              >
                -$10
              </Button>
              <Button
                variant="outline"
                onClick={() => setPrice(p => p + 10)}
                className="text-sm py-1"
              >
                +$10
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Typography variant="body2" className="text-gray-500">
              Discount: ${discount.toFixed(2)}
            </Typography>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setDiscount(d => Math.max(0, d - 5))}
                className="text-sm py-1"
              >
                -$5
              </Button>
              <Button
                variant="outline"
                onClick={() => setDiscount(d => d + 5)}
                className="text-sm py-1"
              >
                +$5
              </Button>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Typography variant="h6" className="text-blue-800 mb-2">
              Final Amount: ${finalAmount.toFixed(2)}
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
};
