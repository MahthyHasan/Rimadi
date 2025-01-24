import React from 'react';
import ClientProfilePath from "../../../assets/DashBoard/client.png";
import LikeIcon from "../../../assets/DashBoard/like.svg";

function BookingRequestCard({ roomA, roomNo, clientName, country, duration, rating, pRecords }) {
  return (
    <div className='max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
      <div className='flex'>
        {/* Left Section: Profile Image (1/4 width) */}
        <div className='w-1/4 bg-gray-100 flex justify-center items-center'>
          <img
            src={ClientProfilePath}
            alt="Client Profile"
            className='w-12 h-12 rounded-full border-4 border-rmdGreen'
          />
        </div>

        {/* Right Section: Client Info (3/4 width) */}
        <div className='w-3/4 p-2'>
          {/* First Row: Name, Rating, Like Button */}
          <div className='flex justify-between items-center' style={{ lineHeight: '1' }}>
            <p className='text-sm font-semibold text-gray-800'>{clientName}</p>
            <div className='flex items-center'>
              <p className='text-xs text-rmdGreen ml-[-1rem] font-semibold'>{rating}%</p>
              <img
                src={LikeIcon}
                alt="Wishlist Icon"
                className='w-5 h-5 ml-2 mt-[-0.8rem] cursor-pointer'
              />
            </div>
          </div>

          {/* Second Row: Country */}
          <p className='text-xs text-rmdGreen mt-[-0.8rem]' style={{ lineHeight: '1' }}>{country}</p>

          {/* Third Row: Room No */}
          <p className='text-xs text-rmdGreen mt-[-0.8rem]' style={{ lineHeight: '1' }}>
            Room NO: <span className='text-rmdGreen'>{roomNo}</span>
          </p>

          {/* Fourth Row: Room Availability */}
          <p className='text-xs text-rmdGreen mt-[-0.8rem]' style={{ lineHeight: '1' }}>
            Room Availability: <span className='text-rmdGreen'>{roomA}</span>
          </p>

          {/* Fifth Row: Previous Records */}
          <p className='text-xs text-rmdGreen mt-[-0.8rem]' style={{ lineHeight: '1' }}>
            {pRecords} Previous Checked in
          </p>

          {/* Action Button */}
          <div className='flex justify-end mt-2'>
            <button className='bg-rmdGreen text-rmdYellow px-4 py-1 rounded-lg shadow-md hover:bg-transparent hover:border-rmdYellow hover:border-[3px] hover:text-rmdGreen transition duration-300'>
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingRequestCard;
