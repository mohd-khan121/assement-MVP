"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGlobe, faStar, faSun } from '@fortawesome/free-solid-svg-icons'; // Importing the icons
import image1 from '../../images/fire.jpg';  // Adjusted path
import image2 from '../../images/tea.jpg';   // Adjusted path
import image3 from '../../images/cows.jpg';  // Adjusted path

const ImageCollage = () => {
    return (
        <div>
            {/* Badge Section with horizontal scroll for mobile */}
            <div className="flex space-x-4 overflow-x-auto mb-6 mt-6 md:justify-between md:space-x-0 no-scrollbar">
                {/* Time Badge */}
                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full min-w-max text-sm md:text-base">
                    <FontAwesomeIcon icon={faClock} className="text-yellow-500 mr-2" />
                    <span>6 Days</span>
                </div>
                {/* Region Badge */}
                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full min-w-max text-sm md:text-base">
                    <FontAwesomeIcon icon={faGlobe} className="text-yellow-500 mr-2" />
                    <span>Region: South America</span>
                </div>
                {/* Challenge Badge */}
                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full min-w-max text-sm md:text-base">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
                    <span>Challenge: Beginner</span>
                </div>
                {/* Climate Badge */}
                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full min-w-max text-sm md:text-base">
                    <FontAwesomeIcon icon={faSun} className="text-yellow-500 mr-2" />
                    <span>Climate: Tropical</span>
                </div>
            </div>
            
            {/* Image Collage Section */}
            <div className="flex flex-row">
                <div className="w-full md:w-1/2">
                    <Image 
                        src={image1} 
                        alt="Image 1" 
                        className="object-cover w-full h-full rounded-tl-3xl" 
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex-1">
                        <Image 
                            src={image2} 
                            alt="Image 2" 
                            className="object-cover w-full h-full rounded-tr-3xl" 
                        />
                    </div>
                    <div className="flex-1">
                        <Image 
                            src={image3} 
                            alt="Image 3" 
                            className="object-cover w-full h-full" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCollage;
