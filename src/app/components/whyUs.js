"use client";
import lightLogo from '../images/brand_assets/light_logo.svg';
import brownMountains from '../images/brown_mountains.jpg';
import Image from 'next/image';

const WhyUS = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-screen" 
      style={{
        backgroundImage: `url(${brownMountains.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-white flex flex-col items-center text-center p-4 md:p-20 justify-center h-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h1>
        <Image
          className='mb-6' 
          src={lightLogo} 
          alt="Logo"
          width={150} 
          height={50} 
        />
        <p className='mb-6 text-sm md:text-base'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&poss standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 mt-6 md:mt-10">
          <div className="border-2 border-white bg-transparent p-4 rounded-lg text-left mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-[#ffc108] mb-2">Professional and Certified</h2>
            <p className="text-white text-sm md:text-base">
              This is the text for the first box. Add your content here to describe the section.
            </p>
          </div>

          <div className="border-2 border-white bg-transparent p-4 rounded-lg text-left w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-[#ffc108] mb-2">Get Instant Bookings</h2>
            <p className="text-white text-sm md:text-base">
              This is the text for the second box. Add more details or features here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
