import React from "react";
import { usePropertyStore } from "../../../Store/property-store";
import AddFloorForm from "../../Elements/ManageRoom/AddFloor/AddFloorForm";
import ListFloors from "../../Elements/ManageRoom/AddFloor/ListFloors";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../Atoms/Button";
import Layout from "../../../Layout/Layout";

const PropertyCompletionPage = () => {
	const { property, deleteFloor } = usePropertyStore();

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
					<Button variant="primary">Complete</Button>
				</div>
			</div>
		</Layout>
	);
};

export default PropertyCompletionPage;
