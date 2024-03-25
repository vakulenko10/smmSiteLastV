"use client"
import Image from 'next/image';
import React from 'react';
import { renderTextByProperty } from './mainconsts'
import { easeInOut, motion } from 'framer-motion';

const DefaultRenderComponent = ({ sectionData }) => {
    const activeItem = sectionData[0];
    const activeItemProps = Object.keys(activeItem);
    
    return (
        <div className='h-full  relative flex flex-col justify-end items-center md:flex-row md:items-center '>
            <motion.div  
                transition={{ duration: 0.5, delay: 0.1, ease: easeInOut }} 
                initial={{ opacity: 0, x: 400 }} 
                animate={{ opacity: 1, x: 0 }} 
                className='absolute w-full md:h-full object-cover'
                style={{ overflow: 'visible' }} // Ensure that any overflowing content is hidden
            >
                {/* Render image on the right side */}
                {activeItemProps.includes('imageURL') && (
                    <motion.img 
                        src={activeItem['imageURL']} 
                        className='absolute top-0 left-0 object-cover' 
                        alt="Image" 
                        style={{ transform: 'rotate(90deg)' }} // Rotate the image by 90 degrees
                    />
                )}
            </motion.div>

            <motion.div 
                dragConstraints={{ left: 0, right:0, top: 0, bottom: 0 }}  
                initial={{ opacity: 0, x: -100}}
                animate={{ opacity: 1, x: 0}} 
                transition={{ duration: 0.5, ease: "easeOut" }} 
                className='justify-self-center order-1 z-10 absolute top-1/2 md:top-0 md:relative flex flex-col gap-[20px] md:justify-self-end text-center md:text-start items-end'>
                {/* Render text data on the left side */}
                <div className='text'>
                    {activeItemProps.map((prop, index) => {
                        if (prop !== 'imageURL') {
                            return (
                                renderTextByProperty(prop, activeItem[prop], index, 'md:text-end text-white text-[40px] md:text-[70px] welcome')
                            );
                        }
                        return null; // Skip rendering imageURL here
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default DefaultRenderComponent;
