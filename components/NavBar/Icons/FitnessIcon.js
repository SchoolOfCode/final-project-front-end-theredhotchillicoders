import * as React from "react";

export default function FitnessIcon(props) {
  return (
    <svg
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      style={{ enableBackground: "new 0 0 32 32" }}
      xmlSpace="preserve"
      stroke={props.fill}
      width={props.width}
      height={props.height}
      fill={"none"}
    >
      <path
        className="st0"
        d="M7,24L7,24c-1.1,0-2-0.9-2-2V10c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v12C9,23.1,8.1,24,7,24z"
      />
      <path
        className="st0"
        d="M3,21L3,21c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v6C5,20.1,4.1,21,3,21z"
      />
      <path
        className="st0"
        d="M25,8L25,8c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2h0c-1.1,0-2-0.9-2-2V10C23,8.9,23.9,8,25,8z"
      />
      <path
        className="st0"
        d="M29,11L29,11c1.1,0,2,0.9,2,2v6c0,1.1-0.9,2-2,2h0c-1.1,0-2-0.9-2-2v-6C27,11.9,27.9,11,29,11z"
      />
      <line className="st0" x1="9" y1="16" x2="23" y2="16" />
    </svg>
  );
}
