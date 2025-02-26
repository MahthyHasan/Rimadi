import React from 'react';
import TextInputs from '../../../Atoms/TextInputs';

const AddPropertyName = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-2 px-4 bg-white  border-rmdYellow border-4 rounded-2xl shadow-lg md:p-10 lg:p-16 flex flex-col">
        <h1 className="text-2xl text-rmdGreen text-center">Enter Property Details</h1> 
        <TextInputs type="text" label="Name" name="name" placeholder="Property Name" />
        <TextInputs type="text" label="Rating" name="ratings" placeholder="Rating" />
        <TextInputs type="number" label="No of Flors" name="floorsCount" placeholder="No of Floors" />             
    </div>
  )
}

export default AddPropertyName
