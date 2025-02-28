import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../../Atoms/Button";
import AddPropertyName from "./AddPropertyName";
import AddPropertyAdress from "./AddPropertyAddress";
import { usePropertyStore } from "../../../../Store/property-store";

const AddPropertyNamePlusAddressModel = ({ modelOpen, setModelOpen }) => {
	const {submitProperty} = usePropertyStore();
	return (
		<Modal
			style={{ opacity: modelOpen ? 1 : 0 }}
			show={modelOpen}
			onHide={() => setModelOpen(false)}
			fullscreen={true}>
			<Modal.Header closeButtton>
				<Modal.Title>
					<div className="flex flex-col text-center">
						<h1 className="text-2xl text-rmdGreen text-center">
							Enter Property Details
						</h1>
					</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="items-center">
				<div className="flex flex-row lg:flex-col px-6 gap-4 justify-center">
					<AddPropertyName />
					<AddPropertyAdress />
				</div>
			</Modal.Body>
			<Modal.Footer>
                <Button variant="secondary" onClick={() => setModelOpen(false)}>Close</Button>
				<Button variant="primary" onClick={submitProperty}>Add Property</Button>				
			</Modal.Footer>
		</Modal>
	);
};

export default AddPropertyNamePlusAddressModel;
