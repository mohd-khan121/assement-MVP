"use client"
import { useState } from 'react';
import Image from 'next/image';
import image1 from '../images/boat.jpg';
import image2 from '../images/green_hills.jpg';
import image3 from '../images/oldhouse.jpg';
import image4 from '../images/fabric.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const experiences = [
  {
    title: 'South America',
    image: image1,
    price: '$1234.55/',
    tag: '10 Days to the Middle East',
  },
  {
    title: 'North Africa',
    image: image2,
    price: '$900.00/',
    tag: '7 Days in the Sahara',
  },
  {
    title: 'North Asia',
    image: image3,
    price: '$1500.75/',
    tag: '14 Days in Japan',
  },
  {
    title: 'South Asia',
    image: image4,
    price: '$800.25/',
    tag: '12 Days in India',
  },
];

const PopularExperience = () => {
  const [liked, setLiked] = useState(Array(experiences.length).fill(false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="bg-transparent">      
      <div className='font-bold text-xl pb-6'>
        <span className='text-[#ffc108]'>Popular Experience:</span> Experience the beauty of every country
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {experiences.map((experience, index) => (
          <div key={index} className="relative rounded-lg border-b overflow-hidden shadow-lg">
            <Image src={experience.image} alt={experience.title} className="w-full h-72 object-cover" />
            <span className="absolute top-2 font-thin left-2 bg-black text-white px-2 py-2 text-xs rounded">
              {experience.tag}
            </span>
            <div className="p-4">
              <h3 className="font-bold text-lg">{experience.title}</h3>
              <p className="text-sm "><span className='text-[#ffc108]'>{experience.price}</span>per person</p>
            </div>
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

export default PopularExperience;
