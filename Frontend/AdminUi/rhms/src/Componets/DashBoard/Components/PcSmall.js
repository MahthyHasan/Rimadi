import React from 'react';
import './dashCom.css';
import ClientProfilePath from "../../../assets/DashBoard/client.png";

function PcSmall({name}) {
  return (
    <div className='profile-small-card-search-results'>
        <img
        src={ClientProfilePath}
        className='small-card-profile-picture'
        />
        <p className='small-card-profile-name'>{name}</p>      
    </div>
  )
}

export default PcSmall
