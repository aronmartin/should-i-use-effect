import { Card, Typography } from '@should-i-use-effect/ui';

export function ComparisonExplanation() {
  return (
    <Card elevation="flat" className="p-6 mb-6">
      <Typography variant="h4" gutterBottom>
        Callback Pattern vs useEffect with Boolean Hooks
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <Typography variant="h5" gutterBottom>
            Anti-Pattern Issues
          </Typography>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Typography variant="body1">
                <strong>Extra Renders:</strong> Using useEffect to react to boolean changes causes
                additional render cycles
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Indirect Communication:</strong> The hook and component communicate
                indirectly through state
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Unnecessary Complexity:</strong> Requires more code and state management
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Debugging Challenges:</strong> Harder to trace the flow of data and state
                changes
              </Typography>
            </li>
          </ul>
        </div>

        <div>
          <Typography variant="h5" gutterBottom>
            Callback Pattern Benefits
          </Typography>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Typography variant="body1">
                <strong>Fewer Renders:</strong> Direct updates without triggering extra render
                cycles
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Direct Communication:</strong> The hook directly calls the component's
                callback
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Declarative Handling:</strong> More declarative approach to handling state
                changes
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Reusability:</strong> More flexible pattern that can be used in various
                scenarios
              </Typography>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <Typography variant="h5" gutterBottom>
          When to Use This Pattern
        </Typography>
        <Typography variant="body1">Use the callback pattern when:</Typography>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <Typography variant="body1">
              A hook returns a value that components need to react to
            </Typography>
          </li>
          <li>
            <Typography variant="body1">You want to avoid unnecessary renders</Typography>
          </li>
          <li>
            <Typography variant="body1">
              You need more direct communication between hooks and components
            </Typography>
          </li>
        </ul>
      </div>
    </Card>
  );
}
