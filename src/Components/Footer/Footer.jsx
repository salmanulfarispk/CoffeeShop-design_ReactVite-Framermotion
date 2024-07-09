import React from 'react'
import creditcards from "../../assets/creditcard.webp"
import { FaFacebook,FaGoogle ,FaInstagram,FaPhone,FaTelegram} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDArk pt-12 pb-8 text-white'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {/**compant details */}
              <div className='space-y-6'>
                <h1 className='text-3xl font-bold uppercase'>
                  Coders Cafe
                </h1>
                <p className='text-sm max-w-[300px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores
                </p>
                <div>
                    <p className='flex items-center gap-2'>
                    <FaPhone/>
                    +91 8086080155
                    </p>
                    <p className='flex  items-center gap-2 mt-2'>
                       {" "} <FaMapLocation/> Calicut,kerala
                    </p>    
                </div>
              </div>
              {/** Links section*/}
              {/** social links*/}

            </div>
        </div>
    </div>
  )
}

export default Footer