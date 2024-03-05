"use client"
import Image from 'next/image';
import React from 'react';
import {renderTextByProperty} from './mainconsts'
import { easeInOut, motion } from 'framer-motion';
const DefaultRenderComponent = ({ sectionData }) => {
    console.log("sectionData", sectionData)
    const activeItem = sectionData[0];
    console.log("activeItem: ", activeItem)
    const activeItemProps = Object.keys(activeItem);
    
    return (
        <div className='md:h-full md:grid md:grid-cols-2 gap-[10px] md:gap-[100px] items-center justify-center'>
            <motion.div  initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0}} transition={{ duration: 0.5, ease: "easeOut" }} className=' flex flex-col gap-[20px] justify-end text-center md:text-right items-center md:items-end'>
                {/* Render text data on the left side */}
                <div className='text py-10'>{activeItemProps.map((prop, index) => {
                    if (prop !== 'imageURL') {
                        return (
                            renderTextByProperty(prop, activeItem[prop], index, 'text-white')
                        );
                    }
                    return null; // Skip rendering imageURL here
                })}</div>
                <div className='hidden buttons-container md:flex flex-col md:flex-row flex-wrap mb-10 justify-center md:m-0 md:justify-end items-center gap-1'>
                    <a href="#contactMe"><motion.button whileHover={{scale: 1.1}} className='contact-btn px-3 mx-2 bg-[#c7c7c7] hover:bg-[#e7e7e7] rounded'><h5>contact me</h5></motion.button></a>
                    <a href="#Portfolio"><motion.button  whileHover={{scale: 1.1}} className='portfolio-btn px-3 mx-2  bg-[#c7c7c7] hover:bg-[#e7e7e7]  rounded'><h5>portfolio</h5></motion.button></a>
                    <a href="#Cooperation"><motion.button  whileHover={{scale: 1.1}} className='portfolio-btn px-3 mx-2  bg-[#c7c7c7] hover:bg-[#e7e7e7]  rounded'><h5>cooperation</h5></motion.button></a>
                </div>
            </motion.div>
            <motion.div className='flex justify-center items-center md:justify-start  relative md:h-auto overflow-hidden' whileHover={{scale: 1.05}} transition={{duration: 0.2, ease: easeInOut}} initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
                {/* Render image on the right side */}
                {activeItemProps.includes('imageURL') && (
                    <img src={activeItem['imageURL']} className='min-[400px]:max-w-[300px]  md:w-[300px]' alt="Image" />
                )}
            </motion.div>
        </div>
    );
    // console.log("sectionData: ", JSON.stringify(sectionData))
    // return <div>{JSON.stringify(sectionData)}</div>
};

export default DefaultRenderComponent;
