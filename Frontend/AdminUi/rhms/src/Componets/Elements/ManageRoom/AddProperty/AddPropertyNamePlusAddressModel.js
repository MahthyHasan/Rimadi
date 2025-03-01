import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../../Atoms/Button";
import AddPropertyName from "./AddPropertyName";
import AddPropertyAdress from "./AddPropertyAddress";
import { usePropertyStore } from "../../../../Store/property-store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddPropertyNamePlusAddressModel = ({ modelOpen, setModelOpen }) => {
	const {submitProperty} = usePropertyStore();

	const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle property submission
    const handleSubmit = async () => {
        try {
            await submitProperty(); // Call the Zustand store function
            toast.success("Property added successfully! 🎉"); // Success toast
            setTimeout(() => navigate("/manageR/properties-addProperty"), 2000); // Navigate after 2 sec
        } catch (error) {
            toast.error("Failed to add property! ❌"); // Error toast
        }
    };

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
				<Button variant="primary" onClick={handleSubmit}>Add Property</Button>				
			</Modal.Footer>
		</Modal>
	);
};

export default AddPropertyNamePlusAddressModel;
