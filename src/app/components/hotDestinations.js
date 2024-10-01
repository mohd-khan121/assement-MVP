"use client"
import { useState } from 'react';
import Image from 'next/image';
import southAmerica from '../images/south_america.jpg';
import northAfrica from '../images/north_africa.jpg';
import northAsia from '../images/north_asia.jpg';
import southAsia from '../images/south_asia.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const destinations = [
  {
    title: 'South America',
    image: southAmerica,
    description: 'Explore the wild beauty and unique wildlife.',
  },
  {
    title: 'North Africa',
    image: northAfrica,
  },
  {
    title: 'North Asia',
    image: northAsia,
  },
  {
    title: 'South Asia',
    image: southAsia,
  },
];

const HotDestinations = () => {
  const [liked, setLiked] = useState(Array(destinations.length).fill(false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="bg-transparent">      
      <div className='font-bold text-xl pb-6'><span className='text-[#ffc108]'>Hot Destination:</span>Experience the beauty of every country</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {destinations.map((destination, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <Image src={destination.image} alt={destination.title} className="w-full h-64 object-cover" />
            <h3 className="absolute bottom-0 left-0 m-2 font-bold text-white text-lg">{destination.title}</h3>
            <button 
              className="absolute top-2 right-2 focus:outline-none" 
              onClick={() => toggleLike(index)}
            >
              <FontAwesomeIcon 
                icon={faHeart} 
                className={`text-lg ${liked[index] ? 'text-red-500' : 'text-gray-400'}`} 
              />
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HotDestinations;
