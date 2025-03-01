import React from "react";
import Accordion from "react-bootstrap/Accordion";
import EditFloor from "./EditFloor";
import AddRoom from "../AddRooms/AddRoom";
import ListRoom from "../AddRooms/ListRoom";

const ListFloors = (floorNo) => {
	return (
		<>
			<Accordion.Item eventKey={floorNo} className="w-full">
				<Accordion.Header>Floor Name </Accordion.Header>
				<Accordion.Body className="w-full">
					<div className="flex flex-row justify-between">
						<div>
							<EditFloor />
						</div>
                        <div className="flex flex-col">
                            <AddRoom />
                            <Accordion flush className="w-full">
                                <ListRoom />
                            </Accordion>
                        </div>
					</div>
				</Accordion.Body>
			</Accordion.Item>
		</>
	);
};

export default ListFloors;
