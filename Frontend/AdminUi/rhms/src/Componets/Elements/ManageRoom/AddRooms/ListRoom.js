import React from 'react';
import EditRoom from './EditRoom';
import Accordion from "react-bootstrap/Accordion";

const ListRoom = ({ rooms }) => {
    return (
        <div className="w-full max-w-3xl mx-auto space-y-4">
            {rooms.map((room, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="">
                    <Accordion.Header className="text-sm md:text-base">{room.name || `Room ${index + 1}`}</Accordion.Header>
                    <Accordion.Body className="space-y-2 text-sm md:text-base">
                        <p><strong>Width:</strong> {room.width} Feet</p>
                        <p><strong>Length:</strong> {room.length} Feet</p>
                        <p><strong>Position:</strong> ({room.positionX}, {room.positionY})</p>
                        <EditRoom roomNo={index} room={room} />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </div>
    );
};

export default ListRoom;
