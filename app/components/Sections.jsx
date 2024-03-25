"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import Section from './Section';
import { SectionIndex, SectionToRenderType, sectionClasses } from './mainconsts';
import Container from './Container';
import Loader from './Loader';
import { motion, useTransform, AnimatePresence, useInView, useAnimation, useScroll } from 'framer-motion';
import vectorImage from '../../public/Vector1.png';
export const HelloBg = () => {
  // const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // Get scroll position using useScroll
  
  const x = useTransform(scrollYProgress, [0,1], [0, -7000]);
  return (
    <AnimatePresence initial={false}>
     
        
        
          <motion.div ref={ref} className='h-1/6 md:h-auto ease-in-out absolute w-full bg-[#ffffff0c] backdrop-blur bottom-0 overflow-x-visible text-nowrap '>
            <motion.h3
              className=' block ease-in-out w-full z-[10000] text-[#FBF3D5] font-bold text-[70px] md:text-[100px]'
              style={{x: x }}
              transition={{ type: 'tween', stiffness: 120, damping: 20 }}
            >
             <span className='text-[#9CAFAA]'  >welcome</span> to my website<span className='text-[#9CAFAA]'>.</span> <span className='text-[#9CAFAA]'  >It is</span> really nice to see you here
            </motion.h3>
          </motion.div>
      
    </AnimatePresence>
  );
};
export const AboutBg = () => {
  // const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // Get scroll position using useScroll
  
  const x = useTransform(scrollYProgress, [0,1], ['-100%', '100%']);
  return (
    <AnimatePresence initial={false}>
     
        
        
          <motion.div ref={ref} className='h-1/6 md:h-auto ease-in-out absolute w-full bg-[#ffffff0c] backdrop-blur top-0 overflow-x-visible text-nowrap '>
            <motion.h3
              className=' block ease-in-out w-full z-[10000] text-[#D6DAC8] font-bold text-[70px] md:text-[100px]'
              style={{x: x }}
              transition={{ type: 'tween', stiffness: 120, damping: 20 }}
            >
             <span className='text-[#FBF3D5]'  ></span>to see you here <tab/> &#8203;<span className='text-[#FBF3D5]'  >Welcome</span> to my website<span className='text-[#FBF3D5]'>.</span>
            </motion.h3>
          </motion.div>
      
    </AnimatePresence>
  );
};


function Sections() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/fetchContentFromDB');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        
        // Extract collection names from the keys of the JSON object
        const collectionNames = Object.keys(jsonData.data);
        setCollections(collectionNames);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);
  const backgroundToSection = {
    "aboutmeitems": <AboutBg/>,
    "helloitems": <HelloBg/>,
    "faqsitems": <div className='top-0 left-0 w-full h-full absolute z-0'>
    <div className='h-1/4 w-full bg-[#A5DD9B]'></div>
    <div className='h-1/4 w-full bg-[#A5DD9B]'></div>
    <div className='h-1/4 w-full bg-[#A5DD9B]'></div>
    <div className='h-1/4 w-full bg-[#C5EBAA]'></div>
    </div>,
   "myblogitems":  <div className='top-0 left-0 w-full h-full absolute z-0'>
   <div className='h-1/4 w-full bg-[#C5EBAA]'></div>
   <div className='h-1/4 w-full bg-[#C5EBAA]'></div>
   <div className='h-1/4 w-full bg-[#C5EBAA]'></div>
   <div className='h-1/4 w-full bg-[#C5EBAA]'></div>
   </div>,
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!collections.length) {
    return <Container  classes={`flex justify-center items-center h-screen relative`}>
        <Loader/>
    </Container>
  }

  return (
    <ul>
      {Object.entries(SectionIndex).map(([collectionName, index]) => (
        <li key={index}>
          {/* Pass the collectionName and corresponding index as props to the Section component */}
          <Section
            collectionName={collectionName}
            index={index}
            renderType={SectionToRenderType[collectionName]}
            classes={sectionClasses[collectionName]}
            backgroundItem={backgroundToSection[collectionName]}
          />
        </li>
      ))}
    </ul>
  );
}

export default Sections;
