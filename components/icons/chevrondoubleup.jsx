const ChevronDoubleUp = ({ width = 24, height = 24, ...props }) => {
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
        d="M4.5 12.75L12 5.25L19.5 12.75M4.5 18.75L12 11.25L19.5 18.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDoubleUp;
