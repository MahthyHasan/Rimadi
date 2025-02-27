import React, { useState, useEffect } from "react";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import TopCardsSection from "../Components/TopCardsSection";
import PropertiesSingleCArd from "../Components/PropertiesSingleCArd";
import { Link } from "react-router-dom";
import axios from "axios";
import FilterIcon from "../../../assets/DashBoard/filter.svg";
import "../../DashBoard/Pages/dashPage.css";
import "./mrPage.css";
import AddPropertyNamePlusAddressModel from "../../Elements/ManageRoom/AddProperty/AddPropertyNamePlusAddressModel";

const tabs = [
	{ label: "Properties", link: "/manageR/properties" },
	{ label: "Rooms", link: "/manageR/Rooms" },
	{ label: "Maintenance", link: "/manageR/Maintenance" },
	{ label: "Smart Key", link: "/manageR/smartKey" },
];

function Properties() {
	const [propertyData, setPropertyData] = useState([]);
	const [errorOnPropertiesCards, setErrorOnPropertiesCards] = useState("");
	const [modelOpen, setModelOpen] = useState(false);

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5001/api/property/",
					{
						withCredentials: true,
					}
				);
				setPropertyData(response.data);
				console.log("Fetched Data:", response.data);
			} catch (error) {
				console.error(
					"Error Fetching Data:",
					error.response?.data || error.message
				);
				setErrorOnPropertiesCards(
					error.response?.data?.message || "Failed to fetch property data."
				);
			}
		};
		fetchProperties();
	}, []);

	return (
		<Layout>
			<div className="container">
				<div className="top-Navigation-bar">
					<TopNavigationBar tabs={tabs} />
				</div>
				<div className="top-info-cards">
					<TopCardsSection />
				</div>
				<div className="mt-4 properties-space-for-cards-mr">
					<div className="d-flex flex-row mt-2">
						<div className="p-2">
							<button className="Filter-button-on-expense-table">
								<img className="filter-icon-inside-a-button" src={FilterIcon} />
								<h6 className="filter-text-inside-a-button mt-2">Filter</h6>
							</button>
						</div>
						<div className="p-2">
							<input
								type="text"
								className="p-2 expense-table-input-text-field-mr"
								placeholder="Search Content"
							/>
						</div>
					</div>
					<div className="row">
						{propertyData.map((property) => (
							<div className="col-4" key={property._id}>
								<PropertiesSingleCArd property={property} />
							</div>
						))}
					</div>
				</div>
				<div className="d-flex flex-row-reverse mt-4">					
						<button className="action-button-booking-request" onClick={() => setModelOpen(true)}>
							Add a Property
						</button>					
				</div>
			</div>
			<AddPropertyNamePlusAddressModel
				modelOpen={modelOpen}
				setModelOpen={setModelOpen}
			/>
		</Layout>
	);
}

export default Properties;
