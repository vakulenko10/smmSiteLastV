"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import Section from './Section';
import { SectionIndex, SectionToRenderType, sectionClasses } from './mainconsts';
import Container from './Container';
import Loader from './Loader';
import { motion, useTransform, AnimatePresence, useInView, useAnimation, useScroll } from 'framer-motion';

import Link from 'next/link';
export const HelloBg = ({collectionName}) => {
  // const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // Get scroll position using useScroll
  
  const x = useTransform(scrollYProgress, [0,1], [0, -7000]);
  return (
    
        <AnimatePresence>
          <motion.div key={`${collectionName}-bg`} ref={ref} className={` absolute top-0 bg-no-repeat ease-in-out w-full h-full bg-cover bg-[url('https://res.cloudinary.com/dohnhiqxw/image/upload/v1711404877/welcome/k2tesksq0u6lxaocowmz.png')] md:bg-[url('https://res.cloudinary.com/dohnhiqxw/image/upload/v1711404109/welcome/hmz2xaw4e1lhrbedvx4t.png')]`}>
            
          </motion.div>
          <motion.div  className='absolute w-full h-1/4 bottom-0'>
              <Link href="#"><img className="absolute bottom-0 left-0 h-1/2 rotate-[-45deg]" src="https://res.cloudinary.com/dohnhiqxw/image/upload/v1711407499/aboutMe/smb3q0fheymjqvg3orcg.png" alt="image"/></Link>
              </motion.div>
    </AnimatePresence>
  );
};
export const AboutBg = ({collectionName}) => {
  // const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // Get scroll position using useScroll
  
  const x = useTransform(scrollYProgress, [0,1], ['-30%', '100%']);
  return (
    <div key={collectionName}>
     
        <motion.div ref={ref} >
        
          <motion.div className='h-1/6 overflow-y-hiddden md:h-auto ease-in-out absolute w-full bg-[#d6dac867] backdrop-blur top-0 overflow-x-visible text-nowrap '>
            <motion.h3
              className=' text-no-wrap ease-in-out w-full z-[10000] text-[#D6DAC8] font-bold text-[60px] md:text-[100px]'
              style={{x: x }}
              transition={{ type: 'tween', stiffness: 120, damping: 20 }}
            >
             <span className='text-[#FBF3D5]'  >Welcome</span> to my website<span className='text-[#FBF3D5]'>.</span>
            </motion.h3>
            
          </motion.div>
          <motion.div className='absolute w-full h-1/4 bottom-0'>
            <Link href="#">
            <img className="absolute bottom-0 right-0 h-2/3 rotate-[45deg]" src="https://res.cloudinary.com/dohnhiqxw/image/upload/v1711406822/aboutMe/i6soy7aej5zqe7pldbfu.png"  alt="image"></img></Link>
          </motion.div>
        </motion.div>
    </div>
  );
};
export const PortfolioBg = ({collectionName}) => {
  // const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // Get scroll position using useScroll
  
  const x = useTransform(scrollYProgress, [0,1], [0, -7000]);
  return (
    
        <AnimatePresence>
          <motion.div key={`${collectionName}-bg`} ref={ref} className={` z-100 absolute top-0 bg-no-repeat ease-in-out w-full h-full bg-cover bg-[url('https://res.cloudinary.com/dohnhiqxw/image/upload/v1711404877/welcome/k2tesksq0u6lxaocowmz.png')] md:bg-[url('https://res.cloudinary.com/dohnhiqxw/image/upload/v1711404109/welcome/hmz2xaw4e1lhrbedvx4t.png')]`}>
            
          </motion.div>
          <motion.div  className='absolute w-full h-1/4 bottom-0 '>
              <Link href="#"><img className="absolute bottom-0 left-0 w-[100px] h-auto rotate-[-45deg] z-100" src="https://res.cloudinary.com/dohnhiqxw/image/upload/v1711472633/myPortfolio/aus6rmappv4anxjtfdkg.png" alt="image"/></Link>
              </motion.div>
    </AnimatePresence>
  );
};
export const FAQSbg = ({collectionName}) => {
  // const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // Get scroll position using useScroll
  
  const x = useTransform(scrollYProgress, [0,1], [0, -7000]);
  return (
    
        <AnimatePresence>
          <motion.div key={`${collectionName}-bg`} ref={ref} className={` z-100 absolute top-0 bg-no-repeat ease-in-out w-full h-full bg-cover bg-[url('https://res.cloudinary.com/dohnhiqxw/image/upload/v1711476203/myPortfolio/jrvfpswa3vancjlwp5a0.png')]`}>
            
          </motion.div>
          <motion.div  className='absolute w-full h-1/4 bottom-0 '>
              <Link href="#"><img className="absolute bottom-0 right-0 w-[60px] h-auto rotate-[`10deg`] z-100 " src="https://res.cloudinary.com/dohnhiqxw/image/upload/v1711644319/qhg0glehadtke4wbzift.png" alt="image"/></Link>
              </motion.div>
    </AnimatePresence>
  );
};
export const MyBlogBg = ({collectionName}) => {
  // const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // Get scroll position using useScroll
  
  const x = useTransform(scrollYProgress, [0,1], [0, -7000]);
  return (
    
        <AnimatePresence>
          <motion.div key={`${collectionName}-bg`} ref={ref} className={` z-100 absolute bottom-0 bg-no-repeat ease-in-out w-full h-1/6 bg-cover bg-[url('https://res.cloudinary.com/dohnhiqxw/image/upload/v1711643408/myBlog/nk2bbkf9vd7pzyddtibq.png')]`}>
            
          </motion.div>
          <motion.div  className='absolute w-full h-1/4 bottom-0 '>
              <Link href="#"><img className="absolute bottom-0 left-0 w-[80px] h-auto rotate-[-45deg] z-100" src="https://res.cloudinary.com/dohnhiqxw/image/upload/v1711643999/myBlog/de0avjqbfegpr6cnnh12.png" alt="image"/></Link>
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
    "aboutmeitems": <AboutBg collectionName="aboutBGRenderComponent"/>,
    "helloitems": <HelloBg collectionName="WelcomeBGRenderComponent"/>,
    "myportfolioitems": <PortfolioBg collectionName="PortfolioBGRenderComponent" />,
    "faqsitems": <FAQSbg collectionName="FAQSBGRenderComponent"/>,
    "myblogitems":<MyBlogBg collectionName="BlogBGRenderComponent"/>

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
    <div>
      {Object.entries(SectionIndex).map(([collectionName, index]) => (
        <div key={`${collectionName}-${index}`}>
          {/* Pass the collectionName and corresponding index as props to the Section component */}
          <Section
            
            // key={`${collectionName}-${index}`}
            collectionName={collectionName}
            index={index}
            renderType={SectionToRenderType[collectionName]}
            classes={sectionClasses[collectionName]}
            backgroundItem={backgroundToSection[collectionName]}
          />
        </div>
      ))}
    </div>
  );
}

export default Sections;
