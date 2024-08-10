import React from 'react'
import TopInfoCards from './TopInfoCards';

function TopCardsSection() {
  return (
    <div className='row'>
        <div className='col-3'>
            <TopInfoCards 
            title='Total Properties'
            data = '12 M'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopInfoCards 
            title='Properties in use'
            data = '12 M'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopInfoCards 
            title='Checked in Rooms'
            data = '12'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopInfoCards  
            title='Free Rooms Available'
            data = '12 M'
            percentage = '100%'
            />
        </div>
    </div>
  )
}

export default TopCardsSection
