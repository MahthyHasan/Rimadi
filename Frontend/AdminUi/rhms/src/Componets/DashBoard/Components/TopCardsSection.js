import React from 'react'
import TopInfoCards from './TopInfoCards'

function TopCardsSection() {
  return (
    <div className='row'>
        <div className='col-3'>
            <TopCardsSection 
            title='Total Income'
            data = '12 M'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopCardsSection 
            title='Total Expenses'
            data = '12 M'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopCardsSection 
            title='Checked in Clients'
            data = '12 Persons'
            percentage = '100%'
            />
        </div>
        <div className='col-3'>
        <TopCardsSection 
            title='Total Booking'
            data = '12 M'
            percentage = '100%'
            />
        </div>
    </div>
  )
}

export default TopCardsSection
