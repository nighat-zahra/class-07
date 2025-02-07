import React from 'react'
import Image from 'next/image';


const Feature = () => {
  return (

    <div>
      <h1 className='flex text-4xl sm:text-6xl font-bold justify-center items-center'>Enjoy Delicious <span  className='text-accent'>Food</span></h1>
    <div className='relative min-h-screen'>
    <Image className='lg:w-[580px] xl:w-[620px] h-auto absolute pt-5'
     src="/grid_1.jpg"
      width={1000}
       height={600} 
       alt='hero-bg'
        />
      
        <div className='container h-[clac(100vh-120px)] grid items-center '>
        <Image className='lg:w-[580px] xl:w-[620px] h-auto relative ml-[650px] pt-5'
     src="/grid_2.jpg"
      width={1000}
       height={600} 
       alt='hero-bg'
        />
<div className='container h-[clac(100vh-120px)]  items-center pt-10 flex justify-center  '>
        <Image className='lg:w-[580px] xl:w-[700px] h-auto relative flex justify-center items-center '
     src="/grid_4.jpeg"
      width={1000}
       height={600} 
       alt='hero-bg'
        />
          </div>
          </div>
          </div>
          </div>
  )
}

export default Feature;