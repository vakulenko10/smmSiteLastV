"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { renderTextByProperty } from './mainconsts';

const Gallery = ({ sectionData }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPortfolioItemOpened, setIsPortfolioItemOpened] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref)
  const handleItemClick = (item) => {
    console.log('item clicked')
    setIsPortfolioItemOpened(true);
    setSelectedItem(item);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    console.log('close')
    setIsPortfolioItemOpened(false);
    setSelectedItem(null);
  };
  useEffect(()=>{
    console.log("is in view:", isInView)
  }, [isInView])

  return (
    <motion.div className='py-[10px] flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-[10px] md:grid-rows-2 h-full place-items-center' ref={ref} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
      {sectionData.map((sectionItem, index) => (
        <motion.div
          key={index}
          initial={{x: 100}} whileInView={{x: 0}}
          className='box-border object-center	 overflow-hidden h-fit min-[300px]:h-[250px] w-3/4 md:w-auto md:h-[300px] relative'
          whileHover={isPortfolioItemOpened?{}:{ scale: 1.05, transition: { duration: 0.3 } }}
          onClick={() => handleItemClick(sectionItem)}
        >
          <img
            className='object-cover object-center overflow-hidden box-border'
            src={sectionItem['imageURL']}
            alt={index}
          />
          {(selectedItem === sectionItem && selectedItem != null) && (
            <motion.div
              className={`${isPortfolioItemOpened && selectedItem === sectionItem ? 'fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#000000cd] bg-opacity-50 z-[1000] py-10' : 'hidden'}`}
            >
              <div className='PortfolioItemInfo p-4 h-full w-full overflow-y-scroll overflow-x-hidden text-wrap break-words'>
                {selectedItem['imageURL']?<img src={selectedItem['imageURL']} key={index} alt={index} className='h-1/2 object-contain '/>:<></>}
                {Object.keys(selectedItem).map((prop, index) => {
                  if (prop !== 'imageURL') {
                    return renderTextByProperty(prop, selectedItem[prop], index, 'text-white ');
                  }
                  return
                  
                })}

                <button className='absolute top-0 right-0 mt-4 mr-4 bg-[#751a1ab1] text-white py-2 px-4 rounded-md z-[1]' onClick={handleClose}>
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Gallery;
