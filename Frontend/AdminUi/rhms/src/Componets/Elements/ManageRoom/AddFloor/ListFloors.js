import React from "react";
import Accordion from "react-bootstrap/Accordion";
import EditFloor from "./EditFloor";
import AddRoom from "../AddRooms/AddRoom";
import ListRoom from "../AddRooms/ListRoom";
import DeleteButton from "../../../Atoms/DeleteButton";
import { usePropertyStore } from "../../../../Store/property-store";

const ListFloors = ({ floorNo, floor }) => {
	const { deleteFloor } = usePropertyStore();

	// Delete floor with confirmation
	const handleDelete = () => {
		const confirmDelete = window.confirm(`Are you sure you want to delete ${floor.name || `Floor ${floorNo + 1}`}?`);
		if (confirmDelete) {
			deleteFloor(floorNo);
			alert(`Floor ${floor.name || `Floor ${floorNo + 1}`} deleted successfully.`);
		}
	};

	return (
		<Accordion.Item eventKey={floorNo.toString()} className="w-full">
			<Accordion.Header>{floor.name || `Floor ${floorNo + 1}`}</Accordion.Header>
			<Accordion.Body>
				<div className="flex flex-col lg:flex-row gap-4">

					{/* Floor Info & Edit */}
					<div className="flex flex-col gap-2 w-full lg:w-1/2">
						<div className="flex justify-between">
							<div>
								<p><strong>Width:</strong> {floor.width} Feet</p>
								<p><strong>Length:</strong> {floor.length} Feet</p>
							</div>
							<DeleteButton onClick={handleDelete} label="Delete Floor" />
						</div>
						<EditFloor floorNo={floorNo} floor={floor} />
					</div>

					{/* Rooms Section */}
					<div className="w-full lg:w-1/2">
						<AddRoom floorNo={floorNo} />
						<Accordion flush>
							<ListRoom floorNo={floorNo} rooms={floor.rooms} />
						</Accordion>
					</div>

				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ListFloors;
