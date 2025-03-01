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
        addFloor({ name: floorName, width: floorWidth, length: floorLength });
        setFloorName('');
        setFloorWidth('');
        setFloorLength('');
    };

    return (
        <div className="border-4 border-rmdYellow p-4 flex flex-col gap-4 w-full">
            <h1 className="text-xl text-rmdGreen">Add Floor Details</h1>
            <TextInputs type="text" label="Add Floor Name" value={floorName} onChange={(e) => setFloorName(e.target.value)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInputs type="number" label="Add Floor Width (in Feet)" value={floorWidth} onChange={(e) => setFloorWidth(e.target.value)} />
                <TextInputs type="number" label="Add Floor Length (in Feet)" value={floorLength} onChange={(e) => setFloorLength(e.target.value)} />
            </div>
            <Button variant="primary" className="mt-2" onClick={handleAddFloor}>Add Floor</Button>
        </div>
    );
};

export default AddFloorForm;
