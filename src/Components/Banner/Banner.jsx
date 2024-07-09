import React from 'react'
import coverimg from "../../assets/coverimg.jpg"
import appstore from "../../assets/appstore.png"
import playstore from "../../assets/playstore.png"
import { motion } from 'framer-motion'



const bannerstyle = {
    backgroundImage: `url(${coverimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  };

export const BannerX = () => {
  return (
    <div className='container my-14'>
      <div style={bannerstyle} className='sm:min-w-[400px] sm:flex sm:justify-end sm:items-center rounded-xl py-6 sm:py-24'>
        <div>
            <div className='space-y-6 max-w-xl mx-auto'>
                <motion.h1 className='text-2xl text-center sm:text-4xl font-semibold'
                 initial={{opacity:0, y: 100}}
                 whileInView={{opacity:1 ,y: 0}}
                  transition={{
                    type:"spring",
                    stiffness: 100,
                    damping: 10,
                    delay:0.2
                  }}
                >Download the app</motion.h1>
                <motion.p className='text-center sm:px-20'
                  initial={{opacity:0, y: 100}}
                  whileInView={{opacity:1 ,y: 0}}
                   transition={{
                     type:"spring",
                     stiffness: 100,
                     damping: 10,
                     delay:0.3
                   }}
                >Lorem ipsum dolor sit amet consedolor sit amet consectetur
                     adipisicing elit. Officiis{" "}</motion.p>

                     {/**image links */}
                     <div className='flex justify-center items-center gap-4'>
                        <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img src={appstore} alt='appstore'
                             initial={{opacity:0, y: 100}}
                             whileInView={{opacity:1 ,y: 0}}
                              transition={{
                                type:"spring",
                                stiffness: 100,
                                damping: 10,
                                delay:0.4
                              }}
                            />
                        </a>
                        <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img src={playstore} alt='playstore'
                               initial={{opacity:0, y: 100}}
                               whileInView={{opacity:1 ,y: 0}}
                                transition={{
                                  type:"spring",
                                  stiffness: 100,
                                  damping: 10,
                                  delay:0.5
                                }}
                            />
                        </a>
                     </div>
            </div>

        </div>
      </div>
    </div>
  )
}
