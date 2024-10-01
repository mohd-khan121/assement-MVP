"use client";
import Image from 'next/image';
import image1 from '../images/adventure_tour.jpg';
import image2 from '../images/hand_gliding.jpg';
import image3 from '../images/wildlife.jpg';
import image4 from '../images/paraglider.jpg';

const experiences = [
  {
    title: 'Wildlife Tour',
    description: 'Explore the wild and witness nature at its best.',
    image: image1,
  },
  {
    title: 'Paragliding Tour',
    description: 'Soar above the landscape for breathtaking views.',
    image: image2,
  },
  {
    title: 'Adventure Tour',
    description: 'Join us for an exhilarating adventure.',
    image: image3,
  },
  {
    title: 'Hang Gliding',
    description: 'Experience the thrill of hang gliding.',
    image: image4,
  },
];

const TravelCards = () => {
  return (
    <div className="relative py-32 px-4 bg-cover">
      <div className="text-center text-white mb-10">
        <h2 className="text-black text-left font-normal text-2xl">Are you ready to travel?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {experiences.map((experience, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <Image src={experience.image} alt={experience.title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white p-4">
                <h3 className="font-bold text-lg">{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCards;
