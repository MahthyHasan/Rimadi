import React from "react";
import { usePropertyStore } from "../../../Store/property-store";
import AddFloorForm from "../../Elements/ManageRoom/AddFloor/AddFloorForm";
import ListFloors from "../../Elements/ManageRoom/AddFloor/ListFloors";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../Atoms/Button";
import Layout from "../../../Layout/Layout";

const PropertyCompletationPage = () => {
	const { property } = usePropertyStore();

	return (
		<Layout>
			<div className="flex flex-col px-4">
				<AddFloorForm />
				<div className="flex flex-row mt-2 border-6 border-rmdYellow">
					<Accordion flush className="w-full">
						{property.floors.map((floor, index) => (
							<ListFloors key={index} floorNo={index} floor={floor} />
						))}
					</Accordion>
				</div>
				<div className="flex justify-center align-middle">
					<Button variant={"primary"}>Complete</Button>
				</div>
			</div>
		</Layout>
	);
};

export default PropertyCompletationPage;
