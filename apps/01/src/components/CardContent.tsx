import { useRenderHighlight } from '@should-i-use-effect/hooks';
import { Typography } from '@should-i-use-effect/ui';

export function CardContent({ count, renderCount }: { count: number; renderCount: number }) {
  const ref = useRenderHighlight<HTMLDivElement>({ componentName: 'CardContent' });
  return (
    <div ref={ref} className="grid grid-cols-2 w-full gap-4 mb-4">
      <div className="bg-gray-50 rounded-lg p-4 text-center shadow-sm">
        <Typography variant="body2" className="text-gray-500 mb-1">
          Count (state)
        </Typography>
        <Typography variant="h4" className="text-indigo-600 font-bold">
          {count}
        </Typography>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 text-center shadow-sm">
        <Typography variant="body2" className="text-gray-500 mb-1">
          Amount of renders
        </Typography>
        <Typography variant="h4" className="text-indigo-600 font-bold">
          {renderCount}
        </Typography>
      </div>
    </div>
  );
}
