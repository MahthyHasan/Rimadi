import React from "react";
import TextInputs from "../../../Atoms/TextInputs";
import ImageInput from "../../../Atoms/ImageInput";
import { usePropertyStore } from "../../../../Store/property-store";

const AddPropertyName = () => {
  const {property, setPropertyField, addPropertyImage} = usePropertyStore();
	return (
		<div className="w-full max-w-4xl mx-auto py-2 px-4 bg-white  border-rmdYellow border-4 rounded-2xl shadow-lg md:p-10 lg:p-16 flex flex-col">
			<h1 className="text-2xl text-rmdGreen text-center">
				Enter Property Details
			</h1>
			<TextInputs
				type="text"
				label="Name"
				name="name"
				placeholder="Property Name"
        vlaue={property.name}
        onChange={(e) => setPropertyField("name", e.target.value)}
			/>
			<TextInputs
				type="text"
				label="Rating"
				name="ratings"
				placeholder="Rating"
        vlaue={property.rating}
        onChange={(e) => setPropertyField("rating", e.target.value)}
        className="mt-2"        
			/>
			<TextInputs
				type="number"
				label="No of Floors"
				name="floorsCount"
				placeholder="No of Floors"
        vlaue={property.floorCount}
        onChange={(e) => setPropertyField("floorCount", e.target.value)}
        className="mt-2"
			/>			
			<div className="flex flex-col lg:flex-row justify-center gap-4 mt-2">
      <TextInputs
				type="time"
				label="Check In Time "
				name="checkIn"
				placeholder="Check In Time"
        vlaue={property.checkIn}
        onChange={(e) => setPropertyField("checkIn", e.target.vlaue)}
        className="mt-2"
			/>
				<TextInputs
					type="time"
					label="Check Out Time"
					name="checkOut"
					placeholder="Check Out Time"
          value={property.chekOut}
          onChange={(e) => setPropertyField("checkOut", e.target.value)}
          className="mt-2"
				/>
			</div>
			<ImageInput
				label="Upload Property Images"
        className="mt-2"
				onChange={(e) => addPropertyImage(Array.from(e.target.files))}
			/>
		</div>
	);
};

export default AddPropertyName;
