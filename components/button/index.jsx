const Button = ({ type, children, ...props }) => {
  return (
    <button
      className="group/button relative text-white text-base py-2 px-4 bg-primary-500 rounded-md capitalize hover:active:focus:outline-none"
      type={type}
      {...props}
    >
      <div className="absolute inset-0 w-0 rounded-md border-0 group-hover/button:border border-primary-500 bg-tertiary transition-all duration-[250ms] ease-out group-hover/button:w-full"></div>
      <div className="relative text-white group-hover/button:text-white">
        {children}
      </div>
    </button>
  );
};

export default Button;
