"use client";
import styles from "@/styles";
import Link from "next/link";
import { socialMediaLinks } from "@/constants";
import {
  IconLogo,
  IconFacebook,
  IconTwitter,
  IconLinkedin,
  IconInstagram,
} from "../icons";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.topMargins}`}
    >
      <div className="relative bg-secondary-500">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 z-0 text-secondary-500"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-10">
          <Link
            href="/"
            aria-label="Asalhaevent logo"
            className="flex justify-center items-center pb-6 lg:hidden"
          >
            <IconLogo width={150} height={40} className="text-white" />
          </Link>
          <div className="flex flex-col lg:flex-row items-center justify-between py-6 space-y-4 lg:space-y-5 border-t border-white">
            <Link href="/" aria-label="Asalhaevent logo" className="">
              <IconLogo
                width={150}
                height={40}
                className="text-white hidden lg:block"
              />
            </Link>
            <p className="text-sm text-white">
              Copyright © {new Date().getFullYear()} <a  href="/" /*href="http://azebthemes.com/"*/ className="hover:border-b">AzebThemes</a>. All rights
              reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a href="/" /*href={socialMediaLinks.twitter}*/ aria-label="twitter">
                <IconTwitter
                  width={24}
                  height={24}
                  className="transition-colors duration-300 text-white hover:text-primary-500"
                />
              </a>
              <a href="/" /*href={socialMediaLinks.linkedin}*/  aria-label="linkedin">
                <IconLinkedin
                  width={24}
                  height={24}
                  className="transition-colors duration-300 text-white hover:text-primary-500"
                />
              </a>
              <a href="/" /*href={socialMediaLinks.instagram}*/  aria-label="instagram">
                <IconInstagram
                  width={24}
                  height={24}
                  className="transition-colors duration-300 text-white hover:text-primary-500"
                />
              </a>
              <a href="/" /*href={socialMediaLinks.facebook}*/  aria-label="facebook">
                <IconFacebook
                  width={24}
                  height={24}
                  className="transition-colors duration-300 text-white hover:text-primary-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
