import React from 'react';
import './dashCom.css';
import ClientProfilePath from "../../../assets/DashBoard/client.png";
import LikeIcon from "../../../assets/DashBoard/like.svg";

function BookingRequestCard({roomA, roomNo, clientName, country, duration, rating, pRecords}) {
  return (
    <div className='booking-request-card-body'>
      <div className='row'>
        <div className='col-4'>
            <div className='row'>
                <img
                src={ClientProfilePath}
                className='card-request-client-profile'
                />
            </div>
            <div className='row'>
                <p className='booking-request-room-availability'>Room Availability : {roomA}</p>
            </div>
            <div className='row'>
                <p className='booking-request-room-no'>Room NO : {roomNo} </p>
            </div>
        </div>
        <div className='col-8'>
            <div className='row'>
                <div className='col-6'><p className='card-request-booking-client-name'>{clientName}</p></div>
                <div className='col-6 d-flex justify-content-end'>
                    <img
                    src={LikeIcon}
                    className='whishList-icon-booking-request-card'
                    />
                </div>
            </div>
            <div className='row'>
            <p className='card-request-booking-client-country-name'>{country}</p>
            <p className='card-request-booking-duration'>{duration}</p>
            </div>
            <div className='row'>  
                <ul className='d-flex list-item-total'>
                    <li className='booking-request-small-list-first'><p className='card-request-booking-list-item-percentage'>{rating}%</p></li>
                    <li className='booking-request-small-list-second'><p className='card-request-booking-list-item-previous-records'>{pRecords} Previous Checked in</p></li>
                </ul>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-end'>
                    <button className='action-button-booking-request'>Action</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BookingRequestCard
