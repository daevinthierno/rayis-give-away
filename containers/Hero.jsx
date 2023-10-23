"use client"
import styles from "@/styles";
import Countdown from "@/components/countdown";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  // Temporary variable for the target date
  const target = new Date();
  target.setDate(target.getDate() + 16);

  const backgroundStyle = {
    backgroundImage: 'url("https://media.istockphoto.com/id/1560087969/fr/photo/armoires-de-serveurs-de-d%C3%A9bogage-administrateur.jpg?s=1024x1024&w=is&k=20&c=hI9tE-xdWlkooPhUb6aclcd8YAyi7aX_zXN6Wo-3Yt4=")',
    backgroundSize: 'cover'
  };
  
  return (
    <section
      className={`${styles.bottomMargins} flex flex-col`}
      id="hero"
      aria-label="hero"
      style={backgroundStyle} 
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative bg-primary"
      >
        <div className={`${styles.innerWidth} ${styles.flexCenter} flex-col lg:min-h-[800px] min-h-[600px] relative z-10`}>
          {/* <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}> */}
            {/* Countdown component with a target date */}
            {/* <Countdown targetDate={target} /> */}
          {/* </motion.div> */}
          <div className={`${styles.flexCenter} flex-col pt-2`}>
            <motion.h1 variants={textVariant(1.1)} className="text-white text-center">
              {/* Your welcome message */}
              Bienvenue sur Rayis Developers,  </motion.h1>
            <motion.h1 variants={textVariant(1.2)} className="text-gradient text-center">
             
             Give away {new Date().getFullYear()}
            </motion.h1>
          </div>
          <motion.p className="text-white text-center">
          la communauté de développeurs en Afrique dédiée à l'échange d'idées innovantes et de nouvelles technologies. Que vous soyez un passionné de la technologie, un développeur chevronné ou simplement curieux, notre site est votre source ultime pour rester à jour sur les dernières avancées technologiques, accéder à des articles informatifs et participer à nos giveaways exclusifs.
          
          </motion.p>
        </div>
        <div className="z-0">
  
          <div className="bg-primary-radial-gradient sm:w-[130px] w-[80px] h-[80px] sm:h-[130px] rounded-full absolute top-[25%] left-[15%] lg:top-[25%] lg:left-[15%]" />
          {/* <div className="bg-primary-radial-gradient sm:w-[130px] w-[80px] h-[80px] sm:h-[130px] rounded-full absolute top-[20%] left-[65%] lg:top-[15%] lg:left-[75%]" /> */}
          {/* <div className="bg-primary-radial-gradient w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] rounded-full absolute top-[75%] left-[40%]" /> */}
          {/* <div className="bg-primary-radial-gradient w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] rounded-full absolute top-[75%] left-[80%]" /> */}
          <div className="bg-primary-radial-gradient w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] rounded-full absolute top-[85%] left-[18%]" />
          <div className="bg-primary-radial-gradient w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] rounded-full absolute top-[85%] left-[60%]" />
          <div className="blur-gradient w-[40%] h-[42%] rounded-full absolute top-[35%] left-[50%] translate-x-[-50%]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
