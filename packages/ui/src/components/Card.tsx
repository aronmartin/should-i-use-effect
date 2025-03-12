import React, { HTMLAttributes, forwardRef } from 'react';
import { useRenderHighlight } from '@should-i-use-effect/hooks';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 'flat' | 'raised' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, elevation = 'flat', padding = 'medium', className = '', ...props }, ref) => {
    const highlightRef = useRenderHighlight({ componentName: 'Card' });
    const combinedRef = ref || highlightRef;

    const elevationStyles = {
      flat: 'border border-gray-200',
      raised: 'border border-gray-200 shadow-md',
      elevated: 'border border-gray-200 shadow-xl',
    };

    const paddingStyles = {
      none: 'p-0',
      small: 'p-2',
      medium: 'p-4',
      large: 'p-6',
    };

    const cardClasses = `bg-white rounded-lg ${elevationStyles[elevation]} ${paddingStyles[padding]} ${className}`;

    return (
      <div ref={combinedRef} className={cardClasses} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
