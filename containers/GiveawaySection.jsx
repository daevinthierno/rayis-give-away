"use client"
import styles from "@/styles"; // Import your styles
import { motion } from "framer-motion";
import { textVariant, staggerContainer, fadeIn } from "@/utils/motion"; // Import motion-related utilities

const GiveawaysSection = () => {
  return (
    <section
      className={`${styles.bottomMargins} flex flex-col`}
      id="giveaways"
      aria-label="giveaways"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative"
      >
        <div className={`${styles.innerWidth} ${styles.flexCenter} flex-col lg:min-h-[800px] min-h-[600px] relative z-10`}>
          <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
            <h2 className="text-white text-center text-2xl font-semibold mb-4">
              Maximisez vos chances de gagner !
            </h2>
          </motion.div>
          <div className={`${styles.flexCenter} flex-col pt-2`}>
            <motion.p variants={textVariant(1.1)} className="text-white text-center">
              Rayis Developers offre régulièrement des produits et des services de pointe via des giveaways excitants. Pour participer, c'est simple :
            </motion.p>
            <motion.ol variants={textVariant(1.2)} className="text-white text-center list-disc list-inside">
              <li>Consultez nos offres exclusives.</li>
              <li>Inscrivez-vous aux giveaways qui vous intéressent.</li>
              <li>Payez une modeste contribution pour valider votre inscription.</li>
              <li>Vous pouvez vous inscrire autant de fois que vous le souhaitez pour augmenter vos chances de gagner !</li>
            </motion.ol>
          </div>
        </div>
        <div className="z-0">
          {/* Background shapes or decorations */}
          {/* Add your background shapes or decorations here */}
        </div>
      </motion.div>
    </section>
  );
};

export default GiveawaysSection;