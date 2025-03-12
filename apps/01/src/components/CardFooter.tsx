import { Typography } from '@should-i-use-effect/ui';
import { useRenderHighlight } from '@should-i-use-effect/hooks';

export function CardFooter() {
  const ref = useRenderHighlight<HTMLDivElement>({ componentName: 'CardFooter' });
  return (
    <div ref={ref} className="w-full mt-4 pt-4 border-t border-gray-100">
      <Typography variant="caption" align="center" className="text-gray-500">
        Watch the card outline flash red when the component re-renders
      </Typography>
    </div>
  );
}
