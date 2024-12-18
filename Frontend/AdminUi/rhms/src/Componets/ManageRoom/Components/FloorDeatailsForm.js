import React from "react";
import "./mrCom.css";

function FloorDeatailsForm({
	floorName,
	setFloorName,
	floorWidth,
	setFloorWidth,
	floorHeight,
	setFloorHeight,
}) {
	return (
		<div>
			<h1 className="text floor-deatails-form-heading">Floor Details</h1>
			<div className="container floor-details-box">
				<div className="row">
					<div className="d-flex flex-column mb-2 mt-3">
						<label className="floor-details-lable">Floor Name</label>
						<input
							type="text"
							className="floor-details-input-field"
							placeholder="Floor Name"
							value={floorName}
							onChange={(e) => setFloorName(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="d-flex flex-column mb-2">
						<label className="floor-details-lable">Floor Width</label>
						<input
							type="number"
							className="floor-details-input-field"
							placeholder="Width in Feet"
							value={floorWidth}
							onChange={(e) => setFloorWidth(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="d-flex flex-column">
						<label className="floor-details-lable">Floor Height</label>
						<input
							type="number"
							className="floor-details-input-field"
							placeholder="Height in Feet"
							value={floorHeight}
							onChange={(e) => setFloorHeight(e.target.value)}
						/>
					</div>
				</div>
				<div className="row mt-4">
					<div className="d-flex justify-content-center">
						<button className="floor-details-form-submit-button">Add Floor</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FloorDeatailsForm;
