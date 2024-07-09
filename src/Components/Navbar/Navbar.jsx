import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';

export const Navbar = ({openSidebar,setSidebarOpen}) => {

    return (
        <nav className='absolute top-0 left-0 w-full  pt-10 text-white z-50'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    {/*logo section */}

                    <motion.h1 className='text-2xl font-semibold uppercase'
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}
                    >
                        <span className='text-primary'>Coders</span> Coffee.
                    </motion.h1>

                    {/*menubar section */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}

                        onClick={()=> setSidebarOpen(!openSidebar)}
                    >
                        <GiHamburgerMenu className='text-3xl cursor-pointer' />
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}
