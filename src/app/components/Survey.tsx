import Image from 'next/image'
import React from 'react'

const Survey = () => {
  return (
    <div className='container pt-40'>
        <div className='grid lg:grid-cols-[50%, 1fr] gap-20'>
        <div className='flex justify-center items-center'>
        <Image 
        className='w-[100%] h-auto lg:w-auto lg:h-[90vh] flex justify-center items-center'
        src="/survey.jpeg"
        width={1000}
        height={600}
        alt='survey image'
        />
        </div>
        <div className='self-center'>
            <h2 className='text-4xl md:text-6xl font-bold pt-3 '>Survey
            About Our <span className='text-accent'>Food</span>
            </h2>
            <p className='text-gray-700 pt-16  flex justify-center items-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis maxime 
                dolore tempore minus? Repellat, eaque! Neque laboriosam id quis dolorem vel 
                dicta similique voluptates! Error nobis eveniet inventore veniam debitis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis maxime 
                dolore tempore minus? Repellat, eaque! Neque laboriosam id quis dolorem vel 
                dicta similique voluptates! Error nobis eveniet inventore veniam debitis.
                </p>
        </div>
        </div>

    </div>
  )
}

export default Survey