"use client"
import React, { useState } from 'react'
import {renderTextByProperty} from './mainconsts'
const Carousel = ({sectionData}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = sectionData[activeIndex];
  const dataLength = sectionData.length;

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + dataLength) % dataLength);
  };
    // const activeItem = sectionData[0];
    console.log("activeItem: ", activeItem)
    const activeItemProps = Object.keys(activeItem);
    
    return (
        <div className='h-fit md:h-full md:grid md:grid-cols-2 gap-[10px] items-center justify-center'>
            <div className='flex justify-center items-center h-3/4 overflow-hidden'>
                {/* Render image on the right side */}
                {activeItemProps.includes('imageURL') && (
                  <div className='relative flex h-3/4 md:h-full overflow-hidden'>
                    <img src={activeItem['imageURL']} className='h-full w-auto object-contain' alt="Image" />
                     {activeItemProps.includes('imageDate') && (
                    <h6 className='text-white absolute bottom-0 left-0 z-10' >{activeItem['imageDate']}</h6>)}
                  </div>
                )}
               
            </div>
            <div className=' flex flex-col gap-[20px] justify-end text-center md:text-left items-center md:items-start text-white'>
                {/* Render text data on the left side */}
                <div className='text flex flex-col justify-between'>{activeItemProps.map((prop, index) => {
                    if (prop !== 'imageURL' && prop !== 'imageDate') {
                        return (
                            renderTextByProperty(prop, activeItem[prop])
                        );
                    }
                    return null; // Skip rendering imageURL here
                })}</div>
            </div>
            <button onClick={prevItem}>Previous</button>
      <button onClick={nextItem}>Next</button>
        </div>
    );
}

export default Carousel