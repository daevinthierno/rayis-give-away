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
        <motion.h2 className="text-white text-center">Achetez vos billets maintenant</motion.h2>
        <motion.p className="text-white text-center">
          Maximisez vos chances de gagner !
          Rayis Developers offre régulièrement des produits et des services de pointe via des giveaways excitants. Pour participer, c'est simple :
        </motion.p>
        <motion.ol className="text-white text-left ">
          <motion.li>Consultez nos offres exclusives.</motion.li>
          <motion.li>Inscrivez-vous aux giveaways qui vous intéressent.</motion.li>
          <motion.li>Payez une modeste contribution pour valider votre inscription.</motion.li>
          <motion.li>Vous pouvez vous inscrire autant de fois que vous le souhaitez pour augmenter vos chances de gagner !</motion.li>
        </motion.ol>
        <div className={`${styles.flexCenter} flex-1 flex-row flex-wrap`}>
          <Pricing pricingData={ticketsData} />
        </div>
      </motion.div>
    </section>
  );
};

export default Tickets;
