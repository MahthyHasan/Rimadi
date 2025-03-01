import React from "react";
import Accordion from "react-bootstrap/Accordion";
import EditFloor from "./EditFloor";
import AddRoom from "../AddRooms/AddRoom";
import ListRoom from "../AddRooms/ListRoom";

const ListFloors = ({ floorNo, floor }) => {
    return (
        <Accordion.Item eventKey={floorNo.toString()} className="w-full px-4">
            <Accordion.Header>{floor.name || `Floor ${floorNo + 1}`}</Accordion.Header>
            <Accordion.Body className="w-auto">
                <div className="flex flex-row justify-between w-auto px-4">
                    <div className="flex flex-col gap-2">
                        <p><strong>Width:</strong> {floor.width} Feet</p>
                        <p><strong>Length:</strong> {floor.length} Feet</p>
                        <EditFloor floorNo={floorNo} floor={floor} />
                    </div>
                    <div className="flex flex-col">
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
