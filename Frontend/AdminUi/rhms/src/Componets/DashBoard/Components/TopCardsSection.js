import React from 'react'
import TopInfoCards from './TopInfoCards';

function TopCardsSection() {
  return (
    <div className='row'>
        <div className='col-3'>
            <TopInfoCards 
            title='Total Income'
            data = '12 M'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopInfoCards 
            title='Total Expenses'
            data = '12 M'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopInfoCards 
            title='Checked in Clients'
            data = '12'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopInfoCards  
            title='Total Booking'
            data = '12 M'
            percentage = '100%'
            />
        </div>
    </div>
  )
}

export default TopCardsSection
