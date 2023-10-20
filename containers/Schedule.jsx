"use client";
import styles from "@/styles";
import Tab from "@/components/tab";
import { schedulesData } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
const Schedule = () => {
  return (
    <section
      className={`${styles.topPaddings} flex flex-col`}
      id="schedule"
      aria-label="schedule"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`flex justify-center flex-1 flex-col space-y-6 md:space-y-12`}
      >
        <h2 className="text-white text-center">Schedule</h2>
        <Tab schedules={schedulesData} />
      </motion.div>
    </section>
  );
};

export default Schedule;
