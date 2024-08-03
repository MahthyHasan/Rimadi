import React from "react";
import ReactDOM from "react-dom";
import "./dashPage.css";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import LineChartExpences from "../Components/LineChartExpences";
import ExpenseTable from "../Components/ExpenseTable";

const tabs = [
	{ label: "Overview", link: "/dashboard/overview" },
	{ label: "Expenses", link: "/dashboard/expenses" },
	{ label: "Bill", link: "/dashboard/bill" },
	{ label: "Smart Key", link: "/dashboard/smartKey" },
];

const data = [
	{ deatail: "deatail 1 for task", debit: "125 USD", credit: "125 USD", balance: "125 USD" },
	{ deatail: "deatail 2 for task", debit: "125 USD", credit: "125 USD", balance: "125 USD" },
	{ deatail: "deatail 3 for task", debit: "125 USD", credit: "125 USD", balance: "125 USD" },
];

function Expenses() {
	return (
		<Layout>
			<div className="container">
				<div className="top-Navigation-bar">
					<TopNavigationBar tabs={tabs} />
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
								<button className="Filter-button-on-expense-table"></button>
							</div>
							<div className="col-7"></div>
							<div className="col-3"></div>
						</div>
						<div className="row">
							<div className="col-12">
								<ExpenseTable data={data} />
							</div>
						</div>
					</div>
					<div className="col-5 table-container-for-expenses-records"></div>
				</div>
			</div>
		</Layout>
	);
}

export default Expenses;
