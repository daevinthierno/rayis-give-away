"use client";
import { useState } from "react";
import styles from "@/styles";
import { IconPlusCircle, IconMinusCircle } from "../icons";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
export const Collapse = ({ collapseData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {collapseData.map((collapse, index) => (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          key={collapse.id}
          className="w-full border rounded shadow-sm"
        >
          <motion.div
            variants={fadeIn("up", "tween", index * 0.1, 1)}
            aria-label="Open item"
            title="Open item"
            className={`flex flex-1 items-center justify-between w-full px-8 py-4 bg-secondary-500 cursor-pointer focus:outline-none rounded-t-[20px] ${
              isOpen == collapse.id ? "rounded-b-0" : "rounded-b-[20px]"
            }`}
            onClick={(e) => {
              e.preventDefault;
              isOpen == collapse.id ? setIsOpen(-1) : setIsOpen(collapse.id);
            }}
          >
            <h6 className="text-white flex flex-1">{collapse.title}</h6>
            {isOpen == collapse.id ? (
              <IconMinusCircle
                width={32}
                height={32}
                className="text-primary-500"
              />
            ) : (
              <IconPlusCircle
                width={32}
                height={32}
                className="text-primary-500"
              />
            )}
          </motion.div>
          <AnimatePresence>
            {isOpen == collapse.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-8 py-4 border border-secondary-500 rounded-b-[20px]"
              >
                <p className="text-white">{collapse.children}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </>
  );
};

export default Collapse;
