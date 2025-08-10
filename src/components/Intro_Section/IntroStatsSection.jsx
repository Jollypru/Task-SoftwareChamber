import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const StatCounter = ({ target, label }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 1200;
                    const step = () => {
                        start += target / (duration / 16);
                        if (start < target) {
                            setCount(Math.floor(start));
                            requestAnimationFrame(step);
                        } else {
                            setCount(target);
                        }
                    };
                    requestAnimationFrame(step);
                    controls.start({
                        opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' }
                    });
                }
            },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={controls}
            className="mb-8 space-y-4"
        >
            <p className="text-5xl font-medium">{count}+</p>
            <p className="text-gray-500 text-xl font-medium">{label}</p>
        </motion.div>
    );
};

const IntroStatsSection = () => {
    return (
        <section className='ml-20 mr-16 mt-40 text-center bricolage-grotesque-font'>
            <motion.h1 className='text-6xl font-medium' initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} viewport={{ once: true, amount: 0.4 }}>
                <img className='w-14 h-14 inline-block align-middle mr-2' src="/images/star.png" alt="" />
                At Software Chamber, <span className='text-gray-400'>we specialize</span> in turning complex challenges into elegant <span className='text-gray-400'>digital solutions</span> <img className='w-12 h-12 inline-block align-middle' src="/images/arrow.png" alt="" />
            </motion.h1>
            <div className='flex justify-between gap-4 mt-11'>
                <div className='flex-1/3 text-start'>
                    <StatCounter target={20} label="Tech Partners" />
                    <StatCounter target={150} label="Projects Completed" />
                    <StatCounter target={1000} label="Satisfied Customers" />
                </div>
                <div className=' flex justify-center'>
                    <motion.img src='/images/statphoto.png' className='rounded-lg max-w-full'
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1.02 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    ></motion.img>
                </div>
                <div className='flex flex-col text-start p-3 space-y-4 ml-4'>
                    <div className='flex items-start gap-5 border-0 border-b border-b-gray-400 '>
                        <div className="flex-1/5 relative w-14 h-14">
                            <div className="bg-teal-600 w-full h-full rounded-full flex items-center justify-center">
                                <div className=" bg-white rounded-full w-6 h-6 flex items-center justify-center">
                                    <span className="text-gray-800 font-semibold">1</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-gray-700'>Your Team in the cloud</h2>
                            <p className='text-gray-600 mb-4 leading-5'>We Hire Best and brightest Talents to build world class technology</p>
                        </div>
                    </div>
                    <div className='flex items-start  gap-5 border-0 border-b border-b-gray-400'>
                        <div className=" relative w-14 h-14">
                            <div className="bg-teal-600 w-full h-full rounded-full flex items-center justify-center">
                                <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center">
                                    <span className="text-gray-800 font-semibold">2</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-gray-700'>Grow more with less</h2>
                            <p className='text-gray-600 mb-7 leading-5'>We have a competitive pricing structure</p>
                        </div>
                    </div>
                    <div className='flex items-start  gap-5 border-0 border-b border-b-gray-400'>
                        <div className="flex-1/4 relative w-14 h-14">
                            <div className="bg-teal-600 w-full h-full rounded-full flex items-center justify-center">
                                <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center">
                                    <span className="text-gray-800 font-semibold">3</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-gray-700'>Weekly sprint and reviews</h2>
                            <p className='text-gray-600 mb-4 leading-5'>Our fast review and feedback loop is designed to keep in you in the driver's seat</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <div className=" relative w-14 h-14 mr-1 max-w-full">
                            <div className="bg-teal-600 w-full h-full rounded-full flex items-center justify-center">
                                <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center">
                                    <span className="text-gray-800 font-semibold">4</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-gray-700'>Communication First</h2>
                            <p className='text-gray-600 leading-5'>We use modem tools and services to collaborate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroStatsSection;