import React, { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full p-4 md:p-20 bg-yellow-400'>
      <h1 className='text-2xl md:text-4xl lg:text-[4vw] leading-[1.2] md:leading-[4.5vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need to
        raise funds, sell products, explain complex ideas, and hire great people.
      </h1>

      <div className='w-full border-t-2 my-8 md:my-20 border-yellow-500' />

      <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
        <p className='text-lg md:text-xl font-semibold w-full md:w-1/4'>
          What you can expect:
        </p>
        <p className='text-base md:text-lg w-full md:w-1/2'>
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether it's live or digital, delivered for one
          or a hundred people.
        </p>
        {/* <p className='text-lg md:text-xl font-semibold w-full md:w-1/4 mt-4 md:mt-0'>
          S:
        </p> */}
      </div>

      <div className='w-full border-t-2 my-8 md:my-20 border-yellow-500' />

      <div className='flex flex-col md:flex-row gap-8 pt-8 md:pt-20'>
        <div className='w-full md:w-1/2'>
          <h1 className='text-3xl md:text-6xl mb-6 md:mb-10'><span className='font-bold'>Our Approach</span></h1>
          <motion.button 
            className='px-6 py-4 md:px-10 md:py-6 bg-zinc-900 text-white flex items-center gap-3'
            animate={{ borderRadius: isButtonHovered ? '0px' : '9999px' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Read More
            <div className='w-2 h-2 bg-white rounded-full' />
          </motion.button>
        </div>
        <div className='w-full md:w-1/2 h-[40vh] md:h-[70vh] rounded-xl overflow-hidden'>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=1600&fit=crop&q=80" 
            alt="Team collaboration"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
