"use client";
import { useState } from "react";
import styles from "@/styles";
import Image from "next/image";
import { testimonialsData } from "@/constants";
import { IconQuote, IconLeftArrow, IconRightArrow } from "@/components/icons";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  return (
    <section
      className={`${styles.topPaddings}`}
      id="testimonials"
      aria-label="testimonials"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} flex  flex-col space-y-12`}
      >
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="flex justify-between flex-col md:flex-row"
        >
          <div className="flex flex-1">
            <h2 className="text-white">What people are saying about us</h2>
          </div>
          <div className="flex flex-1 items-end justify-end space-x-4">
            <button
              onClick={() => swiper.slidePrev()}
              className="p-4 text-white rounded-full border-2 border-white"
              aria-label="prevButton"
            >
              <IconLeftArrow width={32} height={32} className="text-white" />
            </button>
            <button
              onClick={() => swiper.slideNext()}
              className="p-4 text-white rounded-full border-2 border-white"
              aria-label="nextButton"
            >
              <IconRightArrow width={32} height={32} className="text-white" />
            </button>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
          <Swiper
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 150 },
              768: { slidesPerView: 2, spaceBetween: 50 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
            onSwiper={(s) => {
              setSwiper(s);
            }}
            className={``}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div className="p-8 rounded-[20px] border border-secondary-500 hover:bg-secondary-500 cursor-grab active:cursor-grabbing space-y-6">
                  <div>
                    <IconQuote
                      width={43}
                      height={28}
                      className="text-primary-500"
                    />
                  </div>
                  <div className="space-y-6">
                    <p className="text-white">{testimonial.comment}</p>
                    <div className="flex space-x-4">
                      <div>
                        <Image
                          src={testimonial.imgUrl}
                          width={48}
                          height={48}
                          alt={testimonial.id}
                          className="rounded-full border-2 border-white"
                        />
                      </div>
                      <div>
                        <p className=" text-white">{testimonial.name}</p>
                        <p className="text-sm text-dimWhite">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
