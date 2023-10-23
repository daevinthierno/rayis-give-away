

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {  useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

import Image from "next/image";

import {Input,Button, Spinner,} from "@nextui-org/react";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PaymentCard({ openModal, setCloseModal, ticket, cardQty }) {
    const [open, setOpen] = useState(false)
    const [qty, setQty] = useState(1)
    const [amount, setAmount] = useState(1)
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("237");
    const [paymentMode, setPaymentMode] = useState("MOBILE_MONEY");
    const [phoneNumber, setPhoneNumber] = useState("237");
    const [operator, setOperator] = useState("orange-money-cm");

    const [status, setStatus] = useState(null);
    const [reference, setReference] = useState(null);

    const [count, setCount] = useState(0)

    // const [isLoading, setIsLoading] = useState(false)
    

    // const [selectedColor, setSelectedColor] = useState(ticket.colors[0])
    // const [selectedSize, setSelectedSize] = useState(ticket.sizes[2])

    useEffect(() => {
        setOpen(openModal)
        // setQty(1)
        setAmount(qty * ticket?.price)

        console.log(reference);
        console.log(status);

        if(reference !== null && !['success', 'failed'].includes(status) ){
            setTimeout(() => {
                getPaymentStatus(reference)
                setCount(count+1)
            }, 1000);
        }
  
    }, [openModal, qty, status,reference, count])

  
    const handleCloseEvent = () => {
        setOpen(false)
        setCloseModal(false)
    }

    function add(){
         setQty(qty + 1)
        //  setAmount(qty * ticket?.price)
        
     }

    function remove() {
         qty == 1  ?  setQty(1) : setQty(qty - 1)
        //  setAmount(qty * ticket?.price)

        
     }

     const getPaymentStatus = (reference)=>{
        const apiUrl = `https://api.poolcup.mounir-holding.com/ticket-payment-status/${reference}`; // Replace with your actual API endpoint
       
         fetch(apiUrl)
       .then(response => response.json())
       .then(result => {
        setStatus(result.data.payment_status)
        //    if(result.data.status === "success"){
        //        alert("Payment successfull")
        //        setStatus("success")
        //    }
       })
       .catch(error => console.log('error', error));
     }




     const handleFormSubmit = ()=>{

        const payload = {
            ticket_id: ticket?.id,
            customer_name: customerName,
            customer_email: customerEmail,
            customer_phone: customerPhone,
            quantity: qty,
            payment_method: paymentMode,
            operator: operator,
            phone_number: phoneNumber

        }
        console.log(payload)

         // Define the API endpoint URL
         const apiUrl = 'https://api.poolcup.mounir-holding.com/ticket-payment'; // Replace with your actual API endpoint
         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");

         var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(payload),
            redirect: 'follow'
          };

          fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result && result?.error){
                alert(result.message);
                return;
            }
            if (result && result?.data.error){
                alert(result.data.message);
                return;
            }
            setReference(result.data.reference)
            if(paymentMode === "CARD"){
                let payment_url = result.data.payment_url;
                window.location.href = payment_url;
            }
        })
        .catch(error => console.log('error', error));

     }



     if(status == "pending"){
        return (
            <Modal isOpen={openModal} className='bg-gray-500 bg-opacity-75 transition-opacity text-white border border-white' >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <motion.div
                            key={1}
                            variants={fadeIn("up", "spring",  0.5, 1)}
                            className="flex flex-1 flex-col relative justify-between align-center p-8  rounded-[20px]"
                            >
                                <motion.p>Waiting client's validation.</motion.p>
                                <Spinner className='mt-5 text-[80px]' />
                        </motion.div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={handleCloseEvent}>
                        Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                        Action
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        );
     }

     else if(status == "success"){
        return (
            <Modal isOpen={openModal} className='bg-gray-500 bg-opacity-75 transition-opacity text-white border border-white' >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <motion.div
                            key={1}
                            variants={fadeIn("up", "spring",  0.5, 1)}
                            className="flex flex-1 flex-col relative justify-between align-center p-8  rounded-[20px]"
                            >
                                <motion.p>Payment completed successfully.</motion.p>
                                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                                    <Image
                                        src="/success2.png"
                                        width={400}
                                        height={400}
                                        alt="Why you should Join Event"
                                        className="rounded-[30px]"
                                    />
                                </motion.div>

                                <Button className='mt-[70px]'><a href='https://api.poolcup.mounir-holding.com/generate_pdf'>Click to download ticket</a></Button>
                                
                        </motion.div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={handleCloseEvent}>
                        Close
                        </Button>
                        
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        );
     }

     else if(status == "failed"){
        return (
            <Modal isOpen={openModal} className='bg-gray-500 bg-opacity-75 transition-opacity text-white border border-white' >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <motion.div
                            key={1}
                            variants={fadeIn("up", "spring",  0.5, 1)}
                            className="flex flex-1 flex-col relative justify-between align-center p-8  rounded-[20px]"
                            >
                                <motion.p>Oops! Payment failed.</motion.p>
                                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                                    <Image
                                        src="/failed.png"
                                        width={400}
                                        height={400}
                                        alt="Why you should Join Event"
                                        className="rounded-[30px]"
                                    />
                                </motion.div>
                                
                                {/* <Button className='mt-[70px]'><a href='http://127.0.0.1:5000/generate_pdf'>Click to download ticket</a></Button> */}
                        </motion.div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={handleCloseEvent}>
                        Close
                        </Button>
                        
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        );
     }
 
     else{
        return (
            // <Transition.Root show={openModal} as={Fragment}>
                <Modal isOpen={status !== null ? false : openModal} as="div" className="relative z-10" onClose={()=>{}}>
                <ModalContent>
                    {(onClose) => (
                        <>
                        {/* <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child> */}
    
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            {/* <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            > */}
                                <ModalBody className="flex transform text-left text-base transition md:my-8 w-[700px] md:px-4 lg:max-w-4xl">
                                    <div className="relative flex flex-col w-full items-center overflow-hidden bg-[#1b1b27] rounded-[20px] border-[1px] shadow-2xl border-white px-4 pb-8 pt-14  sm:px-6 sm:pt-8 md:p-6 lg:p-8 drop-shadow-2xl">
    
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={handleCloseEvent}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
    
                                        <div className="w-full">
    
                                            <div className=" sm:col-span-8 lg:col-span-12">
    
                                                <h5 className="text-2xl text-white font-semibold text-gray-900 sm:pr-12">{ticket?.name}</h5>
    
                                                {/* <h2 className="text-2xl font-semibold text-gray-900 sm:pr-12">{ticket?.name} /  <span className="text-sm font-medium text-gray-100">{ticket?.location}</span></h2> */}
    
                                                <section aria-labelledby="information-heading" className="mt-6">
    
                                                    <div className="border-b-[0.07px] border-b-primary pb-6">
    
                                                        <div className="flex justify-between items-center border-b-primary-500 mb-6">
                                                            <div className=" text-white font-normal text-base uppercase">
                                                                Price:
                                                            </div>
                                                            <div className="text-white font-medium text-base uppercase">
                                                                {ticket?.type}
                                                            </div>
                                                        </div>
    
                                                        <div className="flex text-white justify-between items-center border-b-primary-500">
                                                            <div className=" font-normal text-base uppercase">
                                                                Location:
                                                            </div>
                                                            <div className="text-white font-medium text-base uppercase">
                                                                {ticket?.location}
                                                            </div>
                                                        </div>
    
                                                    </div>
    
                                                    <div className="   mt-7 pb-6">
    
                                                        <h5 className="text-2xl font-semibold text-gray-900 sm:pr-12 mb-6 text-white">{'Custumer details'}</h5>
    
                                                        <div className="text-white flex gap-6 items-center w-full">
    
                                                            <div className="relative mt-6 flex-1">
                                                                <Input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)}  className="  outline-none border-none w-full border-b text-black placeholder:text-black"    placeholder="Name" />
                                                                {/*<label htmlFor="phone" className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Name</label>*/}
                                                            </div>
    
                                                            <div className="relative mt-6 flex-1">
                                                                <Input type="phone" value={customerPhone} onChange={(e)=>setCustomerPhone(e.target.value)} className="  outline-none border-none w-full border-b text-black placeholder:text-black" placeholder="Phone number" />
                                                                {/*<label for="phone" className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Phone</label>*/}
                                                            </div>
    
    
                                                            <div className="relative mt-6 flex-1">
                                                                <Input type="email" value={customerEmail} onChange={(e)=>setCustomerEmail(e.target.value)} className="peer border-none  outline-none w-full border-b text-black placeholder:text-dark" placeholder="Email" />
                                                                {/*<label for="email" className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Email</label>*/}
                                                            </div>
    
    
                                                        </div>
    
    
                                                    </div>
    
    
                                                    <div className="   mt-7 pb-6">
    
                                                        <h5 className="text-2xl font-semibold text-gray-900 sm:pr-12 mb-6 text-white">{'Offres'}</h5>
    
                                                        <div className="flex gap-6 items-center w-full mt-4">
    
                                                            <div className="relative flex flex-1 items-center gap-5">
                                                            <div className="  ml-1 -translate-y-3 text-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Quantity</div>
    
                                                                <div className="flex items-center gap-4">
    
                                                                    <Button  onClick={remove} type="button" className="opacity-100 inline-flex items-center cursor-pointer p-3 rounded-[10px] shadow-sm text-white bg-primary-500 transition-opacity hover:bg-primary-600 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-primary-100" aria-label="scrollToTop">
                                                                        -
                                                                     </Button>
    
                                                                     <div className="text-white font-normal">{qty}</div>
     
    
                                                                     <Button onClick={add}  type="button" className="opacity-100 inline-flex cursor-pointer items-center p-3 rounded-[10px] shadow-sm text-white bg-primary-500 transition-opacity hover:bg-primary-600 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-primary-100" aria-label="scrollToTop">
                                                                        +
                                                                     </Button>
    
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                    </div>
    
                                                    <div className="   mt-7 pb-6">
    
                                                        <h5 className="text-2xl font-semibold text-gray-900 sm:pr-12 mb-6 text-white">{'Payment mode'}</h5>
    
                                                        <div className="flex gap-6 items-center w-full mt-4">
    
                                                            <div className="relative  flex-1">
                                                                <select value={paymentMode} onChange={(e)=>{setPaymentMode(e.target.value)}} className="peer text-white h-full outline-none focus:none w-full rounded-[7px] border-b-2 border-b-black  border-blue-gray-200 border-t-none bg-transparent px-3 py-2.5 font-sans text-sm  disabled:border-0 disabled:bg-blue-gray-50">
                                                                    <option className="text-white" value="CARD">CARD</option>
                                                                    <option className="text-white"   value="MOBILE_MONEY">MOBILE_MONEY</option>
                                                                </select>
                                                                <label htmlFor="phone" className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm ">Payment mode</label>
                                                            </div>
    
                                                            { paymentMode === 'MOBILE_MONEY' && (
                                                               <>
                                                                   <div className="relative  flex-1">
                                                                       <select onChange={(e)=>{setOperator(e.target.value)}} className="peer text-white h-full outline-none focus:none w-full rounded-[7px] border-b-2 border-b-black  border-blue-gray-200 border-t-none bg-transparent px-3 py-2.5 font-sans text-sm  disabled:border-0 disabled:bg-blue-gray-50">
                                                                           <option className="text-white" value="orange-money-cm">ORANGE MONEY</option>
                                                                           <option className="text-white"   value="mtn-cm"> MTN MOBILE_MONEY</option>
                                                                       </select>
                                                                       <label htmlFor="phone" className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm ">Operator</label>
                                                                   </div>
                                                                   <div className="relative  flex-1">
                                                                       <Input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className="peer border-none  outline-none w-full border-b text-black placeholder:text-dark" placeholder="Phone Number" />
                                                                   </div>
                                                               </>
                                                            ) }
    
                                                        </div>
                                                    </div>
    
                                                    <div className="flex mt-4 justify-between items-center border-b-primary-500 mb-6">
                                                        <div className="text-white font-normal text-base uppercase">
                                                            Total price:
                                                        </div>
                                                        <div className="text-white font-medium text-base uppercase">
                                                            {'XAF ' +amount}
                                                        </div>
                                                    </div>
    
                                                    <div className='w-full flex justify-end'>
                                                    <Button onClick={handleFormSubmit}  type="button" className="opacity-100 inline-flex cursor-pointer items-center px-3 py-2 text-base rounded-[10px] shadow-sm text-white bg-primary-500 transition-opacity hover:bg-primary-600 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-primary-100" aria-label="scrollToTop">
                                                        <p className="text-white">Proceed to payment with LoovPay</p>
                                                    </Button>
                                                    </div>
    
                                                </section>
    
                                            </div>
    
                                        </div>
                                    </div>
                                </ModalBody>
                        </div>
                    </div>
                        </>
                    )}
                </ModalContent>
                    
                </Modal>
            // </Transition.Root>
        )
     }
}
