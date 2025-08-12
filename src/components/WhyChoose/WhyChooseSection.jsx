import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { hover, motion } from 'framer-motion'

const WhyChooseSection = () => {
    const benefits = [
        { title: "Efficiency", description: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs." },
        { title: "Adaptability", description: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs." },
        { title: "Scalability", description: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs." },
        { title: "Precision", description: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs." }
    ]
    const icons = [
        <img src="/public/images/icon1.png" alt="" className='w-10 h-10 inline-block align-middle' />,
        <img src="/public/images/icon2.png" alt="" className='w-10 h-10 inline-block align-middle' />,
        <img src="/public/images/icon3.png" alt="" className='w-10 h-10 inline-block align-middle' />,
        <img src="/public/images/icon4.png" alt="" className='w-10 h-10 inline-block align-middle' />
    ]

    const cardVariants = {
        initial: { opacity: 0, rotate: 1, y: 30 },
        animate: { opacity: 1, rotate: 0, y: 0 }, 
        hover: {
            y: -6, 
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            outline: "2px solid rgba(0, 150, 136, 0.4)"
        }
    }

    const iconVariants = {
        initial: { rotate: 0 }, hover: { rotate: 8 }
    }
    return (
        <div className='mx-20 mb-20 text-center'>
            <h2 className='text-6xl text-center '>Why Choose <br /> Softwarechamber</h2>
            <p className='text-center text-gray-600 my-6'>Deliver personalized experiences to your customers with AI-powered <br /> recommendation engines and dynamic content generation.
            </p>
            <button className='bg-gradient-to-r from-teal-600 to-teal-500 px-3 p-1.5 text-white font-medium rounded-4xl cursor-pointer hover:scale-105'>Let's Discuss <span className='inline-block align-middle bg-gray-100 text-black rounded-full ml-3 p-2' ><MdArrowOutward /></span></button>

            <div className='grid grid-cols-4 gap-4 mt-10'>
                {
                    benefits.map((benefit, idx) => (
                        <motion.div key={idx} variants={cardVariants} initial="initial" animate="animate" whileHover="hover" transition={{ duration: 0.6, delay: idx * 0.15 }} className='bg-gray-200 rounded-2xl p-5 space-y-4 text-start cursor-pointer'>
                            <div className='flex justify-between'>
                                <h2 className='text-2xl font-medium'>{benefit.title}</h2>
                                <motion.div
                                    variants={iconVariants} whileHover="hover"
                                    transition={{ type: "spring", stiffness: 200 }}>{icons[idx]}</motion.div>
                            </div>
                            <hr className='text-gray-400' />
                            <p className='text-gray-600 text-sm my-4'>{benefit.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default WhyChooseSection;