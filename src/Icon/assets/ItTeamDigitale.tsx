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
        <title id={titleId}>{'Logo Team Digitale'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M23.648 24H.352A.353.353 0 0 1 0 23.648V.352C0 .158.158 0 .352 0h23.296c.194 0 .352.158.352.352v23.296a.353.353 0 0 1-.352.352ZM5.814 11.792a1.596 1.596 0 1 0 0-3.192 1.596 1.596 0 0 0 0 3.192ZM10 18.994V19h4.418C19.13 19 20 16.685 20 12.253 20 7.93 18.995 6 14.418 6H10v12.994Zm4.418-10.702c2.586 0 2.838 1.11 2.838 3.955 0 2.89-.252 4.455-2.838 4.455h-1.756v-8.41h1.756Z' />
    </svg>
  );
};
