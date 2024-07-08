import React from 'react'
import worldmap from "../../assets/worldmap.png"
import { motion } from 'framer-motion'

const WhereToBuy = () => {
  return (
    <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
          {/*form section*/}
           <div className='space-y-8'>

            <motion.h1 className='text-4xl font-bold text-darkGray font-serif'
              initial={{opacity:0 , y: 100}}
              whileInView={{opacity:1,y: 0}}  //whileInview ,Continuously animates an element whenever we scroll and view.
              transition={{ 
                type:"spring",
                stiffness: 100,
                damping:10,
                delay:0.2
              }}
            >Buy our products from anywhere</motion.h1>

            <motion.div className='flex items-center gap-4'
               initial={{opacity:0 , y: 100}}
               whileInView={{opacity:1,y: 0}}  
               transition={{ 
                type:"spring",
                stiffness: 100,
                damping:10,
                 delay:0.4
               }}
            >
              <input type='text' placeholder='Name'
               className='input-style w-full lg:w-[150px]'
               />
              <input type='email' placeholder='Email'
               className='input-style w-full '
              />
            </motion.div>
            <motion.div className='flex items-center gap-4'
               initial={{opacity:0 , y: 100}}
               whileInView={{opacity:1,y: 0}}  
               transition={{ 
                type:"spring",
                stiffness: 100,
                damping:10,
                 delay:0.6
               }}
            >
              <input type='text' placeholder='Country'
               className='input-style w-full'
               />
              <input type='text' placeholder='Zipcode'
               className='input-style w-full lg:w-[150px]'
              />
            </motion.div>
              
              <motion.button className='primary-btn w-full hover:bg-primaryDArk duration-200'
               initial={{opacity:0 , y: 100}}
               whileInView={{opacity:1,y: 0}}  
               transition={{ 
                type:"spring",
                stiffness: 100,
                damping:10,
                 delay:0.8
               }}
              >Order Now</motion.button>

           </div>
          {/*worldmap section*/}
          <div className='col-span-2'>
            <motion.img src={worldmap} alt='map'
            initial={{opacity:0,scale: 0.5}}
            whileInView={{opacity:1 ,scale: 1}}
             transition={{
                type:"spring",
                stiffness: 100,
                damping:10,
                 delay: 1
             }}
             className='w-full sm:w-[500px] mx-auto' //mx-auto,used to center an element horizontally within its parent container.
            />
          </div>


        </div>
    </div>
  )
}

export default WhereToBuy