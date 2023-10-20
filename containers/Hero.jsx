"use client"
import styles from "@/styles";
import Countdown from "@/components/countdown";
import { motion } from "framer-motion";
import {fadeIn,staggerContainer, textVariant } from "@/utils/motion";
const Hero = () => {
  //temporary variable
  const target = new Date();
  target.setDate(target.getDate() + 16);
  //
  return (
    <section
      className={`${styles.bottomMargins} flex flex-col`} id="hero" aria-label="hero">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:true,amount:0.25}} className="relative">
        <div className={`${styles.innerWidth} ${styles.flexCenter} flex-col lg:min-h-[800px] min-h-[600px] relative z-10`}>
        <motion.div variants={fadeIn('up','tween',0.3,1)}>
          <Countdown /*targetDate={new Date("01/22/2024 23:24:00")}*/ targetDate={target} />
        </motion.div>
          <div className={`${styles.flexCenter} flex-col pt-2`}>
            <motion.h1 variants={textVariant(1.1)} className="text-white text-center">Business Conference</motion.h1>
            <motion.h1 variants={textVariant(1.2)} className="text-gradient text-center">{new Date().getFullYear()}</motion.h1>
          </div>
        </div>
        <div className="z-0">
          <div className="bg-primary-radial-gradient sm:w-[130px] w-[80px] h-[80px] sm:h-[130px] rounded-full absolute top-[25%] left-[15%] lg:top-[25%] lg:left-[15%]" />
          <div className="bg-primary-radial-gradient sm:w-[130px] w-[80px] h-[80px] sm:h-[130px] rounded-full absolute top-[20%] left-[65%] lg:top-[15%] lg:left-[75%]" />
          <div className="bg-primary-radial-gradient w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] rounded-full absolute top-[75%] left-[40%]" />
          <div className="bg-primary-radial-gradient w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] rounded-full absolute top-[75%] left-[80%]" />
          <div className="bg-primary-radial-gradient w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] rounded-full absolute top-[85%] left-[18%]" />
          <div className="bg-primary-radial-gradient w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] rounded-full absolute top-[85%] left-[60%]" />
          <div className="blur-gradient w-[40%] h-[42%] rounded-full absolute top-[35%] left-[50%] translate-x-[-50%]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
