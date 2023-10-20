"use client";
import styles from "@/styles";
import UserCard from "@/components/usercard";
import { speakersData } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
const Speakers = () => {
  return (
    <section
      className={`${styles.topPaddings}`}
      id="speakers"
      aria-label="speakers"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} flex-1 flex-col  space-y-6 md:space-y-12`}
      >
        <h2 className="text-white text-center">Speakers</h2>
        <div className={`${styles.flexCenter} flex-1 flex-wrap`}>
          {speakersData.map((speaker, index) => (
            <UserCard key={speaker.id} {...speaker} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Speakers;
