import { useRenderHighlight } from '@should-i-use-effect/hooks';
import React, { HTMLAttributes } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption';
export type TypographyAlign = 'left' | 'center' | 'right';
export type TypographyWeight = 'normal' | 'medium' | 'bold';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  weight?: TypographyWeight;
  color?: string;
  gutterBottom?: boolean;
  component?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  align = 'left',
  weight = 'normal',
  color,
  gutterBottom = false,
  component,
  className = '',
  ...props
}) => {
  const ref = useRenderHighlight<HTMLButtonElement>({ componentName: 'Button' });

  const variantMapping: Record<TypographyVariant, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
  };

  const variantStyles: Record<TypographyVariant, string> = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    body1: 'text-base',
    body2: 'text-sm',
    caption: 'text-xs',
  };

  const alignStyles: Record<TypographyAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const weightStyles: Record<TypographyWeight, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  const colorStyle = color ? `text-${color}` : '';
  const marginStyle = gutterBottom ? 'mb-2' : '';

  const Component = component || variantMapping[variant];

  const typographyClasses = `${variantStyles[variant]} ${alignStyles[align]} ${weightStyles[weight]} ${colorStyle} ${marginStyle} ${className}`;

  return (
    <Component ref={ref} className={typographyClasses} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
