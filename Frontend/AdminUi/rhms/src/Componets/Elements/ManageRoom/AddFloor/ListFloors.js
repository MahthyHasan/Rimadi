import React from "react";
import Accordion from "react-bootstrap/Accordion";
import EditFloor from "./EditFloor";
import AddRoom from "../AddRooms/AddRoom";
import ListRoom from "../AddRooms/ListRoom";
import DeleteButton from "../../../Atoms/DeleteButton";

const ListFloors = ({ floorNo, floor }) => {
	return (
		<Accordion.Item eventKey={floorNo.toString()} className="w-full">
			<Accordion.Header>
				{floor.name || `Floor ${floorNo + 1}`}
			</Accordion.Header>
			<Accordion.Body className="w-full">
				<div className="flex flex-col lg:flex-row gap-4">
					{/* Left - Floor Info & Edit */}

					<div className="flex flex-col gap-2 w-full lg:w-1/2">
						<div className="flex flex-row w-full justify-between">
							<div className="flex flex-col gap-2 w-full lg:w-1/2">
								<p><strong>Width:</strong> {floor.width} Feet</p>
								<p><strong>Length:</strong> {floor.length} Feet</p>
							</div>
							<div className="flex justify-end">
								<DeleteButton />
							</div>
						</div>
						<EditFloor floorNo={floorNo} floor={floor} />
					</div>

					{/* Right - Add Room & List Rooms */}
					<div className="flex flex-col gap-2 w-full lg:w-1/2">
						<AddRoom floorNo={floorNo} />
						<Accordion flush className="w-full">
							<ListRoom rooms={floor.rooms} />
						</Accordion>
					</div>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ListFloors;
