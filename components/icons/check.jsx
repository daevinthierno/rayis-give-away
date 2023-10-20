function IconCheck({ width = 24, height = 24, ...props }) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
  );
}

export default IconCheck;
