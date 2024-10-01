"use client"; // Make sure this is added

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SelectPlan = () => {
    const [startDate, setStartDate] = useState(null); 
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); 
    const [peopleCount, setPeopleCount] = useState(1); 
    const [selectedPackage, setSelectedPackage] = useState(''); 
    const packageDetails = {
        package1: {
            title: "Travel Package 1",
            details: "Explore beautiful destinations with our Travel Package 1. Perfect for adventure seekers!",
            price: 97.50,
        },
        package2: {
            title: "Travel Package 2",
            details: "Experience luxury travel with our Travel Package 2. Enjoy premium accommodations and services.",
            price: 150.00,
        },
        package3: {
            title: "Travel Package 3",
            details: "Join us for a cultural journey with Travel Package 3. Discover local traditions and cuisine.",
            price: 120.00,
        },
    };

    const total = peopleCount * (selectedPackage ? packageDetails[selectedPackage].price : 0);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">From $97.50</h2>
            <p className="text-sm text-gray-600">per person</p>

            <div className='mt-10'>
                <h2 className="text-lg font-bold">Select Dates and Person</h2>
                <div className="mt-4 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="flex items-center border border-gray-300 rounded-full bg-white px-3 py-1 cursor-pointer w-full md:w-auto" onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
                        <span className="text-sm font-semibold">{startDate ? startDate.toLocaleDateString() : 'Select Date'}</span>
                    </div>
                    {isDatePickerOpen && (
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                setIsDatePickerOpen(false); 
                            }}
                            dateFormat="MMMM d, yyyy" 
                            className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-1"
                        />
                    )}

                    <div className="flex items-center border border-gray-300 rounded-full bg-white px-3 py-1 w-full md:w-auto">
                        <input
                            type="number"
                            value={peopleCount}
                            onChange={(e) => setPeopleCount(Math.max(1, e.target.value))} 
                            className="border-none w-10 ml-1 focus:outline-none"
                            min="1"
                        />
                        <span className="text-sm font-semibold ml-1">people</span>
                        <FontAwesomeIcon icon={faUser} className="ml-2" />
                    </div>
                </div>
            </div>

            <div className="mt-4 flex flex-col space-y-4">
                {Object.keys(packageDetails).map((pkg) => (
                    <div key={pkg} className={`flex justify-between p-4 border rounded-lg ${selectedPackage === pkg ? 'border-yellow-500' : 'border-gray-300'} bg-white`}>
                        <div>
                            <h3 className="text-md font-semibold">{packageDetails[pkg].title}</h3>
                            <p className="text-sm text-gray-600">{packageDetails[pkg].details}</p>
                            <p className="font-bold">${packageDetails[pkg].price.toFixed(2)}</p>
                        </div>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="package"
                                value={pkg}
                                className="mr-2"
                                onChange={() => setSelectedPackage(pkg)} 
                            />
                            <span className="text-sm">Select</span>
                        </label>
                    </div>
                ))}
            </div>

            {selectedPackage && (
                <div className="mt-4">
                    <h4 className="text-md font-semibold">{packageDetails[selectedPackage].title}</h4>
                    <p className="mt-2 font-semibold">
                        {peopleCount} x ${packageDetails[selectedPackage].price.toFixed(2)} = ${total.toFixed(2)}
                    </p>
                </div>
            )}

            <div className="mt-6">
                <button className="bg-[#ffc108] text-white py-2 px-4 rounded w-full hover:bg-[#e0a600] transition duration-300">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default SelectPlan;
