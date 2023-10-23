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
          Découvrez le Futur de la Technologie
          </motion.h2>
          <motion.p
            variants={textVariant(0.4)}
            className="text-dimWhite max-w-[500px] mb-4"
          >
            Explorez notre collection d'articles technologiques rédigés par des experts. Que vous soyez intéressé par l'intelligence artificielle, le développement web, la cybersécurité ou d'autres sujets liés à la tech, nous avons les informations dont vous avez besoin pour rester en avance sur le jeu.
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
