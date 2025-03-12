import { useRenderHighlight } from '@should-i-use-effect/hooks';
import { Typography } from '@should-i-use-effect/ui';

export function CardHead() {
  const ref = useRenderHighlight<HTMLDivElement>({ componentName: 'CardHard' });
  return (
    <div ref={ref} className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
      <Typography variant="h2" align="center" gutterBottom className="text-white font-bold">
        Why React Re-renders?
      </Typography>

      <Typography variant="body2" align="center" className="text-blue-100 mt-2">
        A React component re-renders after a state setter from useState or useReducer is called
        inside the component or in one of its parents
      </Typography>
    </div>
  );
}
