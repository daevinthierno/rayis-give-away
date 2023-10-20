"use client";
import styles from "@/styles";
import { motion } from "framer-motion";
import { infoData } from "@/constants";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { imgHoverVariants } from "@/utils/motion";
import { IconCalendar, IconPin, IconPhone } from "@/components/icons";
const Info = () => {
  return (
    <section className={`${styles.topPaddings}`} id="info" aria-label="info">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} flex justify-center flex-1 flex-col  space-y-6 md:space-y-12`}
      >
        <div
          className={`${styles.flexCenter} flex-1 lg:flex-row flex-col items-stretch  space-y-8 lg:space-x-8 lg:space-y-0`}
        >
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 1)}
            className={`${styles.flexCenter} flex-1 flex-col space-y-6 py-8 border border-secondary-500 rounded-[20px] hover:bg-secondary-500`}
          >
            <motion.div
              whileHover="hover"
              variants={imgHoverVariants}
              className=" bg-primary-500 rounded-full p-2"
            >
              <IconCalendar
                alt="calendar"
                width="32"
                height="32"
                className=" text-white"
              />
            </motion.div>
            <h5 className="text-white">{infoData.calendar}</h5>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "spring", 0.6, 1)}
            className={`${styles.flexCenter} flex-1 flex-col space-y-6 py-8 border border-secondary-500 rounded-[20px] hover:bg-secondary-500`}
          >
            <motion.div
              whileHover="hover"
              variants={imgHoverVariants}
              className=" bg-primary-500 rounded-full p-2"
            >
              <IconPin
                alt="calendar"
                width="32"
                height="32"
                className=" text-white"
              />
            </motion.div>
            <h5 className="text-white">{infoData.address}</h5>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "spring", 0.9, 1)}
            className={`${styles.flexCenter} flex-1 flex-col space-y-6 py-8 border border-secondary-500 rounded-[20px] hover:bg-secondary-500`}
          >
            <motion.div
              whileHover="hover"
              variants={imgHoverVariants}
              className=" bg-primary-500 rounded-full p-2"
            >
              <IconPhone
                alt="calendar"
                width="32"
                height="32"
                className=" text-white"
              />
            </motion.div>
            <h5 className="text-white">{infoData.phone}</h5>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Info;
