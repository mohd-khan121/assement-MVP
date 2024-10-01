"use client";
import lightLogo from '../images/brand_assets/light_logo.svg';
import darkLogo from '../images/brand_assets/dark_logo.svg';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className="bg-[#ffc108] py-20">
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-300 p-4 rounded-lg w-24 md:w-32 flex justify-center items-center mx-2 my-2">
          <Image 
            src={lightLogo} 
            alt="Partner Logo 1" 
            width={100} 
            height={50}
            className="object-contain"
          />
        </div>
        <div className="bg-gray-300 p-4 rounded-lg w-24 md:w-32 flex justify-center items-center mx-2 my-2">
          <Image 
            src={darkLogo} 
            alt="Partner Logo 2" 
            width={100} 
            height={50}
            className="object-contain"
          />
        </div>
        <div className="bg-gray-300 p-4 rounded-lg w-24 md:w-32 flex justify-center items-center mx-2 my-2">
          <Image 
            src={lightLogo} 
            alt="Partner Logo 3" 
            width={100} 
            height={50}
            className="object-contain"
          />
        </div>
        <div className="bg-gray-300 p-4 rounded-lg w-24 md:w-32 flex justify-center items-center mx-2 my-2">
          <Image 
            src={darkLogo} 
            alt="Partner Logo 4" 
            width={100} 
            height={50}
            className="object-contain"
          />
        </div>
        <div className="bg-gray-300 p-4 rounded-lg w-24 md:w-32 flex justify-center items-center mx-2 my-2">
          <Image 
            src={lightLogo} 
            alt="Partner Logo 5" 
            width={100} 
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
