"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [showPassengerPicker, setShowPassengerPicker] = useState(false);

  const togglePassengerPicker = () => {
    setShowPassengerPicker(!showPassengerPicker);
  };

  const totalPassengers = adults + children;

  return (
    <div className="flex flex-col items-center md:mt-10 w-full px-4">
      <h1 className="text-4xl font-bold mb-4">Where to next?</h1>
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg p-2 rounded-lg">
        
        {/* Where Input */}
        <div className="flex-1 relative mb-4 md:mb-0">
          <label className="text-sm font-semibold text-gray-500 block">Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            value={selectedPlace}
            onChange={(e) => setSelectedPlace(e.target.value)}
            className="w-full p-2 text-gray-700 focus:outline-none rounded-md"
          />
        </div>

        {/* Divider (hidden on mobile, visible on desktop) */}
        <div className="hidden md:block border-l border-gray-300 mx-4"></div>

        {/* Check-in Input */}
        <div className="flex-1 mb-4 md:mb-0">
          <label className="text-sm font-semibold text-gray-500 block">Check In</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full p-2 text-gray-700 focus:outline-none rounded-md"
          />
        </div>

        {/* Divider (hidden on mobile, visible on desktop) */}
        <div className="hidden md:block border-l border-gray-300 mx-4"></div>

        {/* Who Input */}
        <div className="flex-1 mb-4 md:mb-0 relative">
          <label className="text-sm font-semibold text-gray-500 block">Who</label>
          <button
            onClick={togglePassengerPicker}
            className="w-full p-2 text-gray-700 focus:outline-none rounded-md flex justify-between items-center"
          >
            <span>{totalPassengers > 0 ? `${totalPassengers} guests` : "Add guests"}</span>
          </button>
          
          {showPassengerPicker && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg p-4">
              <div className="flex justify-between mb-2">
                <span>Adults</span>
                <div className="flex items-center">
                  <button onClick={() => setAdults(Math.max(adults - 1, 0))} className="border p-1 border-black rounded-full">-</button>
                  <span className="mx-2">{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} className="border p-1 border-black rounded-full">+</button>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <span>Children</span>
                <div className="flex items-center">
                  <button onClick={() => setChildren(Math.max(children - 1, 0))} className="border p-1 border-black rounded-full">-</button>
                  <span className="mx-2">{children}</span>
                  <button onClick={() => setChildren(children + 1)} className="border p-1 border-black rounded-full">+</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="flex items-center justify-center w-12 h-12 bg-[#ffc108] text-white rounded-md ml-auto md:ml-4 shadow-md hover:bg-[#ffb000]">
          <FontAwesomeIcon icon={faSearch} className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
