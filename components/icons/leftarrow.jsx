function IconLeftArrow({ width = 24, height = 24, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconLeftArrow;
