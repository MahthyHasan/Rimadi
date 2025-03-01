import React, { useState } from 'react';
import { usePropertyStore } from '../../../../Store/property-store';
import Button from '../../../Atoms/Button';
import TextInputs from '../../../Atoms/TextInputs';

const AddFloorForm = () => {
    const { addFloor } = usePropertyStore();

    const [floorName, setFloorName] = useState('');
    const [floorWidth, setFloorWidth] = useState('');
    const [floorLength, setFloorLength] = useState('');

    const handleAddFloor = () => {
        const newFloor = {
            name: floorName,
            width: floorWidth,
            length: floorLength
        };

        addFloor(newFloor);

        // Clear the inputs after adding
        setFloorName('');
        setFloorWidth('');
        setFloorLength('');
    };

    return (
        <div className='border border-4 border-rmdYellow flex flex-col px-4'>
            <h1 className='text-[2rem] text-rmdGreen'>Add Floor Details</h1>
            <TextInputs type='text' label={"Add Floor Name"} value={floorName} onChange={(e) => setFloorName(e.target.value)} />
            <div className='flex flex-row lg:flex-col justify-center gap-4'>
                <TextInputs type='number' label={"Add Floor Width (in Feet)"} value={floorWidth} onChange={(e) => setFloorWidth(e.target.value)} />
                <TextInputs type='number' label={"Add Floor Length (in Feet)"} value={floorLength} onChange={(e) => setFloorLength(e.target.value)} />
            </div>
            <Button variant="primary" onClick={handleAddFloor} className='mt-2'>Add Floor</Button>
        </div>
    );
};

export default AddFloorForm;
