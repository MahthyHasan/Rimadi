import React from "react";
import ReactDOM from "react-dom";
import "./dashPage.css";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import LineChartExpences from "../Components/LineChartExpences";


const tabs = [
	{ label: "Overview", link: "/dashboard/overview" },
	{ label: "Expenses", link: "/dashboard/expenses" },
	{ label: "Bill", link: "/dashboard/bill" },
	{ label: "Smart Key", link: "/dashboard/smartKey" },
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
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4"></div>
        </div>
			</div>
		</Layout>
	);
}

export default Expenses;
