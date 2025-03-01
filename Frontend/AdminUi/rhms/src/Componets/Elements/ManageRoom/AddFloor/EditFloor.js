import React, { useState, useEffect } from "react";
import { usePropertyStore } from "../../../../Store/property-store";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";

const EditFloor = ({ floorNo, floor }) => {
    const { editFloor } = usePropertyStore();

    // Local state to hold form inputs (starts with current floor data)
    const [floorData, setFloorData] = useState({
        name: "",
        width: "",
        length: ""
    });

    // Load existing floor data into form when component loads
    useEffect(() => {
        if (floor) {
            setFloorData({
                name: floor.name || "",
                width: floor.width || "",
                length: floor.length || ""
            });
        }
    }, [floor]);

    // Handler to update form state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFloorData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handler to submit changes
    const handleEditFloor = () => {
        if (!floorData.name || !floorData.width || !floorData.length) {
            alert("Please fill all fields before updating the floor.");
            return;
        }

        editFloor(floorNo, {
            ...floor,
            name: floorData.name,
            width: floorData.width,
            length: floorData.length
        });

        alert("Floor updated successfully!");
    };

    return (
        <div className="flex flex-col gap-2 border border-rmdYellow p-4 w-full">
            <h1 className="text-lg text-rmdGreen">Edit Floor Details</h1>

            <TextInputs
                type="text"
                label="Edit Floor Name"
                name="name"
                value={floorData.name}
                onChange={handleInputChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <TextInputs
                    type="number"
                    label="Edit Floor Width (in Feet)"
                    name="width"
                    value={floorData.width}
                    onChange={handleInputChange}
                />
                <TextInputs
                    type="number"
                    label="Edit Floor Length (in Feet)"
                    name="length"
                    value={floorData.length}
                    onChange={handleInputChange}
                />
            </div>

            <Button variant="primary" className="mt-2" onClick={handleEditFloor}>
                Edit Floor
            </Button>
        </div>
    );
};

export default EditFloor;
