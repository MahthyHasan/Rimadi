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
	{ label: "Overview", link: "/dashboard/overview" },
	{ label: "Expenses", link: "/dashboard/expenses" },
	{ label: "Bill", link: "/dashboard/bill" },
	{ label: "Smart Key", link: "/dashboard/smartKey" },
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
			<div className="container mx-auto px-4">
				<div className="mb-4">
					<TopNavigationBar tabs={tabs} />
				</div>
				<div className="flex flex-wrap justify-between items-end mb-4 gap-4">
					<div className="flex flex-col">
						<p className="mb-2">Start Date</p>
						<CustomDatePicker
							startDate={new Date()}
							onChange={handleDateChange}
							dateFormat="MM/dd/yyyy"
						/>
					</div>
					<div className="flex flex-col">
						<p className="mb-2">End Date</p>
						<CustomDatePicker
							startDate={new Date()}
							onChange={handleDateChange}
							dateFormat="MM/dd/yyyy"
						/>
					</div>
				</div>
				<div className="mb-8">
					<TopCardsSection />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* Left Column */}
					<div className="space-y-4">
						<div className="bg-white p-4 rounded shadow">
							<p className="text-lg font-semibold mb-4">Expense Meter</p>
							<Doughnut data={data} />
						</div>
						<div className="bg-white p-4 rounded shadow">
							<p className="text-lg font-semibold mb-4">Income Meter</p>
							<Doughnut data={data} />
						</div>
					</div>

					{/* Middle Column */}
					<div className="space-y-4 overflow-y-auto max-h-[calc(100vh-300px)]">
						{Array(5)
							.fill(0)
							.map((_, index) => (
								<BookingRequestCard
									key={index}
									roomA="Available"
									roomNo="G101"
									clientName="Mahthy Hasan"
									country="Sri Lanka"
									duration="3 Nights"
									rating="99"
									pRecords="12"
								/>
							))}
					</div>

					{/* Right Column */}
					<div className="space-y-4">
						<div className="bg-white p-4 rounded shadow">
							<p className="text-lg font-semibold mb-4">Client Actions</p>
							<p className="mb-4">
								Enter NIC No or Passport No or Email Address.
							</p>
							<input
								type="text"
								className="w-full p-2 border border-gray-300 rounded mb-4"
								placeholder="NIC No or Passport No or Email"
							/>
							<div className="flex flex-wrap gap-2 mb-4">
								{Array(4)
									.fill(0)
									.map((_, index) => (
										<PcSmall key={index} name="Mahthy" />
									))}
							</div>
							<button className="bg-blue-500 text-white px-4 py-2 rounded">
								Action
							</button>
						</div>
						<div className="bg-white p-4 rounded shadow">
							<p className="text-lg font-semibold mb-4">Counter Availability</p>
							<div className="flex flex-col space-y-4">
								<button className="bg-green-500 text-white px-4 py-2 rounded">
									Available
								</button>
								<button className="bg-red-500 text-white px-4 py-2 rounded">
									Not Available
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Overview;
