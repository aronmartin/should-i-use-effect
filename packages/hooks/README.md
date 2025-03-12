# @should-i-use-effect/hooks

A collection of useful React hooks for the "Should I Use Effect" project.

## Available Hooks

### useRenderCount

A hook that counts the number of times a component has rendered.

```tsx
import { useRenderCount } from '@should-i-use-effect/hooks';

function MyComponent() {
  const renderCount = useRenderCount('MyComponent', true);
  
  return (
    <div>This component has rendered {renderCount} times</div>
  );
}
```

#### Parameters

- `componentName` (optional): A string name for the component to identify in debug logs
- `enableLogging` (optional, default: false): Whether to log render counts to the console

#### Returns

- `number`: The current render count

### useRenderHighlight

A hook that highlights an element with a CSS class whenever it re-renders. This provides a visual indicator of component re-renders.

```tsx
import { useRenderHighlight } from '@should-i-use-effect/hooks';

function MyComponent() {
  const ref = useRenderHighlight<HTMLDivElement>({ 
    componentName: 'MyComponent',
    enableLogging: true 
  });
  
  return (
    <div ref={ref}>
      This element will be highlighted when it re-renders
    </div>
  );
}
```

#### Parameters

- `options` (optional): Configuration options for the highlight effect
  - `duration` (optional, default: 500): Duration of the highlight effect in milliseconds
  - `highlightClass` (optional, default: 'render-highlight'): CSS class to apply for highlighting
  - `enableLogging` (optional, default: false): Whether to log render counts to the console
  - `componentName` (optional): Name of the component for logging purposes

#### Returns

- `RefObject`: A ref object to attach to the element you want to highlight

#### CSS

The hook includes a default CSS class that adds a red outline to the element. You can override this by providing your own CSS class.

```css
.render-highlight {
  outline: 2px solid red !important;
  outline-offset: 1px !important;
  transition: outline 250ms ease-in-out !important;
}
```

## Usage

```bash
# Install the package
npm install @should-i-use-effect/hooks

# or with yarn
yarn add @should-i-use-effect/hooks
``` 