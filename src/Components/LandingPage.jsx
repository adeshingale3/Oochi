import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightUpLine, RiArrowRightDownLine } from "react-icons/ri";
import { CircularRevealHeading } from './CircularRevealHeading';

const circularItems = [
  {
    text: "STRATEGY",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
  },
  {
    text: "DESIGN",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop"
  },
  {
    text: "GROWTH",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop"
  },
  {
    text: "INNOVATION",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop"
  }
];

function LandingPage() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='h-screen w-full pt-16 md:pt-1'>
      <div className='flex items-center justify-between px-4 md:px-20 mt-10 md:mt-52'>
        <div className='textstructure'>
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
            <div key={index} className='masker overflow-hidden'>
              <div className='flex items-end'>
                {index === 1 && (
                  <motion.div
                    className='mr-[1vw] w-[8vw] h-[5.7vw] hidden md:block rounded-md overflow-hidden'
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ duration: 0.8 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" 
                      alt="Team collaboration" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
                <h1 className='uppercase text-4xl md:text-6xl lg:text-8xl leading-[1.1] md:leading-[5.5vw] tracking-tighter font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Reveal Heading on the right */}
        <div className='hidden lg:block'>
          <CircularRevealHeading
            items={circularItems}
            centerText={
              <div className="text-lg font-bold text-black">
                OOCHI
              </div>
            }
            size="md"
          />
        </div>
      </div>

      <div className='border-t-2 mt-10 md:mt-32 flex flex-col md:flex-row gap-4 md:gap-0 px-4 md:px-20 py-3'>
        {["For Public and Private Companies", "From the First Pitch to IPO"].map((item, index) => (
          <p key={index} className='text-sm md:text-md font-light leading-none'>
            {item}
          </p>
        ))}
        
        <div className='start flex gap-3 items-center md:ml-auto'>
          <motion.div 
            className='cursor-hover px-3 py-2 border-2 border-black text-sm md:text-md'
            animate={{ borderRadius: isButtonHovered ? '0px' : '9999px' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Start the Project
          </motion.div>
          <div 
            className='cursor-hover border-2 border-black p-2 rounded-full'
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
          >
            <div className="relative w-4 h-4 md:w-6 md:h-6 overflow-hidden">
              <motion.div
                animate={{ y: isArrowHovered ? '-100%' : '0%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <RiArrowRightUpLine className='w-4 h-4 md:w-6 md:h-6'/>
              </motion.div>
              <motion.div
                animate={{ y: isArrowHovered ? '0%' : '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <RiArrowRightDownLine className='w-4 h-4 md:w-6 md:h-6'/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
