"use client";
import { useEffect, useState } from "react";
import { ChevronDoubleUp } from "../icons";
const ScrollTop = () => {
  const [isVisable, setIsVisable] = useState(false);
  const toggleVisibility = () => {
    window.pageYOffset > 300 ? setIsVisable(true) : setIsVisable(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button
        type="button"
        className={`${
          isVisable ? "opacity-100" : "opacity-0"
        } inline-flex items-center p-3 rounded-[10px] shadow-sm text-white bg-primary-500 transition-opacity hover:bg-primary-600 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-primary-100`}
        onClick={scrollToTop}
        aria-label="scrollToTop"
      >
        <ChevronDoubleUp width={24} height={24} className="text-white" />
      </button>
    </div>
  );
};

export default ScrollTop;
