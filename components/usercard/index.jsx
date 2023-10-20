"use client";
import Image from "next/image";
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const UserCard = ({ id, imgUrl, name, title, text, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 1)}
      className="relative w-[300px] h-[400px] xl:w-[370px] xl:h-[480px] m-5"
    >
      <div className="rounded-full border-2 border-primary-200 w-[170px] h-[170px] xl:w-[250px] xl:h-[250px] absolute top-0 left-[50%] translate-x-[-50%] z-[10]">
        <Image
          src={imgUrl}
          alt={`speaker-${id}`}
          width={250}
          height={250}
          className={`rounded-full`}
        />
      </div>
      <div
        className={`${styles.flexCenter} flex-col bg-secondary-500 absolute w-[300px] h-[300px] xl:w-[370px] xl:h-[350px] top-[85px] xl:top-[125px]`}
      >
        <div className="pt-[50px] xl:pt-[80px] px-4">
          <h4 className="text-white text-center">{name}</h4>
          <h6 className="text-primary-200 text-center pt-1">{title}</h6>
          <p className="text-dimWhite text-center text-ellipsis overflow-hidden max-h-[100px] pt-3">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default UserCard;
