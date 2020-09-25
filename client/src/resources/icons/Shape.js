import * as React from "react";

function SvgShape(props) {
  return (
    <svg width={16} height={16} {...props}>
      <path
        d="M8.005 0A7.994 7.994 0 00.889 4.363a.667.667 0 101.186.607 6.652 6.652 0 015.93-3.637A6.655 6.655 0 0114.667 8a6.655 6.655 0 01-6.662 6.667 6.652 6.652 0 01-5.93-3.637.666.666 0 10-1.186.607A7.994 7.994 0 008.005 16C12.412 16 16 12.41 16 8s-3.588-8-7.995-8zm-.673 4.66a.666.666 0 00-.465 1.145l1.528 1.528H.675a.666.666 0 100 1.334h7.72l-1.528 1.528a.667.667 0 10.943.943l2.606-2.608a.667.667 0 00-.001-1.061L7.81 4.862a.666.666 0 00-.478-.202z"
        fill="#777"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgShape;
