"use client";

import { useState } from "react";

const AboutPackage = () => {
    const [selected, setSelected] = useState(Array(7).fill(false));
    
    const topics = [
        "Home",
        "Life",
        "Art",
        "Celebrations",
        "Religion",
        "Social Culture Tradition",
        "Further Knowledge",
    ];

    const toggleDropdown = (index) => {
        const updatedSelection = [...selected];
        updatedSelection[index] = !updatedSelection[index];
        setSelected(updatedSelection);
    };

    return (
        <div className="p-4 md:p-8  bg-transparent rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-left">About Our Package</h2>
            <p className="mb-4 text-left">
                Discover the amazing experiences we offer in our packages, 
                designed for adventure seekers and relaxation enthusiasts alike.
            </p>
            <hr className="my-4" />
            <ul className="list-disc list-inside mb-8 text-left">
                <li>Experience breathtaking landscapes.</li>
                <li>Enjoy personalized itineraries.</li>
                <li>Access to exclusive events and locations.</li>
                <li>Expert guides for every adventure.</li>
                <li>Unforgettable memories guaranteed.</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-left">About the Tribe</h3>
            {topics.map((topic, index) => (
                <div key={index} className="mb-2">
                    <div
                        className={`flex flex-col  cursor-pointer p-5 rounded-lg transition duration-200 
                        ${selected[index] ? 'bg-white' : 'bg-white hover:bg-gray-300'}`}
                        onClick={() => toggleDropdown(index)}
                    >
                        <div className="flex justify-between">
                        <span className="text-left ">{topic}</span>
                        <span className={`ml-2 ${selected[index] ? 'text-[#ffc108]' : 'text-black'}`}>
                            {selected[index] ? "▲" : "▼"}
                        </span>
                        </div>
                        {selected[index] && (
                        <div className=" mt-4 bg-white rounded-md text-left">
                            This is the answer related to {topic}.
                        </div>
                    )}
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default AboutPackage;
