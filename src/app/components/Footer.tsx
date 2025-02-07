import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='container pt-40'>
        <div className='grid md:grid-cols-3 gap-16'>
            <div className='space-y-4'>
                <h2 className='text-xl font-bold'>About Us</h2>
                <p className='leading-[1.8]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Consequuntur fugiat  ratione atque voluptate, quam deserunt 
                     cum ullam culpa eveniet eligendi nobis quisquam illo 
                     laboriosam quidem provident odio commodi excepturi. Itaque.
                </p>
            </div>

            <div className='space-y-4'>
                <h2 className='text-xl font-bold'>The Resturant</h2>
                <ul className='space-y-2'>
                    <li>About Us</li>
                    <li>Chefs</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <div className='flex gap-8 text-accent text-2xl pt-16'>
                <FaGithub />
                <FaXTwitter />
                <FaLinkedin />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer