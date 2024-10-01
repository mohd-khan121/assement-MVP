"use client"
import Image from 'next/image';
import mountainBg from '../images/mountain_bg.jpg'; // Ensure the path is correct
import image1 from '../images/fire.jpg';
import image2 from '../images/tea.jpg';
import image3 from '../images/cows.jpg';

const experiences = [
  {
    title: 'Mountain Adventure',
    description: 'Explore the stunning landscapes and wild beauty.',
    image: image1,
  },
  {
    title: 'Desert Trekking',
    description: 'Experience the vastness of the desert.',
    image: image2,
  },
  {
    title: 'Forest Exploration',
    description: 'Discover the secrets of the lush forests.',
    image: image3,
  },
];

const MountainBanner = () => {
  return (
    <div> 
      <div className="relative py-32 px-20 bg-cover" style={{ backgroundImage: `url(${mountainBg.src})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='relative z-10 font-bold text-xl pb-6 text-white'>
          <span className='text-[#ffc108]'>Climb:</span> <span className='text-black'>Adventure Awaits</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {experiences.map((experience, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <Image src={experience.image} alt={experience.title} className="md:w-full md:h-64 h-48  object-cover" />
              <div className="absolute bottom-0 left-0 md:w-full md:h-full content-end p-2 ">
                <h3 className="font-bold text-lg text-white">{experience.title}</h3>
                <p className="text-white">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MountainBanner;
