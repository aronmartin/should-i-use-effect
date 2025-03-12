import React, { useState, useEffect } from 'react';
import { Typography } from './Typography';
import { useRenderHighlight } from '@should-i-use-effect/hooks';

export interface HighlightToggleProps {
  /** Initial state of the toggle */
  defaultEnabled?: boolean;
  /** Label for the toggle when enabled */
  enabledLabel?: string;
  /** Label for the toggle when disabled */
  disabledLabel?: string;
  /** Class name to add to the body element */
  bodyClassName?: string;
  /** Additional class name for the container */
  className?: string;
}

/**
 * A toggle component that enables/disables render highlights globally by adding/removing
 * a class on the body element.
 */
export const HighlightToggle: React.FC<HighlightToggleProps> = ({
  defaultEnabled = false,
  enabledLabel = 'Highlight Enabled',
  disabledLabel = 'Highlight Disabled',
  bodyClassName = 'with-highlights',
  className = '',
}) => {
  const [enabled, setEnabled] = useState(defaultEnabled);
  const ref = useRenderHighlight<HTMLDivElement>({ componentName: 'HighlightToggle' });

  // Toggle the class on the body element
  useEffect(() => {
    if (enabled) {
      document.body.classList.add(bodyClassName);
    } else {
      document.body.classList.remove(bodyClassName);
    }

    // Clean up when component unmounts
    return () => {
      document.body.classList.remove(bodyClassName);
    };
  }, [enabled, bodyClassName]);

  return (
    <div
      ref={ref}
      className={`bg-white p-4 rounded-lg shadow-md flex items-center gap-3 ${className}`}
    >
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-700">
          <Typography variant="body2">{enabled ? enabledLabel : disabledLabel}</Typography>
        </span>
      </label>
    </div>
  );
};
