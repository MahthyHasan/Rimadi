import React from "react";
import ReactDOM from "react-dom";
import TopNavigationBar from "../Components/TopNavigationBar";
import Layout from "../../../Layout/Layout";
import "../../DashBoard/Pages/dashPage.css";
import "./mrPage.css";
import TopCardsSection from "../Components/TopCardsSection";
import FilterIcon from "../../../assets/DashBoard/filter.svg";
import PropertiesSingleCArd from "../Components/PropertiesSingleCArd";

const tabs = [
	{ label: "Properties", link: "/manageR/properties" },
	{ label: "Rooms", link: "/manageR/Rooms" },
	{ label: "Maintenance", link: "/manageR/Maintenance" },
	{ label: "Smart Key", link: "/manageR/smartKey" },
];

function Properties() {
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
						<div className="col-4">
							<PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
						</div>
						<div className="col-4">
            <PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
            </div>
						<div className="col-4">
            <PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
            </div>
					</div>
          <div className="row">
						<div className="col-4">
							<PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
						</div>
						<div className="col-4">
            <PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
            </div>
						<div className="col-4">
            <PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
            </div>
					</div>
          <div className="row">
						<div className="col-4">
							<PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
						</div>
						<div className="col-4">
            <PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
            </div>
						<div className="col-4">
            <PropertiesSingleCArd
                propertyA="Available"
								roomNo="20"
								propertyName="Blue Villa"
								location="Batticaloa, Srilanka"
								roomType="Luxary, AC, Non AC"
								rating="8.8"
								totalAccomadateCount="100"
							/>
            </div>
					</div>
				</div>
        <div className="d-flex flex-row-reverse mt-4">
		<button className='action-button-booking-request'>Add a Property</button>
          
        </div>
			</div>
		</Layout>
	);
}

export default Properties;
