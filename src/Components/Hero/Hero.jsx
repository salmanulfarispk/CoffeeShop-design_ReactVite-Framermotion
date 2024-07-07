import React from 'react'
import BgImage from "../../assets/bg-slate.png"
import BlackCoffe from "../../assets/black.png"

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
          {/*Hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
            {/*text content section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>

              <h1 className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
              <div className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Black Lifestyle Lovers</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>coffee is a celebration of culture, community, and creativity. Every sip fuels ambition and connection turning everyday moments into cherished rituals. Embrace the
                    richness of coffee and elevate your lifestyle with every cup</h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 '>
                </div>
              </div>

            </div>

            {/*Hero image section */}
            <div className='relative'>
              <img src={BlackCoffe}
                alt='coffee-main'
                className='relative z-40 h-[400px] md:h-[700px] img-shadow'
              />
              {/*orange Ring circle */}
              <div className='absolute top-24 -right-16
                      border-primary rounded-full w-[180px] h-[180px] border-[20px] z-10'>
              </div>
              {/*background big text */}
              <div className='absolute -top-20 left-[200px] z-[1]'>
                <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none '>
                  Blvck Tumbler
                </h1>
              </div>
            </div>

            {/*Third div section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>

              <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
              <div className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Blvck Tumbler</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>Experience the pure essence of coffee with our black tumbler brew. Bold, robust, and unapologetically rich—perfect 
                    for those who savor the true taste of coffee.Simply savor the bold essence of black tumbler coffee.</h1>
                </div>
                <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50 '>
                </div>
              </div>

            </div>
            <div></div>

          </div>
        </div>

      </section>
    </main>
  )
}

export default Hero