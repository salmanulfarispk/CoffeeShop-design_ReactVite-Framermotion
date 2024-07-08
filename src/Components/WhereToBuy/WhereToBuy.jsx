import React from 'react'
import worldmap from "../../assets/worldmap.png"

const WhereToBuy = () => {
  return (
    <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
          {/*form section*/}
           <div className='space-y-8'>
            <h1 className='text-4xl font-bold text-darkGray font-serif'>Buy our products from anywhere</h1>
            <div className='flex items-center gap-4'>
              <input type='text' placeholder='Name'
               className='input-style w-full lg:w-[150px]'
               />
              <input type='email' placeholder='Email'
               className='input-style w-full '
              />
            </div>
            <div className='flex items-center gap-4'>
              <input type='text' placeholder='Country'
               className='input-style w-full'
               />
              <input type='text' placeholder='Zipcode'
               className='input-style w-full lg:w-[150px]'
              />
            </div>
              
              <button className='primary-btn w-full hover:bg-primaryDArk duration-200'>Order Now</button>

           </div>
          {/*worldmap section*/}
          <div className='col-span-2'>
            <img src={worldmap} alt='map'
             className='w-full sm:w-[500px] mx-auto' //mx-auto,used to center an element horizontally within its parent container.
            />
          </div>
        </div>
    </div>
  )
}

export default WhereToBuy