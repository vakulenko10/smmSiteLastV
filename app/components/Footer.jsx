"use client"
import Link from 'next/link'
import  Container  from './Container'
import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { useLanguage } from './LanguageContext';
const Footer = () => {
    const { language } = useLanguage()
  return (
    <div className={`bg-[#9CAFAA]  ${language=="ua"?'uaLang':'enLang'}`}>
        <Container>
            <div className='flex flex-col md:flex-row py-5 px-3 justify-between items-center '>
                <div className='links flex flex-row'>
                    <Link title='linkedin' target="_blank" href="https://www.linkedin.com/in/"><FaLinkedin className=" fill-[#fff] hover:fill-[#686868b7] transition" size={30} /></Link>
                    {/* <Link title='github' target="_blank" href="https://github.com/vakulenko10"><FaGithub className="fill-[#3e3e3e]  hover:fill-[#686868b7] transition" size={30}/></Link> */}
                    
                </div>
                <div className='text-center md:text-end text-white ' >
                    <h5>it was really nice to see you here...</h5>
                    <h5>made by <Link  target="_blank" href="https://www.linkedin.com/in/vitalik-vakulenko/" className=' underline text-[#fff]'>Vakulenko</Link> </h5>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer