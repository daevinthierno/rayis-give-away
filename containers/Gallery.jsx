"use client";

import styles from "@/styles";
import Image from "next/image";
import { galleryData } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { IconInstagram } from "@/components/icons";

const Gallery = () => {
  return (
    <section
      className={`${styles.topPaddings}`}
      id="gallery"
      aria-label="gallery"
    >
      <Swiper
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }}
      >
        {galleryData.map((image, index) => (
          <SwiperSlide
            key={image.id}
            className={`${styles.flexCenter} group cursor-grab active:cursor-grabbing hover:grayscale`}
          >
            <a
             href="/"
              // href={image.link}
              // target="_blank"
              className="relative active:cursor-grabbing"
            >
              <IconInstagram
                width={45}
                height={45}
                className="text-white hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              <Image
                src={image.imgUrl}
                width={450}
                height={550}
                alt={image.id}
                className="object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
