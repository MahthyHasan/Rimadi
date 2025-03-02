import React from "react";
import { usePropertyStore } from "../../../Store/property-store";
import AddFloorForm from "../../Elements/ManageRoom/AddFloor/AddFloorForm";
import ListFloors from "../../Elements/ManageRoom/AddFloor/ListFloors";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../Atoms/Button";
import Layout from "../../../Layout/Layout";
import toast from "react-hot-toast";

const PropertyCompletionPage = () => {
	const { property, deleteFloor, addFloorToDB } = usePropertyStore();

	// Function to handle the "Complete" button click
	const handleComplete = async () => {
		try {
			// Trigger the addFloorToDB action
			const floorResponse = await addFloorToDB(property.floors);  // Pass the floors to the API function

			// If the floor is added successfully
			toast.success("Floors added successfully!");

			// You can also do other actions like navigating to another page
		} catch (error) {
			// If there is an error
			toast.error("Failed to add floors!");
		}
	};

	return (
		<Layout>
			<div className="flex flex-col gap-4 p-4">
				<AddFloorForm />
				<div className="border-4 border-rmdYellow">
					<Accordion flush className="w-full">
						{property.floors.map((floor, index) => (
							<ListFloors
								key={index}
								floorNo={index}
								floor={floor}
								onDelete={deleteFloor}  // Pass delete directly
							/>
						))}
					</Accordion>
				</div>
				<div className="flex justify-center">
					<Button variant="primary" onClick={handleComplete}>Complete</Button>
				</div>
			</div>
		</Layout>
	);
};

export default PropertyCompletionPage;
