import React from 'react'
import { motion } from 'framer-motion'



 const servicesData=[
    {
        id:1,
        image: Coffee1,
        title: "Black Coffee",
        desc:"Experience the bold, pure essence of black coffee in every invigorating sip."
    },
    {
        id:2,
        image: Coffee2,
        title: "Hot Coffee",
        desc:"Savor the warmth and rich aroma of our freshly brewed hot coffee."
    },
    {
        id:3,
        image: Coffee3,
        title: "Cold Coffee",
        desc:"Refresh yourself with the smooth and invigorating taste of our chilled cold coffee."
    },
 ]

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
        {/**Header section */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1 className='text-4xl font-bold text-lightGray'
              initial={{opacity: 0, y:100}}
              whileInView={{opacity:1 ,y: 0}}
              transition={{
                type:"spring",
                stiffness: 150,
                damping: 10,
                delay: 0.2
            }}
            >
                Fresh and <span className='text-primary'>Tasty coffee</span>
            </motion.h1>
            <motion.p className='text-lg opacity-80'
               initial={{opacity: 0, scale: 0.5}}
               whileInView={{opacity:1 ,scale: 1}}
               transition={{
                 type:"spring",
                 stiffness: 150,
                 damping: 10,
                 delay: 0.6
             }}
            >Indulge in the rich, invigorating flavor of 
             our fresh and tasty coffee, brewed to perfection every time.</motion.p>
        </div>
        {/**card section */}
          
         <div>


            
         </div>
    </div>
  )
}

export default Services