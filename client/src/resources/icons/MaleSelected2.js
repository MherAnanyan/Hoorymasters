import * as React from "react";

function SvgMaleSelected2(props) {
  return (
    <svg width={140} height={140} viewBox="0 0 142 142" {...props}>
      <defs>
        <linearGradient
          x1="3.216%"
          y1="100%"
          x2="96.784%"
          y2="0%"
          id="male-selected-2_svg__c"
        >
          <stop stopColor="#B4EC51" offset="0%" />
          <stop stopColor="#429321" offset="100%" />
        </linearGradient>
        <filter
          x="-35.5%"
          y="-27.5%"
          width="171%"
          height="171%"
          filterUnits="objectBoundingBox"
          id="male-selected-2_svg__a"
        >
          <feMorphology
            radius={1.5}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={8}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={10}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.137254902 0 0 0 0 0.0431372549 0 0 0 0 0.28627451 0 0 0 0.1 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M89.52 89.52c-13.972 13.973-65.068 13.973-79.04 0-13.973-13.972-13.973-65.068 0-79.04 13.972-13.973 65.068-13.973 79.04 0 13.973 13.972 13.973 65.068 0 79.04"
          id="male-selected-2_svg__b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(21 13)">
          <use
            fill="#000"
            filter="url(#male-selected-2_svg__a)"
            xlinkHref="#male-selected-2_svg__b"
          />
          <use
            stroke="#B4EC51"
            strokeWidth={3}
            fill="#FFF"
            xlinkHref="#male-selected-2_svg__b"
          />
        </g>
        <path
          d="M78.663 58.127l.166.007c.387.03.773.17 1.114.43l.129.106c.659.588.899 1.532.577 2.368l-.156.396c-4.79 11.962-16.458 20.412-30.101 20.412l-.45-.003c-13.59-.185-25.156-8.756-29.8-20.784l-.062-.186a2.119 2.119 0 01-.08-.569v-.02l.008-.178c.052-.59.348-1.149.84-1.523l.128-.091c1.131-.742 2.666-.243 3.165 1.047l.149.375c4.177 10.344 14.287 17.643 26.102 17.643l.426-.003c11.78-.175 21.802-7.607 25.83-18.033a2.16 2.16 0 012.015-1.394zM50.589 19a23.212 23.212 0 0113.803 4.578l.321.243c5.536 4.257 9.104 10.941 9.104 18.46v1.172c-.008.229-.24 6.426-3.725 9.123l-.058.331c-1.675 9.27-8.163 17.721-19.369 17.746v.001h-.049v-.001l-.395-.005c-11.148-.224-17.532-8.863-19.054-18.203l.016.11.017.112-.2-.154c-3.472-2.782-3.64-9.066-3.64-9.066V42.28l.004-.433c.137-7.486 3.81-14.107 9.421-18.27l.377-.273A23.21 23.21 0 0150.589 19zM37.594 35.526l-.138.549c-.903 3.499-2.32 7.458-4.52 10.685l.04.677v.611c0 9.737 5.982 20.421 17.664 20.437l.375-.004c11.436-.24 17.29-10.8 17.29-20.433v-.611l-.149-5.468-.01-.034-.009-.034-.64.02c-15.089.413-25.624-4.13-29.903-6.395zM56.41 62.018l.092.006c.444.065.61.595.225.848l-.281.18c-4.858 3.014-9.205 1.094-11.212-.175l-.073-.054c-.324-.285-.11-.805.378-.805h10.871zM41.653 47.106l.16.005a2.343 2.343 0 012.184 2.338l-.005.16a2.343 2.343 0 01-2.339 2.183l-.16-.005a2.343 2.343 0 01.16-4.681zm17.868 0l.15.005c1.132.083 2.026 1.098 2.026 2.338l-.005.16c-.076 1.22-1.019 2.183-2.17 2.183l-.15-.005c-1.132-.082-2.026-1.097-2.026-2.338 0-1.294.974-2.343 2.175-2.343zM39.163 30.74a.863.863 0 00-1.051.245l-.063.092a.86.86 0 00.315 1.19c2.86 1.606 12.585 6.487 25.568 6.755l-.562-.047c-12.492-1.12-21.662-6.582-24.111-8.18z"
          fill="url(#male-selected-2_svg__c)"
          transform="translate(21 13)"
        />
        <path
          d="M93.518 48.234h-4.375c-.973 0-1.76.771-1.76 1.722 0 .952.787 1.724 1.76 1.724h5.292a22.9 22.9 0 00-.917-3.446M90.508 55.124c0 .952.788 1.723 1.76 1.723h2.543v-1.022c0-.82-.052-1.626-.136-2.423H92.27c-.973 0-1.761.77-1.761 1.722"
          fill="#000"
          opacity={0.098}
        />
      </g>
    </svg>
  );
}

export default SvgMaleSelected2;
