import React from "react";
import ReactDOM from "react-dom";
import "./dashPage.css";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import RoomInfoCardforBill from "../Components/RoomInfoCardforBill";
import BillTable from "../Components/BillTable";
import FilterIcon from "../../../assets/DashBoard/filter.svg";
import PrintIcon from "../../../assets/DashBoard/print.svg";
import EmailIcon from "../../../assets/DashBoard/email.svg";
import WhatsappIcon from "../../../assets/DashBoard/whatsapp.svg";

const tabs = [
	{ label: "Overview", link: "/dashboard/overview" },
	{ label: "Expenses", link: "/dashboard/expenses" },
	{ label: "Bill", link: "/dashboard/bill" },
	{ label: "Smart Key", link: "/dashboard/smartKey" },
];

const data = [
	{
		deatail: "deatail 1 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
	{
		deatail: "deatail 2 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
	{
		deatail: "deatail 3 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
	{
		deatail: "deatail 4 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
	{
		deatail: "deatail 5 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
	{
		deatail: "deatail 6 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
	{
		deatail: "deatail 7 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
	{
		deatail: "deatail 8 for task",
		date: "01 Aug 2024",
		time: "12:30 pm",
		cost: "125 USD",
	},
];

function Bill() {
	return (
		<Layout>
			<div className="container">
				<div className="top-Navigation-bar">
					<TopNavigationBar tabs={tabs} />
				</div>
				<div className="row bill-page-total-container">
					<div className="col-4">
						<div className="row">
							<p className="chart-title-text mt-2">Bill for Room </p>{" "}
							<p className="chart-title-text-sub">Enter Room NO.</p>
						</div>
						<div className="row d-flex justify-content-center text-center">
							<input
								type="text"
								className="expense-table-input-text-field"
								placeholder="NIC No or Passport No or Email or Room No"
							/>
						</div>
						<div className="row">
							<div className="room-cards-div-with-scroll-bar mt-3">
								<RoomInfoCardforBill
									RoomNo="101"
									ClientName="Mahthy"
									Status="Checked In"
								/>
								<RoomInfoCardforBill
									RoomNo="102"
									ClientName="Mahthy"
									Status="Checked In"
								/>
								<RoomInfoCardforBill
									RoomNo="103"
									ClientName="Mahthy"
									Status="Checked In"
								/>
								<RoomInfoCardforBill
									RoomNo="104"
									ClientName="Mahthy"
									Status="Checked In"
								/>
								<RoomInfoCardforBill
									RoomNo="105"
									ClientName="Mahthy"
									Status="Checked In"
								/>
								<RoomInfoCardforBill
									RoomNo="106"
									ClientName="Mahthy"
									Status="Checked In"
								/>
							</div>
						</div>
					</div>
					<div className="col-8">
						<div className="row">
							<div className="col">
								<div className="bill-table-div-with-border">
									<p className="chart-title-text">Bill</p>
									<div className="row">
										<div className="col-2">
											<button className="Filter-button-on-expense-table">
												<img
													className="filter-icon-inside-a-button"
													src={FilterIcon}
												/>
												<h6 className="filter-text-inside-a-button mt-2">
													Filter
												</h6>
											</button>
										</div>
										<div className="col-7">
											<input
												type="text"
												className="expense-table-input-text-field"
												placeholder="Search Content"
											/>
										</div>
										<div className="col-3">
											<button className="add-expense-button-above-expense-table">
												<h5 className="add-expense-button-above-expense-table-text mt-1">
													Add Entry
												</h5>
											</button>
										</div>
									</div>
									<div className="row mt-3">
										<div className="col-12 bill-table-contain-container">
											<BillTable data={data} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-6">
								<h5 className="total-cost-text">Total Cost : 100 USD</h5>
								<h6 className="total-tax-text">Tax(10%): 10 USD</h6>
								<h3 className="total-bill-text">Total Bill : 110 USD</h3>
								<h6 className="bill-status-text">Unpaid</h6>
							</div>
							<div className="col-6 d-flex justify-content-end">
								<button className="pay-button-bill-table">
									<h2 className="pay-button-bill-table-text mt-1">
										Pay
									</h2>
								</button>
							</div>
						</div>
                        <div className="row generate-bill-div">
                            <div className="col">
                                <div className="row">
                                <p className="chart-title-text">Generate Bill</p>
                                </div>
                                <div className="row bill-generate-buttons-row">
                                    <div className="col-4">
                                    <button className="generate-button-on-expense-table">
												<img
													className="generate-icon-inside-a-button"
													src={PrintIcon}
												/>
												<h6 className="generate-text-inside-a-button mt-2">
													Print
												</h6>
											</button>
                                    </div>
                                    <div className="col-4">
                                    <button className="generate-button-on-expense-table">
												<img
													className="generate-icon-inside-a-button"
													src={EmailIcon}
												/>
												<h6 className="generate-text-inside-a-button mt-2">
													Email
												</h6>
											</button>
                                    </div>
                                    <div className="col-4">
                                    <button className="generate-button-on-expense-table">
												<img
													className="generate-icon-inside-a-button"
													src={WhatsappIcon}
												/>
												<h6 className="generate-text-inside-a-button mt-2">
													Whatsapp
												</h6>
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

export default Bill;
