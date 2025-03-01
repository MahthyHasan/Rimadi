import React from 'react'
import EditRoom from './EditRoom'
import Accordion from "react-bootstrap/Accordion";

const ListRoom = (roomNo) => {
  return (
    <>
    <Accordion.Item eventKey={roomNo} className="w-full">
				<Accordion.Header>Room Name </Accordion.Header>
				<Accordion.Body className="w-full">
					<EditRoom />
				</Accordion.Body>
			</Accordion.Item>
    </>
  )
}

export default ListRoom
