import React from "react";
import ReactDOM from "react-dom";
import "./dashPage.css";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import CustomDatePicker from "../Components/CustomDatePicker";
import TopCardsSection from "../Components/TopCardsSection";

import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BookingRequestCard from "../Components/BookingRequestCard";
import PcSmall from "../Components/PcSmall";

// Registering the ArcElement
Chart.register(ArcElement);

const tabs = [
	{ label: "Overview", link: "/dashboard-overview" },
	{ label: "Expenses", link: "/dashboard-expenses" },
	{ label: "Bill", link: "/dashboard-bill" },
	{ label: "Smart Key", link: "/dashboard-smartKey" },
];

const data = {
	labels: ["Red", "Blue", "Yellow"],
	datasets: [
		{
			label: "My First Dataset",
			data: [300, 50, 100],
			backgroundColor: [
				"rgb(255, 99, 132)",
				"rgb(54, 162, 235)",
				"rgb(255, 205, 86)",
			],
			hoverOffset: 4,
		},
	],
};

function Overview() {
	const handleDateChange = (date) => {
		console.log("Selected date:", date);
	};

	return (
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
						<div className="CustomDatePicker-on-overview-page-end-date">
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
				<div className="row">
					<div className="col-4 mt-4">
						<div className="row">
							<div className="chart-container-div">
								<p className="chart-title-text">Expense Meter</p>
								<Doughnut data={data} className="piechart-first-on-dashboard" />
							</div>
						</div>
						<div className="row mt-2">
							<div className="chart-container-div">
								<p className="chart-title-text">Income Meter</p>
								<Doughnut data={data} className="piechart-first-on-dashboard" />
							</div>
						</div>
					</div>
					<div className="col-4 mt-4">
						<div className="booking-requests-div">
							<BookingRequestCard
								roomA="Available"
								roomNo="G101"
								clientName="Mahthy Hasan"
								country="Sri Lanka"
								duration="3 Nights"
								rating="99"
								pRecords="12"
							/>
							<BookingRequestCard
								roomA="Available"
								roomNo="G101"
								clientName="Mahthy Hasan"
								country="Sri Lanka"
								duration="3 Nights"
								rating="99"
								pRecords="12"
							/>
							<BookingRequestCard
								roomA="Available"
								roomNo="G101"
								clientName="Mahthy Hasan"
								country="Sri Lanka"
								duration="3 Nights"
								rating="99"
								pRecords="12"
							/>
							<BookingRequestCard
								roomA="Available"
								roomNo="G101"
								clientName="Mahthy Hasan"
								country="Sri Lanka"
								duration="3 Nights"
								rating="99"
								pRecords="12"
							/>
							<BookingRequestCard
								roomA="Available"
								roomNo="G101"
								clientName="Mahthy Hasan"
								country="Sri Lanka"
								duration="3 Nights"
								rating="99"
								pRecords="12"
							/>
						</div>
					</div>
					<div className="col-4 mt-4">
						<div className="row">
							<div className="client-action-div">
								<div className="row">
									<p className="client-action-heading">Client Actions</p>
									<p className="clind-action-headline-description">
										Enter NIC No or Passport No or Email Address.
									</p>
								</div>
								<div className="row justify-content-center">
									<div className="col-6 col-md-4">
										<input
											type="text"
											className="client-action-input-text-field"
											placeholder="NIC No or Passport No or Email "
										/>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-6 col-md-4">
										<div className="search-profile-div-profile-action">
											<PcSmall name="Mahthy" />
											<PcSmall name="Mahthy" />
											<PcSmall name="Mahthy" />
											<PcSmall name="Mahthy" />
										</div>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-6 col-md-4">
										<button className="client-action-button">Action</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="counter-availability">
								<div className="row">
									<p className="client-action-heading">Counter Availability</p>
								</div>
								<div className="row justify-content-center">
									<div className="col-6 col-md-4">
										<button className="client-action-button">Available</button>
									</div>
								</div>
								<div className="row justify-content-center  mt-4">
									<div className="col-6 col-md-4">
										<button className="client-action-button-red">
											Not Available
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Overview;
