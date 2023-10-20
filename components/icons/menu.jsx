function IconMenu({ width = 24, height = 24, ...props }) {
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
        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconMenu;
