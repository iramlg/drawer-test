import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const CloseIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M1.10077 1.10077C1.39367 0.80788 1.86854 0.80788 2.16143 1.10077L5.99997 4.93931L9.83851 1.10077C10.1314 0.80788 10.6063 0.80788 10.8992 1.10077C11.1921 1.39367 11.1921 1.86854 10.8992 2.16143L7.06063 5.99997L10.8992 9.83851C11.1921 10.1314 11.1921 10.6063 10.8992 10.8992C10.6063 11.1921 10.1314 11.1921 9.83851 10.8992L5.99997 7.06063L2.16143 10.8992C1.86854 11.1921 1.39367 11.1921 1.10077 10.8992C0.80788 10.6063 0.80788 10.1314 1.10077 9.83851L4.93931 5.99997L1.10077 2.16143C0.80788 1.86854 0.80788 1.39367 1.10077 1.10077Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const PlusIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M6 0.25C6.41421 0.25 6.75 0.585786 6.75 1V5.25H11C11.4142 5.25 11.75 5.58579 11.75 6C11.75 6.41421 11.4142 6.75 11 6.75H6.75V11C6.75 11.4142 6.41421 11.75 6 11.75C5.58579 11.75 5.25 11.4142 5.25 11V6.75H1C0.585786 6.75 0.25 6.41421 0.25 6C0.25 5.58579 0.585786 5.25 1 5.25H5.25V1C5.25 0.585786 5.58579 0.25 6 0.25Z"
      fill="currentColor"
    />
  </svg>
);

export const SysIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M2.99998 2.25C2.49372 2.25 2.08331 2.66041 2.08331 3.16667V14.8333C2.08331 15.2475 1.74753 15.5833 1.33331 15.5833C0.919099 15.5833 0.583313 15.2475 0.583313 14.8333V3.16667C0.583313 1.83198 1.66529 0.75 2.99998 0.75H14.1666C14.857 0.75 15.4166 1.30964 15.4166 2V12.9286C15.4166 13.3428 15.0809 13.6786 14.6666 13.6786C14.2524 13.6786 13.9166 13.3428 13.9166 12.9286V2.25H2.99998Z"
      fill="#0D0D0D"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M2.24998 13.1667C2.24998 12.7525 2.58577 12.4167 2.99998 12.4167H14.6666C15.0809 12.4167 15.4166 12.7525 15.4166 13.1667C15.4166 13.5809 15.0809 13.9167 14.6666 13.9167H2.99998C2.58577 13.9167 2.24998 13.5809 2.24998 13.1667Z"
      fill="#0D0D0D"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M2.24998 16.5C2.24998 16.0858 2.58577 15.75 2.99998 15.75H14.6666C15.0809 15.75 15.4166 16.0858 15.4166 16.5C15.4166 16.9142 15.0809 17.25 14.6666 17.25H2.99998C2.58577 17.25 2.24998 16.9142 2.24998 16.5Z"
      fill="#0D0D0D"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M3.74998 13.1667C3.74998 12.7525 3.41419 12.4167 2.99998 12.4167C1.66529 12.4167 0.583313 13.4986 0.583313 14.8333C0.583313 16.168 1.66529 17.25 2.99998 17.25C3.41419 17.25 3.74998 16.9142 3.74998 16.5C3.74998 16.0858 3.41419 15.75 2.99998 15.75C2.49372 15.75 2.08331 15.3396 2.08331 14.8333C2.08331 14.3271 2.49372 13.9167 2.99998 13.9167C3.41419 13.9167 3.74998 13.5809 3.74998 13.1667Z"
      fill="#0D0D0D"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M4.74998 4.83333C4.74998 4.41912 5.08577 4.08333 5.49998 4.08333H10.5C10.9142 4.08333 11.25 4.41912 11.25 4.83333C11.25 5.24755 10.9142 5.58333 10.5 5.58333H5.49998C5.08577 5.58333 4.74998 5.24755 4.74998 4.83333Z"
      fill="#0D0D0D"
      fillRule="evenodd"
    />
  </svg>
);

export const BackIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M6.53033 0.46967C6.82322 0.762563 6.82322 1.23744 6.53033 1.53033L2.81066 5.25H11.4167C11.8309 5.25 12.1667 5.58579 12.1667 6C12.1667 6.41421 11.8309 6.75 11.4167 6.75H2.81066L6.53033 10.4697C6.82322 10.7626 6.82322 11.2374 6.53033 11.5303C6.23744 11.8232 5.76256 11.8232 5.46967 11.5303L0.46967 6.53033C0.176777 6.23744 0.176777 5.76256 0.46967 5.46967L5.46967 0.46967C5.76256 0.176777 6.23744 0.176777 6.53033 0.46967Z"
      fill="currentColor"
    />
  </svg>
);

export const GitCommitIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 48 48"
    width={size || width}
    {...props}
  >
    <path
      d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
      stroke="#0D0D0D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.6"
    />
    <path
      d="M18 24H6"
      stroke="#0D0D0D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.6"
    />
    <path
      d="M30 24L42 24"
      stroke="#0D0D0D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.6"
    />
  </svg>
);

export const MockTagIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 16 16"
    width={size || width}
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
      fill="#0D0D0D"
    />
    <path
      d="M3.07986 12L4.55586 3.6H6.27186L8.01186 9.024L11.6239 3.6H13.3399L11.8519 12H10.4119L11.4679 6.072L8.25186 10.824H7.12386L5.56386 6.084L4.51986 12H3.07986Z"
      fill="white"
    />
  </svg>
);
