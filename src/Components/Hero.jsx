import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen'>
        <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
        alt='/'
        />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/40' />
            <div className='w-full h-full text-white absolute top-0 flex flex-col justify-center'>
                <div className='md:left-[10%] max-w-[1400px] absolute p-4 m-auto'>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                    <p className='py-2 max-w-[600px] drop-shadow-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eveniet sit a velit numquam sequi ipsam minus natus magni ea!</p>
                    <button className='bg-white text-black'>Reserve Now</button>
                </div>
            </div>
    </div>
  )
}

export default Hero