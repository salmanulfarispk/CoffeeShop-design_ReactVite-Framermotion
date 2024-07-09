import React, { useState } from 'react'
import BgImage from "../../assets/bg-slate.png"
import BlackCoffe from "../../assets/black.png"
import { Navbar } from '../Navbar/Navbar'
import { motion } from "framer-motion"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
}

const Hero = () => {

  const [openSidebar, setSidebarOpen] = useState(false)

  return (
    <main style={bgImage}>
      <section className='relative min-h-[750px] w-full'>
        <div className='container'>

          {/*Navbar section */}
          <Navbar openSidebar={openSidebar} setSidebarOpen={setSidebarOpen} />
          {/*Hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
            {/*text content section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>

              <motion.h1 className='text-7xl font-bold leading-tight ml-14'
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div className='relative'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
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
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{once: true}}
                transition={{
                  type: "spring",
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
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
              >
              </motion.div>
              {/*background big text */}
              <motion.div className='absolute -top-20 left-[200px] z-[1]'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
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
            <div className='hidden lg:block'>
            <motion.div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
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
                <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50 '>
                </div>
              </div>

            </motion.div>
            </div>

          </div>
        </div>

        {/** sidebar menu section  */}

        {openSidebar && (
          <motion.div className='absolute top-0 right-0 w-[140px] h-full
           bg-gradient-to-b from-primary/80 to-primaryDArk/80 backdrop-blur-sm z-40'
            initial={{x: "100%"}}
            whileInView={{x: 0}}
           >
            <div className='w-full h-full flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center gap-6 text-white'>
                {/**line */}
                <div className='w-[1px] h-[70px] bg-white'></div>

                {/**social icons */}
                <div className='inline-block rounded-full p-2 cursor-pointer border border-white hover:scale-125 duration-300'>
                  <FaFacebookF className='text-2xl' />
                </div>
                <div className='inline-block rounded-full p-2 cursor-pointer border border-white hover:scale-125 duration-300'>
                  <FaTwitter className='text-2xl' />
                </div>
                <div className='inline-block rounded-full p-2 cursor-pointer border border-white hover:scale-125 duration-300'>
                  <FaInstagram className='text-2xl' />
                </div>

                <div className='w-[1px] h-[70px] bg-white'></div>
              </div>
            </div>
          </motion.div>
        )}


      </section>
    </main>
  )
}

export default Hero