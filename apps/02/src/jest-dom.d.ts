// Type definitions for Jest DOM
import '@testing-library/jest-dom';

declare global {
  namespace Vi {
    interface JestMatchers<T> {
      toBeInTheDocument(): T;
      toBeVisible(): T;
      toHaveTextContent(text: string | RegExp): T;
      toHaveValue(value: string | RegExp): T;
      toBeChecked(): T;
    }
  }
}
