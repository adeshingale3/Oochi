function Feature() {
  return (
    <div className='w-full py-10 md:py-20'>
      <div className='w-full px-4 md:px-20 pb-8 md:pb-16 border-b border-zinc-700'>
        <h1 className='text-3xl md:text-6xl lg:text-7xl font-semibold'>
          Featured Projects
        </h1>
      </div>

      <div className='flex flex-col md:flex-row gap-4 p-4 md:p-20'>
        {[
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=1600&fit=crop&q=80",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1600&fit=crop&q=80"
        ].map((image, index) => (
          <div key={index} className='group w-full md:w-1/2 h-[40vh] md:h-[80vh] rounded-lg overflow-hidden'>
            <img 
              src={image} 
              alt={`Featured project ${index + 1}`}
              className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
