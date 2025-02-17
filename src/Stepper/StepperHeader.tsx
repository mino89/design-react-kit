import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface StepperHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente StepperHeader */
  className?: string;
  testId?: string;
}

export const StepperHeader: FC<StepperHeaderProps> = ({
  tag = 'ul',
  testId,
  className,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClass = classNames('steppers-header', className);
  return <Tag {...attributes} className={wrapperClass} data-testid={testId} />;
};
