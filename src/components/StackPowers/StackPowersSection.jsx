import React from 'react';
import { motion } from "framer-motion"

const StackPowersSection = () => {

    const companies = [
        { name: "Spotify", logo: "/public/images/spotify.png" },
        { name: "TalentQI", logo: "/public/images/TalentQI.png" },
        { name: "Dropbox", logo: "/public/images/dropbox.png" },
        { name: "Fliqpay", logo: "/public/images/fliqpay.png" },
        { name: "Slack", logo: "/public/images/slack.png" }
    ]

    const row1 = [companies[0], companies[1]];
    const row2 = [companies[2], companies[3]]
    const row3 = [companies[4]];

    const Row = ({ companies, delay }) => (
        <motion.div
            initial={{ x: "0%" }}
            animate={{ x: ["0%","-60%", "0%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease:"linear", delay, times:[0, 0.5, 1] }}
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-4">
            {
                companies.map((company, id) => (
                    <motion.div key={id} whileHover={{ x: 1.05 }} className="flex items-center gap-2 bg-gradient-to-b from-teal-500 via-teal-600 to-gray-900 rounded-full px-5 py-3  cursor-pointer"
                    >
                        <div className='p-3 bg-white rounded-full'>
                            <motion.img className='w-6 h-6 filter grayscale hover:grayscale-0 transition duration-250 ' src={company.logo}></motion.img>
                        </div>
                        <span className='text-white'>{company.name}</span>
                    </motion.div>
                ))
            }
        </motion.div>
    )
    return (
        <div className='bg-black mx-auto p-20 flex justify-between items-center gap-12'>
            <h2 className='text-gray-200 text-5xl'>Our Stack Powers of <br /> the <span className='text-gray-600'>World’s</span> Most <br /> <span className='text-gray-600'>Beloved Companies</span></h2>

            <div className="flex flex-col gap-6  w-[350px]">
                <Row companies={row1} delay={0} />
                <Row companies={row2} delay={2} />
                <Row companies={row3} delay={0}></Row>
            </div>

        </div>
    );
};

export default StackPowersSection;