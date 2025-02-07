import React from 'react'
import Image from 'next/image';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
   <div className='container pt-40'>
        <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                Our <span className='text-accent'>Menu</span>
            </h2>
            <p className='text-gray-700'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
               excepturi beatae iure sed vero ad corporis laborum autem
            </p>
            <div className='w-fit mx-auto'>
                
            </div>
        </div>
        <ul className='mt-10 hidden sm:flex gap-10 lg:gap-20 w-fit mx-auto'>
            <li className='bg-accent text-white p-1'>Appetizers</li>
            <li>Breakfast</li>
            <li>Salads</li>
            <li>Meat and Fish</li>
            <li>Soup</li>
            <li>Desert</li>
            <li>Drinks</li>
        </ul>
      <div className='grid lg:grid-cols-[35%, 1fr] gap-10 pt-10'>
        <div className='w-fit mx-auto'>
            <Image className='w-[100%] mx-w-[400px] h-auto'
            src="/menu-left.jpg"
             width={500} 
             height={500} 
             alt='Dish'
             />
              <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                Choose <span className='text-accent'>Food</span>
            </h2>
            <p className='text-gray-700'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
               excepturi beatae iure sed vero ad corporis laborum autem
            </p>
            <div className='w-fit mx-auto'>
                
            </div>
        </div>
        <ul className='mt-10 hidden sm:flex gap-10 lg:gap-20 w-fit mx-auto'>
            <li className='bg-accent text-white p-1'>Fresh Fish</li>
            <li>Sweets</li>
            <li>Juices</li>
            <li>Meal</li>
            <li>Egg</li>
            <li>Tea</li>
            <li>Fruits</li>
            </ul>
       
        </div>
        <div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>
           
        </div>
      </div>
    </div>
  );
}

export default Menu