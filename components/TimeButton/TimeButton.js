import React from "react";
import Link from "next/link";

function TimeButton({ time, onClick }) {
  return (
    <Link href="/">
      <a>
        <button onClick={onClick}>{time}</button>
      </a>
    </Link>
  );
}

export default TimeButton;

// Might not need this link to take you back to the home page?
