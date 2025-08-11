import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion,easeOut } from 'framer-motion';

const ServicesSection = () => {
    const services = [
        { title: "Web & Mobile App Development" },
        { title: "Application Software Services" },
        { title: "Software Coding & Optimization" },
    ]

    const containerVariants = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
     const cardVariants ={
        hidden: {opacity: 0, y:24},
        show: {opacity:1, y:0, transition: { duration: 0.6, easeOut}}
     }

    return (
        <div className='mx-20 my-20'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-7xl font-medium'>Services <img className='inline-block align-middle h-12 w-12' src="/public/images/star.png" alt="" /></h2>
                <p>All services <motion.button whileHover={{x: 6}}  className='bg-gray-200 inline-block align-middle p-1 text-lg rounded-full'><IoIosArrowRoundForward></IoIosArrowRoundForward></motion.button></p>
            </div>

            <motion.div variants={containerVariants} initial="hidden" animate="show" className='grid grid-cols-3 gap-4'>
                {
                    services.map((service, idx) => (
                        <motion.div key={idx} variants={cardVariants} whileHover={{ y: -8, boxShadow:"0px 8px 24px rgba(0, 191, 255, 0.4)"}} transition={{ duration: 0.18 }} className='bg-gray-200 px-5 py-8 rounded-xl space-y-6 translate-y-6  hover:bg-teal-500 hover:text-white group'>
                            <h3 className='text-4xl font-semibold'>{service.title}</h3>
                            <p className='text-gray-500 group-hover:text-white'>Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                            <motion.button whileHover={{y:-6}} transition={{duration:0.18}} className='p-3 bg-gray-100 shadow-md rounded-full text-lg text-black'><MdArrowOutward /></motion.button>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default ServicesSection;