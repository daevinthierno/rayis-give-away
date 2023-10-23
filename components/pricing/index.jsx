"use client";
import styles from "@/styles";
import Button from "../button";
import { IconCheck } from "../icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import PaymentCard from "@/components/paymentCard";
import {useState} from "react";


export const Pricing = ({ pricingData }) => {

  const [openModal, setOpenModal] = useState(false);

  const [selectedTicket, setSelectedTicket] = useState(null)

  const handleButtonClick = (data) => {
      console.log(data)
      setSelectedTicket(data)
        setOpenModal(true);
        console.log(openModal); // This will log the current state of openModal
    };

  const setCloseModal = (data) =>{
      setOpenModal(data);
      console.log(openModal);
  }

  return (
    <div
      className={`${styles.flexCenter} flex-1 lg:flex-row flex-col items-stretch space-y-8 lg:space-x-8 lg:space-y-0`}
    >
      {pricingData.map((pricing, index) => (
        <motion.div
          key={pricing.id}
          variants={fadeIn("up", "spring", index * 0.5, 1)}
          className="flex flex-1 flex-col relative justify-between p-8 border border-white rounded-[20px]"
        >
          {pricing.isPopular && (
            <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] border-[5px] border-bg-tertiary">
              <div className="rounded-[20px] px-4 py-2 bg-primary-500">
                <p className="text-white">Most Popular</p>
              </div>
            </div>
          )}
          <div className="mb-6">
            <div className="flex items-center justify-center pb-6 border-b border-white">
              <div>
                <h6 className="text-center text-dimWhite">{pricing.title}</h6>
                <p className="font-semibold text-[56px] text-center text-white">
                  {pricing.price}
                </p>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-white pb-4">Includes</p>
              <ul className="space-y-4">
                {pricing.includes.map((include, index) => (
                  <li
                    key={pricing.id + "-" + index}
                    className="flex items-start space-x-2"
                  >
                    <div>
                      <IconCheck
                        width={24}
                        height={24}
                        className="text-white"
                      />
                    </div>
                    <p className="text-white">{include.item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Button onClick={()=>{
                    handleButtonClick(pricing)
                }}>Souscrire</Button>
          {/* <PaymentCard openModal={openModal} setCloseModal={setCloseModal} ticket={selectedTicket} ></PaymentCard> */}
        </motion.div>
      ))}
    </div>
  );
};

export default Pricing;
