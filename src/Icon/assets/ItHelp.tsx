import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Help'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12.8 22h-1.4v-2.1h1.4Zm-.1-4.9h-1.2a9.7 9.7 0 0 1-.1-1.7 2.7 2.7 0 0 1 .3-1.2 5.6 5.6 0 0 1 .7-1.3l2.3-2.1a9.6 9.6 0 0 0 1.8-2.1 4.5 4.5 0 0 0 .5-2.3 3 3 0 0 0-1.1-2.6 6.2 6.2 0 0 0-3.4-.7 22.9 22.9 0 0 0-3.6.5l-1 .3-.2-1.2h.1a18.1 18.1 0 0 1 4.7-.8 7.4 7.4 0 0 1 4.3 1 4.2 4.2 0 0 1 1.4 3.5 5 5 0 0 1-.5 2.7 8.6 8.6 0 0 1-1.9 2.2 19.7 19.7 0 0 0-1.8 1.6 6.2 6.2 0 0 0-.9 1.2 2.3 2.3 0 0 0-.4 1.4Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
