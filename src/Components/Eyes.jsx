import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='w-full h-[50vh] md:h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.6" className='bg-green-200 w-full h-full bg-cover bg-center relative flex items-center justify-center'>
        {/* Green background div behind the eyes */}
        <div className='absolute w-[75%] h-[80%] rounded-xl' style={{ backgroundColor: '#4ADE80' }}></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-8 md:gap-5 z-10'>
          {[1, 2].map((item) => (
            <div key={item} className='h-[30vw] w-[30vw] md:h-[15vw] md:w-[15vw] bg-white rounded-full flex items-center justify-center'>
              <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
                <motion.div
                  style={{ transform: `rotate(${rotate}deg)` }}
                  className='line absolute w-full h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                >
                  <div className='w-6 h-6 bg-zinc-100 rounded-full' />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
