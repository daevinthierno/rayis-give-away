"use client";
import { useState } from "react";
import styles from "@/styles";
import Image from "next/image";
import { IconPin } from "../icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Tab = ({ schedules }) => {
  const [openTab, setOpenTab] = useState(schedules[0].id);
  return (
    <div>
      <div className="bg-secondary-500">
        <ul
          className={`${styles.innerWidth} flex flex-wrap flex-row list-none px-2 py-4 lg:px-4`}
          role="tablist"
          aria-labelledby="tablist-1"
        >
          {schedules.map((schedule, index) => (
            <motion.li
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              key={schedule.id}
              className={`flex-auto text-center ${
                openTab === schedule.id
                  ? "border-b-[3px] border-primary-200"
                  : " border-none"
              }`}
              role="presentation"
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(schedule.id);
                }}
                data-toggle="tab"
                href={`#${schedule.id}`}
                id={`tab-${index + 1}`}
                role="tab"
                aria-label={schedule.id}
                aria-controls={schedule.id}
              >
                <div className="flex flex-col pb-4">
                  <p className="uppercase text-white pb-1 text-xl md:text-3xl font-semibold">
                    {schedule.day}
                  </p>
                  <p className="text-primary-200 text-sm">{schedule.date}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className={`${styles.innerWidth} flex flex-col mt-7 lg:mt-14`}>
        {schedules.map((schedule, index) => (
          <div
            key={schedule.id}
            className={`${openTab === schedule.id ? "block" : "hidden"}`}
            id={`${schedule.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${index + 1}`}
          >
            {schedule.schedule_event.map((event, index) => (
              <motion.div
                variants={fadeIn("left", "spring", index * 0.5, 1)}
                key={event.id}
                className="flex flex-col border-b border-white py-4"
              >
                <div className="flex flex-1 pb-4">
                  <p className="text-white uppercase rounded-[20px] bg-secondary-500 px-4 py-2">
                    {event.time_range}
                  </p>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <Image
                      src={event.imgUrl}
                      alt={event.desc}
                      width={150}
                      height={150}
                      className=" rounded-[30px]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2">
                    <p className="font-normal text-white md:max-h-[80px] md:overflow-hidden text-base md:text-xl">
                      {event.title}
                    </p>
                    <p className="text-primary-200">{event.desc}</p>
                    <p className="text-white flex items-baseline space-x-1">
                      <IconPin width={18} height={18} className="text-white" />
                      <span>{event.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
