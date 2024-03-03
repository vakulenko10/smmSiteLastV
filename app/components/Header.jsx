
"use client"
import React, { useEffect, useState } from 'react';
import Container from './Container';
import HeaderBurger from './headerBurger';
import LinksContainer from './LinksContainer';

// const [isSmallHeaderActive, setIsSmallHeaderActive] = useState(false);
{/* <LinksContainer isSmallHeaderActive={isSmallHeaderActive} setIsSmallHeaderActive={setIsSmallHeaderActive}/> */}
const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isSmallHeaderActive, setIsSmallHeaderActive] = useState(false);
  const [windowYPosition, setWindowYPosition] = useState(window.scrollY)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setWindowYPosition(currentScrollPos);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < window.innerHeight-1);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  const handleBurgerChange = (e) => {
    setIsSmallHeaderActive(e.target.checked);
  };
  return (
    <header className={`w-full bg-[#f8f8f8b1] backdrop-blur fixed z-[999] ${visible ? '' : 'hidden'} ${windowYPosition<window.innerHeight?"bg-transparent md:text-[#e9e9e9]":"bg-[#f8f8f8b1]"}`}>
      <Container>
        <nav className="px-4 lg:px-6 py-2.5 flex justify-between items-center">
          <h5 className={`text-2xl md:visible ${windowYPosition===0?'text-[#e9e9e9]':''} `}>anya trubitsyna</h5>
          <LinksContainer isSmallHeaderActive={isSmallHeaderActive} setIsSmallHeaderActive={setIsSmallHeaderActive} setVisible={setVisible} windowYPosition={windowYPosition} prevScrollPos={prevScrollPos}/>
          <HeaderBurger classes={''} handleBurgerChange={handleBurgerChange} isSmallHeaderActive={isSmallHeaderActive} windowYPosition={windowYPosition}/>
        </nav>
      </Container>
    </header>
  );
};

export default Header;