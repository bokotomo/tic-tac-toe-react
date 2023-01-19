import React from 'react';

interface Props {
  /** スタイル */
  readonly style?: React.CSSProperties;
  /** 色 */
  readonly color?: string;
}

/**
 * Circle
 */
const Circle: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={p.style}
      fill={p.color}
    >
      {/* Font Awesome Pro 6.2.1 by
    @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial
    License) Copyright 2022 Fonticons, Inc. */}
      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
    </svg>
  );
};

export default Circle;
