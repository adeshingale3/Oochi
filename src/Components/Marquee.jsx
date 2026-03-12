import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 md:py-20 bg-green-800'>
      <div className='flex overflow-hidden whitespace-nowrap'>
        {[1, 2].map((item) => (
          <motion.h1
            key={item}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className='text-[8vw] md:text-[14vw] leading-none font-semibold pr-4 md:pr-10 text-white'
          >
            WE ARE OOCHI
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;