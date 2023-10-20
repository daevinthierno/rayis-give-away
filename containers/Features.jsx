"use client";
import styles from "@/styles";
import Image from "next/image";
import { featuresData } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, imgHoverVariants } from "@/utils/motion";
const Features = () => {
  return (
    <section
      className={`${styles.topPaddings}`}
      id="why-join"
      aria-label="why-join"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} flex-1 flex-col lg:flex-row  lg:space-x-2 xl:space-x-16`}
      >
        <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
          <Image
            src="/features.jpg"
            width={500}
            height={500}
            alt="Why you should Join Event"
            className="rounded-[30px]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="flex justify-start flex-1 flex-col space-y-5 mt-8"
        >
          <h2 className="text-white lg:max-w-[600px]">
            Why you should Join Event
          </h2>
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="flex px-4 py-2 space-x-4 rounded-[20px] cursor-default hover:bg-secondary-500 lg:max-w-[500px]"
            >
              <motion.div
                whileHover="hover"
                variants={imgHoverVariants}
                className={`${styles.flexCenter}`}
              >
                <Image
                  src={feature.imgUrl}
                  alt={feature.title}
                  width="64"
                  height="64"
                />
              </motion.div>
              <div className="flex flex-col space-y-2 lg:max-w-[380px]">
                <h5 className=" text-white">{feature.title}</h5>
                <p className="text-dimWhite">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
