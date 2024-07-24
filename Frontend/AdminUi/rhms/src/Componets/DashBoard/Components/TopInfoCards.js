import React from 'react';
import './dashCom.css';

function TopInfoCards(...props) {
  return (
    <>
    <div className='top-card-body'>
        <div className='row'>
            <p className='top-card-title'>{props.title}</p>
        </div>
        <div className='row'>
            <div className='col-8'>{props.data}</div>
            <div className='col-4'>{props.percentage}</div>
        </div>
        
    </div>
    </>
  )
}

export default TopInfoCards
