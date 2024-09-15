import React from 'react'
import ClientProfilePath from "../../../assets/ManageRoom/propertySingle.png";
import "./mrCom.css";
import "../../DashBoard/Components/dashCom.css"
function PropertiesSingleCArd({propertyA, roomNo, propertyName, location, roomType, rating, totalAccomadateCount}) {
  return (
    <div className='booking-request-card-body-rm'>
      <div className='row'>
        <div className='col-4'>
            <div className='row'>
                <img
                src={ClientProfilePath}
                className='card-request-client-profile'
                />
            </div>
            <div className='row'>
                <p className='booking-request-room-availability'>{propertyA}</p>
            </div>
            <div className='row'>
                <p className='booking-request-room-no'>Total No of Rooms : {roomNo} </p>
            </div>
        </div>
        <div className='col-8'>
            <div className='row'>
                <div className='col-6'><p className='card-request-booking-client-name'>{propertyName}</p></div>               
            </div>
            <div className='row'>
            <p className='card-request-booking-client-country-name'>{location}</p>
            <p className='card-request-booking-duration'>{roomType}</p>
            </div>
            <div className='row'>  
                <ul className='d-flex list-item-total'>
                    <li className='booking-request-small-list-first'><p className='card-request-booking-list-item-percentage'>{rating}</p></li>
                    <li className='booking-request-small-list-second'><p className='card-request-booking-list-item-previous-records'>{totalAccomadateCount} People</p></li>
                </ul>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-end'>
                    <button className='action-button-booking-request'>View</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertiesSingleCArd
