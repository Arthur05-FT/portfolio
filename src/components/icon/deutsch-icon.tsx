import { JSX, SVGProps } from "react";

export const FlagGermany = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      fill="#FFCD05"
      d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
    ></path>
    <path fill="#ED1F24" d="M0 14h36v9H0z"></path>
    <path fill="#141414" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z"></path>
  </svg>
);
