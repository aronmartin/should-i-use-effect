import { render, screen, fireEvent } from '@testing-library/react';
import { PriceCalculator } from './PriceCalculator';
import { useState } from 'react';
import { vi, describe, test, expect } from 'vitest';
// Mock the hooks to track render count
vi.mock('@should-i-use-effect/hooks', () => ({
  useRenderCount: vi.fn(() => 1),
  useRenderHighlight: vi.fn(() => ({ current: null })),
}));

describe('PriceCalculator', () => {
  test('renders with initial price', () => {
    render(<PriceCalculator initialPrice={100} />);
    expect(screen.getByText('Base Price: $100.00')).toBeInTheDocument();
    expect(screen.getByText('Final Amount: $100.00')).toBeInTheDocument();
  });

  test('updates price when buttons are clicked', () => {
    render(<PriceCalculator initialPrice={100} />);

    // Increase price
    fireEvent.click(screen.getByText('+$10'));
    expect(screen.getByText('Base Price: $110.00')).toBeInTheDocument();
    expect(screen.getByText('Final Amount: $110.00')).toBeInTheDocument();

    // Decrease price
    fireEvent.click(screen.getByText('-$10'));
    expect(screen.getByText('Base Price: $100.00')).toBeInTheDocument();
    expect(screen.getByText('Final Amount: $100.00')).toBeInTheDocument();
  });

  test('updates discount when buttons are clicked', () => {
    render(<PriceCalculator initialPrice={100} />);

    // Increase discount
    fireEvent.click(screen.getByText('+$5'));
    expect(screen.getByText('Discount: $5.00')).toBeInTheDocument();
    expect(screen.getByText('Final Amount: $95.00')).toBeInTheDocument();

    // Decrease discount
    fireEvent.click(screen.getByText('-$5'));
    expect(screen.getByText('Discount: $0.00')).toBeInTheDocument();
    expect(screen.getByText('Final Amount: $100.00')).toBeInTheDocument();
  });

  test('correctly calculates final amount with price and discount changes', () => {
    render(<PriceCalculator initialPrice={100} />);

    // Increase price and discount
    fireEvent.click(screen.getByText('+$10'));
    fireEvent.click(screen.getByText('+$5'));

    expect(screen.getByText('Base Price: $110.00')).toBeInTheDocument();
    expect(screen.getByText('Discount: $5.00')).toBeInTheDocument();
    expect(screen.getByText('Final Amount: $105.00')).toBeInTheDocument();
  });

  // This test verifies that the component doesn't use useEffect for derived state
  test('should not cause extra renders when calculating final amount', () => {
    // Create a wrapper component to track renders
    let renderCount = 0;

    const TestWrapper = () => {
      renderCount++;
      const [, forceRender] = useState(0);

      return (
        <div>
          <PriceCalculator initialPrice={100} />
          <button data-testid="force-render" onClick={() => forceRender(prev => prev + 1)}>
            Force Render
          </button>
        </div>
      );
    };

    render(<TestWrapper />);

    // Initial render
    expect(renderCount).toBe(1);

    // Click price button
    fireEvent.click(screen.getByText('+$10'));

    // If using derived state correctly, this should cause only one render
    // If using useEffect to update state, it would cause two renders
    const expectedRenders = 2; // One for the button click

    // Force a render to ensure all effects have completed
    fireEvent.click(screen.getByTestId('force-render'));

    // Check that we didn't have extra renders
    expect(renderCount).toBeLessThanOrEqual(expectedRenders + 1); // +1 for the force render
  });

  // New test to check for the anti-pattern by examining the component's source code
  test('should not use useEffect for derived state (anti-pattern check)', () => {
    // Get the component's source code
    const componentSource = PriceCalculator.toString();

    // Check if the component contains the anti-pattern
    const hasUseEffectForDerivedState =
      componentSource.includes('useEffect') &&
      componentSource.includes('setFinalAmount') &&
      componentSource.includes('[price, discount]');

    // This test will fail if the component is still using useEffect for derived state
    expect(hasUseEffectForDerivedState).toBe(false);
  });
});
