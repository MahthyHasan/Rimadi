import React from "react";
import ReactDOM from "react-dom";
import "./dashPage.css";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import LineChartExpences from "../Components/LineChartExpences";
import ExpenseTable from "../Components/ExpenseTable";
import FilterIcon from "../../../assets/DashBoard/filter.svg";
import CustomDatePicker from "../Components/CustomDatePicker";

const tabs = [
	{ label: "Overview", link: "/dashboard/overview" },
	{ label: "Expenses", link: "/dashboard/expenses" },
	{ label: "Bill", link: "/dashboard/bill" },
	{ label: "Smart Key", link: "/dashboard/smartKey" },
];

const data = [
	{
		deatail: "deatail 1 for task",
		debit: "125 USD",
		credit: "125 USD",
		balance: "125 USD",
	},
	{
		deatail: "deatail 2 for task",
		debit: "125 USD",
		credit: "125 USD",
		balance: "125 USD",
	},
	{
		deatail: "deatail 3 for task",
		debit: "125 USD",
		credit: "125 USD",
		balance: "125 USD",
	},
	{
		deatail: "deatail 4 for task",
		debit: "125 USD",
		credit: "125 USD",
		balance: "125 USD",
	},
	{
		deatail: "deatail 5 for task",
		debit: "125 USD",
		credit: "125 USD",
		balance: "125 USD",
	},
	{
		deatail: "deatail 6 for task",
		debit: "125 USD",
		credit: "125 USD",
		balance: "125 USD",
	},
	{
		deatail: "deatail 7 for task",
		debit: "125 USD",
		credit: "125 USD",
		balance: "125 USD",
	},
];

function Expenses() {
	const handleDateChange = (date) => {
		console.log("Selected date:", date);
	};

	return (
		<Layout>
			<div className="container">
				<div className="top-Navigation-bar">
					<TopNavigationBar tabs={tabs} />
				</div>
				<div className="row mt-2">
									<div className="col-6">
										<p className="chart-title-text mt-2">Expense Vs Income</p>
									</div>
									<div className="col-6 d-flex justify-content-end">
										<CustomDatePicker
											startDate={new Date()}
											onChange={handleDateChange}
											dateFormat="MM/dd/yyyy"
										/>
									</div>
								</div>
				<div className="row">
					<div className="dashboard-expense-page-chart">
						<LineChartExpences />
					</div>
				</div>
				<div className="row table-row-containing-sector">
					<div className="col-7 table-container-for-expenses-records">
						<p className="chart-title-text">Accounts Table</p>
						<div className="row">
							<div className="col-2">
								<button className="Filter-button-on-expense-table">
									<img
										className="filter-icon-inside-a-button"
										src={FilterIcon}
									/>
									<h6 className="filter-text-inside-a-button mt-2">Filter</h6>
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
							<div className="col-12 table-contain-container">
								<ExpenseTable data={data} />
							</div>
						</div>
					</div>
					<div className="col-5 table-container-for-expenses-records-right">
						<div className="row generate-staatement-div">
							<div className="col-12">
								<div className="row mt-2">
									<div className="col-6">
										<p className="chart-title-text mt-2">Generate Statement</p>
									</div>
									<div className="col-6">
										<CustomDatePicker
											startDate={new Date()}
											onChange={handleDateChange}
											dateFormat="MM/dd/yyyy"
										/>
									</div>
								</div>
								<div className="row d-flex justify-content-center">
									<button className="add-expense-button-above-expense-table">
										<h5 className="add-expense-button-above-expense-table-text mt-1">
											Generate
										</h5>
									</button>
								</div>
							</div>
						</div>
						<div className="row mt-3 generate-staatement-div">
							<div className="col-12">
								<div className="row d-flex justify-content-center text-center">
									<p className="chart-title-text mt-2">Set Expense Target</p>
								</div>
								<div className="row d-flex justify-content-center text-center">
									<input
										type="number"
										className="expense-table-input-text-field"
										placeholder="Expense Target"
									/>
								</div>
								<div className="row  mt-2 d-flex justify-content-center">
									<button className="add-expense-button-above-expense-table">
										<h5 className="add-expense-button-above-expense-table-text mt-1">
											Set
										</h5>
									</button>
								</div>
							</div>
						</div>
						<div className="row mt-3 generate-staatement-div">
							<div className="col-12">
								<div className="row d-flex justify-content-center text-center">
									<p className="chart-title-text mt-2">Set Income Target</p>
								</div>
								<div className="row d-flex justify-content-center text-center">
									<input
										type="number"
										className="expense-table-input-text-field"
										placeholder="Income Target"
									/>
								</div>
								<div className="row  mt-2 d-flex justify-content-center">
									<button className="add-expense-button-above-expense-table">
										<h5 className="add-expense-button-above-expense-table-text mt-1">
											Set
										</h5>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Expenses;
