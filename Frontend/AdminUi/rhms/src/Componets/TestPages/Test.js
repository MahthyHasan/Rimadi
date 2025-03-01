import React, { useState } from "react";
import AddPropertyAdress from "../Elements/ManageRoom/AddProperty/AddPropertyAddress";
import AddPropertyName from "../Elements/ManageRoom/AddProperty/AddPropertyName";
import AddPropertyMap from "../Elements/ManageRoom/AddProperty/AddPropertyMap";
import AddFloorForm from "../Elements/ManageRoom/AddFloor/AddFloorForm";
import ListFloors from "../Elements/ManageRoom/AddFloor/ListFloors";
import Accordion from 'react-bootstrap/Accordion';
import Button from "../Atoms/Button";
import AddPropertyNamePlusAddressModel from "../Elements/ManageRoom/AddProperty/AddPropertyNamePlusAddressModel";

const Test = () => {
	const [modelOpen, setModelOpen] = useState(false);
	return (
		<div className="flex flex-col">
			<AddFloorForm />
			<div className="flex flex-row mt-2  border-6 border-rmdYellow">				
				<Accordion flush className="w-full">
					<ListFloors floorNo={0} />
					<ListFloors floorNo={1} />
				</Accordion>			
			</div>
			<div className="flex justify-center align-middle">
				<Button variant={"primary"} children={"Complete"}></Button>
			</div>
			<Button variant={"danger"} children={"Open Model"} onClick={() => setModelOpen(true)} />
			<AddPropertyNamePlusAddressModel modelOpen={modelOpen} setModelOpen={setModelOpen} />		
		</div>	
	);
};

export default Test;
