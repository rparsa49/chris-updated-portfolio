import React from 'react';
import headshot from './headshot.png'

export default function About() {
    return(
        <section id='about'>
            <div className='container mx-auto flex px-10 py-20 md:flex-row items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                        Hi, I'm Chris!
                        <br className='hidden lg:inline-block'></br>
                        I'm a Computer Engineering Junior at SBU.
                    </h1>    
                        <p className='mb-8 leading-relaxed'>
                        I'm an aspiring microchip/embedded system designer. 
                        My current interests are in FRONT END VLSI/Computer Architecture, AV Systems, and VHDL entity creation. 
                        I want to be part of the next generation of chip designers & hardware engineers. 
                        I want to make computing more energy efficient and affordable for the world throughout my career.
                        </p>
                        <div className='flex justify-center'>
                            <a href="#projects"
                            className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
                            See My Past Work
                            </a>
                            <a href="#contact"
                            className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                            Reach Out To Me
                            </a>
                        </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img
                        className='object-cover object-center h-64 w-64 rounded-full drop-shadow-lg'
                        alt='chris'
                        src={headshot}
                    />
                </div>
            </div>
        </section>
    )
}
