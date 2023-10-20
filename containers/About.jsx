"use client";
import styles from "@/styles";
import Image from "next/image";
import Button from "../components/button";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "@/utils/motion";

const About = () => {
  return (
    <section className={`${styles.topPaddings}`} id="about" aria-label="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} flex justify-between items-center flex-1 flex-col-reverse lg:flex-row`}
      >
        <div className="flex flex-col mt-8 lg:mt-0">
          <motion.h2 variants={textVariant(0.3)} className=" text-white mb-2">
            Service with 30+ years <br /> of experience
          </motion.h2>
          <motion.p
            variants={textVariant(0.4)}
            className="text-dimWhite max-w-[500px] mb-4"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`${styles.flexStart} mt-4`}
          >
            <Button>Buy Ticket</Button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className={`${styles.flexStart}`}
        >
          <Image src="/about.png" alt="About Us" width={500} height={500} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
