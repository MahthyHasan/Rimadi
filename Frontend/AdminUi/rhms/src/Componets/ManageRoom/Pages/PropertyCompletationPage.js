import React from 'react';
import AddFloorForm from "../../Elements/ManageRoom/AddFloor/AddFloorForm";
import ListFloors from "../../Elements/ManageRoom/AddFloor/ListFloors";
import Accordion from 'react-bootstrap/Accordion';
import Button from '../../Atoms/Button';

const PropertyCompletationPage = () => {
  return (
    <div>
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
		</div>	      
    </div>
  )
}

export default PropertyCompletationPage
