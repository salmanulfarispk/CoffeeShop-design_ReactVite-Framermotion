import React from 'react'
import BgImage from "../../assets/bg-slate.png"
import BlackCoffe from "../../assets/black.png"
import { Navbar } from '../Navbar/Navbar'
import {motion} from "framer-motion"

const Hero = () => {

  const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }

  return (
    <main style={bgImage}>
      <section className='min-h-[750px] w-full'>
        <div className='container'>

          {/*Navbar section */}
            <Navbar/>
          {/*Hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
            {/*text content section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>

              <motion.h1 className='text-7xl font-bold leading-tight ml-14'
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                 transition={{
                  type:"spring",
                   stiffness: 100,
                   damping: 10,
                   delay: 1,
                   }}
                >
                Blvck Tumbler
                </motion.h1>
              <motion.div className='relative'
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                 type:"spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                  }}  
               >
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Black Lifestyle Lovers</h1>
                  <h1 className='text-sm opacity-55 leading-loose'> Every sip fuels ambition and connection turning everyday moments into cherished rituals. Embrace the
                    richness of coffee and elevate your lifestyle with every cup.</h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 '>
                </div>
              </motion.div>

            </div>

            {/*Hero image section */}
            <div className='relative'>
              <motion.img src={BlackCoffe}
                 initial={{opacity: 0, scale: 0}}
                 animate={{opacity: 1, scale: 1}}
                 transition={{
                  type:"spring",
                   stiffness: 100,   //it determines how fast the spring snaps back to its original position.Higher values results quicker animation and Lower values create a softer animation.
                   damping: 10,      //it controls how much the spring oscillates or bounces before settling.Higher values results more damping, which slows down the animation.so lower values is better.
                   delay: 0.4,
                   }}  
                alt='coffee-main'
                className='relative z-40 h-[400px] md:h-[700px] img-shadow'
              />
              {/*orange Ring circle */}
              <motion.div className='absolute top-24 -right-16
                 border-primary rounded-full w-[180px] h-[180px] border-[20px] z-10'
                 initial={{opacity: 0, y: 100}}
                 animate={{opacity: 1, y: 0}}
                 transition={{
                  type:"spring",
                   stiffness: 100,
                   damping: 10,      
                   delay: 0.8,
                   }}  
              >
              </motion.div>
              {/*background big text */}
              <motion.div className='absolute -top-20 left-[200px] z-[1]'
               initial={{opacity: 0, x: -100}}
               animate={{opacity: 1, x: 0}}
               transition={{
                type:"spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 0.8,
                 }}  
              >
                <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none '>
                  Blvck Tumbler
                </h1>
              </motion.div>

            </div>

            {/*Third div section */}
            <motion.div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0}}
              transition={{
               type:"spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
                }}  
            >

              <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
              <div className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Blvck Tumbler</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>Experience the pure essence of coffee with our black tumbler brew. Bold, robust, and unapologetically rich—perfect 
                    for those who savor the true taste of coffee.</h1>
                </div>
                <div className='absolute -top-6 -right-10 w-[275px] h-[190px] bg-darkGray/50 '>
                </div>
              </div>

            </motion.div>

          </div>
        </div>

      </section>
    </main>
  )
}

export default Hero