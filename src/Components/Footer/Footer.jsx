import React from 'react'
import creditcards from "../../assets/creditcard.webp"
import { FaFacebook,FaGoogle ,FaInstagram,FaPhone,FaTelegram} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";



const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className='bg-gradient-to-r from-primary to-primaryDArk pt-12 pb-8 text-white'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {/**company details */}
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
              <div className='space-y-6'>
                 <h1 className='text-3xl font-bold '>
                    Quick Links
                 </h1>
                  <div className='grid grid-cols-2 gap-3'>
                     <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                     </div>
                     <div>
                        <ul className='space-y-2'>
                            <li>products</li>
                            <li>service </li>
                            <li>Details us</li>
                            <li>Others</li>
                        </ul>
                     </div>
                  </div>
              </div>
              {/** social links*/}
                <div className='space-y-6'>
                       <h1 className='text-3xl font-bold'>
                       Follow Us
                       </h1>
                       <div className='flex items-center gap-3'>
                         <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                         <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                         <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                         <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                       </div>
                       <div>
                        <h1 className='text-xl mb-2 font-semibold'>Payment Methods</h1>
                        <img src={creditcards} alt='FkU'
                        className='w-[80%]'
                        />
                       </div>
                </div>
            </div>

             {/**copyright section */}

             <p className='text-white text-center mt-8 pt-8 border-t-2'>
                    Copyright &copy; {year} CodersCofffe. All rights reserved.
                 </p>
        </div>
    </div>
  )
}

export default Footer