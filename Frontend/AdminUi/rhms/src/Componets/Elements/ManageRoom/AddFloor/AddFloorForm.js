import React from 'react';
import Button from '../../../Atoms/Button';
import TextInputs from '../../../Atoms/TextInputs';

const AddFloorForm = () => {
  return (
    <div className='border border-4 border-rmdYellow flex flex-col' >
        <h1 className='text-[2rem] text-rmdGreen'>Add Floors Details</h1>
        <TextInputs type='text' label={"Add Floor Name"} />
        <div className='flex flex-row lg:flex-col justify-center gap-4'>
        <TextInputs type='number' label={"Add Floor Width (in Feet)"} />
        <TextInputs type='number' label={"Add Floor Length (in Feet)"} />
        </div>
        <Button variant="primary" children={"Add Floor"} className='mt-2' />    
    </div>
  )
}

export default AddFloorForm
