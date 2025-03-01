import React from 'react';
import EditRoom from './EditRoom';
import Accordion from "react-bootstrap/Accordion";
import DeleteButton from '../../../Atoms/DeleteButton';
import { usePropertyStore } from '../../../../Store/property-store';

const ListRoom = ({ floorNo, rooms }) => {
    const { deleteRoomFromFloor } = usePropertyStore();

    const handleDeleteRoom = (roomNo, roomName) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${roomName || `Room ${roomNo + 1}`}?`);
        if (confirmDelete) {
            deleteRoomFromFloor(floorNo, roomNo);
            alert(`Room ${roomName || `Room ${roomNo + 1}`} deleted successfully.`);
        }
    };

    return (
        <div className="space-y-4">
            {rooms.map((room, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{room.name || `Room ${index + 1}`}</Accordion.Header>
                    <Accordion.Body>
                        <div className="flex justify-between">
                            <div>
                                <p><strong>Width:</strong> {room.width} Feet</p>
                                <p><strong>Length:</strong> {room.length} Feet</p>
                                <p><strong>Position:</strong> ({room.positionX}, {room.positionY})</p>
                            </div>
                            <DeleteButton onClick={() => handleDeleteRoom(index, room.name)} label="Delete Room" />
                        </div>
                        <EditRoom floorNo={floorNo} roomNo={index} room={room} />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </div>
    );
};

export default ListRoom;
