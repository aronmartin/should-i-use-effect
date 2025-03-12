// Add Jest DOM matchers to Vitest
import '@testing-library/jest-dom';

// Mock navigator.onLine for testing
Object.defineProperty(navigator, 'onLine', {
  writable: true,
  value: true,
});
