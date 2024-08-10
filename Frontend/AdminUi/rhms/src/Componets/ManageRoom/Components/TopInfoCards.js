import React from 'react';
import '../../DashBoard/Components/dashCom.css';

function TopInfoCards({ title, data, percentage }) {
  return (
    <div className='top-card-body'>
      <div className='row'>
        <p className='top-card-title'>{title}</p>
      </div>
      <div className='row'>
        <div className='col-8'>
            <p className='card-data-text'>{data}</p></div>
        <div className='col-4'>
            <p className='card-data-percentage'>{percentage}</p></div>
      </div>
    </div>
  );
}

export default TopInfoCards;
