"use client";
import styles from "@/styles";
import Pricing from "@/components/pricing";
import { ticketsData } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
const Tickets = () => {
  return (
    <section
      className={`${styles.topPaddings}`}
      id="tickets"
      aria-label="tickets"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} flex justify-center flex-1 flex-col  space-y-6 md:space-y-12`}
      >
        <h2 className="text-white text-center"> Buy your tickets now</h2>
        <div className={`${styles.flexCenter} flex-1 flex-row flex-wrap`}>
          <Pricing pricingData={ticketsData} />
        </div>
      </motion.div>
    </section>
  );
};

export default Tickets;
