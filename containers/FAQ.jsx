"use client";
import styles from "@/styles";
import Collapse from "@/components/collapse";
import { faqData } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
const FAQ = () => {
  return (
    <section className={`${styles.topPaddings}`} id="faq" aria-label="faq">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} flex justify-center flex-1 flex-col  space-y-6 md:space-y-12`}
      >
        <div className="space-y-2">
          <h2 className="text-white text-center">Frequently Asked Questions</h2>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur. Sodales integer massa cursus
            lectus viverra at magna tempus.
          </p>
        </div>
        <div className={`${styles.flexCenter} flex-1 flex-col space-y-8`}>
          <Collapse collapseData={faqData} />
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
