import React from 'react';
import EditRoom from './EditRoom';
import Accordion from "react-bootstrap/Accordion";

const ListRoom = ({ rooms }) => {
    return (
        <>
            {rooms.map((room, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="w-full px-4">
                    <Accordion.Header>{room.name || `Room ${index + 1}`}</Accordion.Header>
                    <Accordion.Body className="w-full">
                        <p><strong>Width:</strong> {room.width} Feet</p>
                        <p><strong>Length:</strong> {room.length} Feet</p>
                        <p><strong>Position:</strong> ({room.positionX}, {room.positionY})</p>
                        <EditRoom roomNo={index} room={room} />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </>
    );
};

export default ListRoom;
