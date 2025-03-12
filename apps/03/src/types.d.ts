// Type declarations for testing libraries
declare module '@testing-library/react';
declare module '@testing-library/jest-dom';
declare module 'vitest';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
