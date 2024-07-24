import React from "react";
import ReactDOM from "react-dom";
import "./dashPage.css";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import CustomDatePicker from "../Components/CustomDatePicker";
import TopCardsSection from "../Components/TopCardsSection";

const tabs = [
	{ label: "Overview", link: "/dashboard-overview" },
	{ label: "Expenses", link: "/dashboard-expenses" },
	{ label: "Bill", link: "/dashboard-bill" },
	{ label: "Smart Key", link: "/dashboard-smartKey" },
];

function Overview() {
	const handleDateChange = (date) => {
		console.log("Selected date:", date);
	};

	return (
		<>
			<Layout>
				<div className="container">
					<div className="top-Navigation-bar">
						<TopNavigationBar tabs={tabs} />
					</div>
					<div className="d-flex justify-content-end align-items-end">            
						<div className="d-flex flex-column">
							<div className="row">
								<p>Start Date</p>
							</div>
							<div className="CustomDatePicker-on-overview-page-start-date">
								<CustomDatePicker 
									startDate={new Date()}
									onChange={handleDateChange}
									dateFormat="MM/dd/yyyy"
								/>								
							</div>
						</div>
            <div className="mid-block-with-arrow"></div>
            <div className="d-flex flex-column">
							<div className="row">
								<p>End Date</p>
							</div>
							<div className=" CustomDatePicker-on-overview-page-end-date">
								<CustomDatePicker
									startDate={new Date()}
									onChange={handleDateChange}
									dateFormat="MM/dd/yyyy"
								/>								
							</div>
						</div>
					</div>
          <div className="top-info-cards">
            <TopCardsSection />
          </div>
				</div>
			</Layout>
		</>
	);
}

export default Overview;
