import React from 'react'
import { motion } from 'framer-motion'
import Coffee1  from "../../assets/blackCoffee.png"
import Coffee2  from "../../assets/Hot.png"
import Coffee3  from "../../assets/cold.png"




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
 ];

 const cardVariants={
     hidden:{opacity:0 ,y: 20},
     visible:{
        opacity: 1,
         y: 0,
         transition:{
            type:"spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut"
         },
        },
 }

 const containerVariants={
    hidden:{opacity:1},
    visible:{
        opacity:1,
        transition:{
            delay:0.6,
            staggerChildren: 0.4   //delay between animations
        }
    }
 }

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
        {/**Header section */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1 className='text-3xl font-bold text-lightGray'
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
            <motion.p className='opacity-80'
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
          
         <motion.div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
            initial="hidden" 
            whileInView={"visible"}
            viewport={{ amount: 0.8 }}  //means the animation will trigger when 80% of the element is visible in the viewport.
            variants={containerVariants}
         >
            {servicesData.map((item)=>(
                <motion.div key={item.id} className='text-center p-4 space-y-6'
                 variants={cardVariants}
                >
                   <img src={item.image} alt='blackCofee'
                    className='img-shadow2 max-w-[200px] mx-auto hover:scale-125 duration-300 cursor-pointer'
                   />
                      <div className='space-y-2'>
                        <h1 className='text-2xl text-primary font-bold'>{item.title}</h1>
                        <h1 className='text-darkGray'>{item.desc}</h1>
                      </div>
                </motion.div>
            ))}
         </motion.div>
    </div>
  )
}

export default Services