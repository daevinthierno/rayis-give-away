"use client";
import styles from "@/styles";
import Image from "next/image";
import { sponsorsData } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
const Sponsors = () => {
  return (
    <section
      className={`${styles.topPaddings}`}
      id="sponsors"
      aria-label="sponsors"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} flex justify-center flex-1 flex-col  space-y-6 md:space-y-12`}
      >
        <h2 className="text-white text-center">Sponsors</h2>
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className={`${styles.flexCenter} flex-1 flex-row flex-wrap`}
        >
          {sponsorsData.map((sponsor, index) => (
            <div key={sponsor.id} className="w-1/3 lg:w-1/4 px-3 py-3 lg:py-6 ">
              <Image
                src={sponsor.imgUrl}
                alt={sponsor.title}
                width="200"
                height="45"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sponsors;
