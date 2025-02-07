import React from 'react';
import Dash from './Dash';
import ServiceCard from './ServiceCard';
 
const servicesData = [
    {
        img:"/services.jpg",
        title:"Professional Kitchen",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque , odio",
    },

    {
        img:"/services1.jpg",
        title:"Delivery",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque , odio",
    },

    {
        img:"/services2.jpg",
        title:"Professional Kitchen",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque , odio",
    },

    {
        img:"/services3.jpg",
        title:"Professional Kitchen",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque , odio",
    },
]


 const Services = () => {
  return (
    <div className='container pt-40'>
        <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                Choose Best <span className='text-accent'>Service</span>
            </h2>
            <p className='text-gray-700'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Libero repellendus voluptatum debitis accusantium error, facere autem.
                <br />
                temporibus deserunt perspiciatis.
            </p>
            <div className='w-fit mx-auto'>
                <Dash />
            </div>
        </div>



        <div className='grid gap-10 md:grid-cols-4 md:gap-4 pt-8'>
            {servicesData.map((item, index) => (
             <ServiceCard 
            key={index}
             img={item.img} 
            title={item.title}
             desc={item.desc} />
            ))}
        </div>
    </div>
  )
}

export default Services;
