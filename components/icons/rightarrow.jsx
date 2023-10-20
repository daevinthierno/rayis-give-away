function IconRightArrow({ width = 24, height = 24,strokeWidth=1.5, ...props }) {
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
        d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconRightArrow;
