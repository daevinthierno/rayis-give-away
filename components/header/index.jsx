"use client";
import { useState, useEffect } from "react";
import styles from "@/styles";
import Link from "next/link";
import Button from "../button";
import { navLinks } from "@/constants";
import { IconLogo, IconMenu, IconClose } from "../icons";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isVisable, setIsVisable] = useState(false);
  const toggleVisibility = () => {
    window.pageYOffset > 200 ? setIsVisable(true) : setIsVisable(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={` ${styles.flexCenter} ${
        isVisable
          ? "bg-tertiary sticky top-0 shadow-lg shadow-secondary-900"
          : "relative"
      } z-20`}
    >
      <nav
        aria-label="Site Menu"
        className={` ${styles.innerWidth} ${styles.flexCenter} flex-1 py-6`}
      >
        <div>
          <Link href="/" aria-label="Asalhaevent logo">
            <IconLogo width={150} height={45} alt="header logo" />
          </Link>
        </div>
        <div className="flex flex-1 items-center">
          <ul
            className={`${
              toggle ? "flex" : "hidden"
            } lg:flex justify-end items-center flex-1 lg:flex-row lg:gap-12 lg:mr-12  flex-col max-lg:absolute max-lg:inset-x-0 max-lg:top-24 max-lg:shadow-sm max-lg:shadow-secondary-500 max-lg:items-start max-lg:bg-tertiary`}
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                onClick={() => {
                  setToggle(false);
                }}
                className={`text-white text-base max-lg:block max-lg:w-full lg:px-0 lg:py-0 px-6 py-3 lg:hover:border-b-2 lg:hover:border-primary-500 max-lg:hover:bg-primary-500`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div
            className={`${styles.flexEnd} max-lg:flex-1 max-lg:flex-row gap-5`}
          >
            <Button type="button">Buy Ticket</Button>
            {toggle ? (
              <IconClose
                aria-label="Close"
                width={28}
                height={28}
                className="text-white cursor-pointer lg:hidden block mr-2"
                onClick={() => setToggle(false)}
              />
            ) : (
              <IconMenu
                aria-label="Menu"
                width={28}
                height={28}
                className="text-white cursor-pointer lg:hidden block mr-2"
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
export default Header;
