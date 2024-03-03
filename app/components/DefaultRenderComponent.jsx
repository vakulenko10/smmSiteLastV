"use client"
import Image from 'next/image';
import React from 'react';
import {renderTextByProperty} from './mainconsts'
const DefaultRenderComponent = ({ sectionData }) => {
    console.log("sectionData", sectionData)
    const activeItem = sectionData[0];
    console.log("activeItem: ", activeItem)
    const activeItemProps = Object.keys(activeItem);
    
    return (
        <div className='h-fit md:h-full md:grid md:grid-cols-2 gap-[10px] md:gap-[100px] items-center justify-center'>
            <div className=' flex flex-col gap-[20px] justify-end text-center md:text-right items-center md:items-end'>
                {/* Render text data on the left side */}
                <div className='text'>{activeItemProps.map((prop, index) => {
                    if (prop !== 'imageURL') {
                        return (
                            renderTextByProperty(prop, activeItem[prop])
                        );
                    }
                    return null; // Skip rendering imageURL here
                })}</div>
                <div className='buttons-container flex flex-col md:flex-row flex-wrap mb-10 justify-center md:m-0 md:justify-end items-center gap-1'>
                    <a href="#contactMe"><button className='contact-btn px-3 mx-2 bg-[#941818] hover:bg-[#9d4634] rounded'><h5>contact me</h5></button></a>
                    <a href="#Portfolio"><button className='portfolio-btn px-3 mx-2 bg-[#941818] hover:bg-[#9d4634]  rounded'><h5>portfolio</h5></button></a>
                    <a href="#Cooperation"><button className='portfolio-btn px-3 mx-2 bg-[#941818] hover:bg-[#9d4634]  rounded'><h5>cooperation</h5></button></a>
                </div>
            </div>
            <div className='flex justify-center items-center md:justify-start'>
                {/* Render image on the right side */}
                {activeItemProps.includes('imageURL') && (
                    <img src={activeItem['imageURL']} className='w-[70vw] md:w-[300px]' alt="Image" />
                )}
            </div>
        </div>
    );
    // console.log("sectionData: ", JSON.stringify(sectionData))
    // return <div>{JSON.stringify(sectionData)}</div>
};

export default DefaultRenderComponent;
