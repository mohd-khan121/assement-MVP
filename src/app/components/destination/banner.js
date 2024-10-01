"use client";
import Image from 'next/image';
import boatBg from '../../images/boat.jpg'; // Update path to go back one folder
const Banner = () => {
    return (
        <div className="relative w-full h-[400px]">
            <Image 
                src={boatBg} 
                alt="Boat Background" 
                layout="fill" 
                objectFit="cover" 
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex pl-10 py-5 ">
                <h1 className="text-4xl font-bold text-white content-end  text-left">South West of Madagascar</h1>
            </div>
        </div>
    );
};

export default Banner;
