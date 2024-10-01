"use client";
import Image from 'next/image';
import image1 from '../../images/boat.jpg'; 
import image2 from '../../images/fire.jpg'; 
import image3 from '../../images/hills.jpg'; 
const BottomBanners = () => {
  return (
    <div className="flex flex-col items-start px-20 py-10">
      <h2 className="text-2xl font-bold mb-6 text-left w-full">Explore Different Climates</h2>
      <div className="flex flex-wrap w-full max-w-full">
        <div className="relative w-full sm:w-1/3 p-2">
          <Image 
            src={image1} 
            alt="Arid"
            layout="responsive"
            width={500} 
            height={300} 
            className="rounded-lg h-auto max-h-48" 
          />
          <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold md:text-xl">
            Arid
          </span>
        </div>

        <div className="relative w-full sm:w-1/3 p-2">
          <Image 
            src={image2} 
            alt="Mild Climate"
            layout="responsive"
            width={500} 
            height={300} 
            className="rounded-lg h-auto max-h-48" 
          />
          <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold md:text-xl">
            Mild
          </span>
        </div>

        {/* Banner 3 */}
        <div className="relative w-full sm:w-1/3 p-2">
          <Image 
            src={image3} 
            alt="Tropical Climate"
            layout="responsive"
            width={500} 
            height={300} 
            className="rounded-lg h-auto max-h-48"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold md:text-xl">
            Tropical
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomBanners;
