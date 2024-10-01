"use client"
import Image from 'next/image';
import backgroundImage from '../images/south_lights.jpg'; // Ensure this image is high resolution

const BookingBanner = () => {
  return (
    <div className="relative flex items-end justify-between p-6 bg-cover rounded-md bg-center h-80" style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: 'cover' }}>
      <div className="text-white max-w-md">
        <h1 className="text-3xl font-bold">Plan Your Trip to Nomadic</h1>
        <p className="mt-2 text-sm">There are many variations of passages of avaliable but the majority have suffered alteration in some form.</p>
      </div>
      <button className="bg-[#9d9c9d] opacity-60 text-black font-bold px-8 py-2 rounded-2xl shadow hover:bg-gray-200">
        Book Now
      </button>
    </div>
  );
};

export default BookingBanner;
