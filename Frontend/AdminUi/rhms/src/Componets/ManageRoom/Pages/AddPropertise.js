import React, { useState } from "react";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import "./mrPage.css";
import TopTextInputWithLabel from "../Components/TopTextInputWithLable";
import FloorDeatailsForm from "../Components/FloorDeatailsForm";

const tabs = [
	{ label: "Properties", link: "/manageR/properties" },
	{ label: "Add Properties", link: "/manageR/properties-addProperty" },
];



function AddPropertise() {
  const [propertyName, setPropertyName] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [propertyContactNo, setPropertyContactNo ] = useState("");
  const [floorName, setFloorName] = useState("");
  const [floorWidth, setFloorWidth] = useState("");
  const [floorHeight, setFloorHeight] = useState("");
	return (
		<Layout>
			<div className="container">
				<div className="top-Navigation-bar">
					<TopNavigationBar tabs={tabs} />
				</div>
				<div className="add-property-total-box">
					<div className="row">
						<div className="col-12 col-md-4">
							<TopTextInputWithLabel
								label="Property Name"
								placeholder="Enter Property Name"
								value={propertyName}
								onChange={(e) => setPropertyName(e.target.value)}
							/>
						</div>
						<div className="col-12 col-md-4">
            <TopTextInputWithLabel
								label="Location"
								placeholder="Enter Location"
								value={propertyLocation}
								onChange={(e) => setPropertyLocation(e.target.value)}
							/>
            </div>
						<div className="col-12 col-md-4">
            <TopTextInputWithLabel
								label="Contact No"
								placeholder="Enter Contact No"
								value={propertyContactNo}
								onChange={(e) => setPropertyContactNo(e.target.value)}
							/>
            </div>
					</div>
					<div className="row">
						<div className="col-12 col-md-4">
            <FloorDeatailsForm
                floorName={floorName}
                setFloorName={setFloorName}
                floorWidth={floorWidth}
                setFloorWidth={setFloorWidth}
                floorHeight={floorHeight}
                setFloorHeight={setFloorHeight}
              />
            </div>
						<div className="col-12 col-md-4"></div>
						<div className="col-12 col-md-4"></div>
					</div>
					<div className="row"></div>
					<div className="row">
						<div className="col-12 col-md-4"></div>
						<div className="col-12 col-md-8"></div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default AddPropertise;
