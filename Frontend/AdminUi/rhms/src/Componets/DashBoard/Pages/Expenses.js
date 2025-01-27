import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./dashPage.css";
import Layout from "../../../Layout/Layout";
import TopNavigationBar from "../Components/TopNavigationBar";
import LineChartExpences from "../Components/LineChartExpences";
import ExpenseTable from "../Components/ExpenseTable";
import FilterIcon from "../../../assets/DashBoard/filter.svg";
import CustomDatePicker from "../Components/CustomDatePicker";
import AddAccountModel from "../Components/AddAccountModel";
import axios from "axios";

const tabs = [
	{ label: "Overview", link: "/dashboard/overview" },
	{ label: "Expenses", link: "/dashboard/expenses" },
	{ label: "Bill", link: "/dashboard/bill" },
	{ label: "Smart Key", link: "/dashboard/smartKey" },
];

function Expenses() {
	const handleDateChange = (date) => {
		console.log("Selected date:", date);
	};

	const [openModel, setOpenModel] = useState(false);
	const [data, setData] = useState([]);

	const handleSave = (newEntry) => {
		setData([...data, newEntry]);
	};

	const [tableData, setTableData] = useState([]);
	const [errorOnExpenseTable, setErrorOnExpenseTable] = useState("");

	useEffect(() => {
		const fetchAccounts = async () => {
			try {
				const response = await axios.get("http://localhost:5001/api/account/", {
					withCredentials: true,
				});
				setTableData(response.data);
				console.log("Fetched Data:", response.data);
			} catch (err) {
				console.error("Error Fetching Data:", err.response?.data || err.message);
				setErrorOnExpenseTable(err.response?.data?.message || "Failed to fetch account data.");
			}
		};

		fetchAccounts();
	}, []);

	return (
		<Layout>
			<div className="container mx-auto p-4">
				<div className="mb-4">
					<TopNavigationBar tabs={tabs} />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
					<p className="chart-title-text mt-2">Expense Vs Income</p>
					<div className="flex justify-end">
						<CustomDatePicker
							startDate={new Date()}
							onChange={handleDateChange}
							dateFormat="MM/dd/yyyy"
						/>
					</div>
				</div>
				<div className="my-4">
					<LineChartExpences />
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2">
						<p className="chart-title-text">Accounts Table</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
							<button className="Filter-button-on-expense-table flex items-center gap-2">
								<img
									className="filter-icon-inside-a-button"
									src={FilterIcon}
									alt="Filter Icon"
								/>
								<h6 className="filter-text-inside-a-button mt-2">Filter</h6>
							</button>
							<input
								type="text"
								className="expense-table-input-text-field col-span-2"
								placeholder="Search Content"
							/>
							<button
								className="add-expense-button-above-expense-table"
								onClick={() => setOpenModel(true)}>
								<h5 className="add-expense-button-above-expense-table-text mt-1">
									Add Entry
								</h5>
							</button>
							<AddAccountModel
								open={openModel}
								onClose={() => setOpenModel(false)}
								onSave={handleSave}
							/>
						</div>
						<div>
							<ExpenseTable data={tableData} />
						</div>
					</div>
					<div>
						<div className="mb-6 p-4 border rounded-lg">
							<p className="chart-title-text mt-2">Generate Statement</p>
							<CustomDatePicker
								startDate={new Date()}
								onChange={handleDateChange}
								dateFormat="MM/dd/yyyy"
							/>
							<div className="flex justify-center mt-4">
								<button className="add-expense-button-above-expense-table">
									<h5 className="add-expense-button-above-expense-table-text mt-1">
										Generate
									</h5>
								</button>
							</div>
						</div>
						<div className="mb-6 p-4 border rounded-lg">
							<p className="chart-title-text mt-2 text-center">
								Set Expense Target
							</p>
							<input
								type="number"
								className="expense-table-input-text-field w-full mt-2"
								placeholder="Expense Target"
							/>
							<div className="flex justify-center mt-4">
								<button className="add-expense-button-above-expense-table">
									<h5 className="add-expense-button-above-expense-table-text mt-1">
										Set
									</h5>
								</button>
							</div>
						</div>
						<div className="p-4 border rounded-lg">
							<p className="chart-title-text mt-2 text-center">
								Set Income Target
							</p>
							<input
								type="number"
								className="expense-table-input-text-field w-full mt-2"
								placeholder="Income Target"
							/>
							<div className="flex justify-center mt-4">
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
		</Layout>
	);
}

export default Expenses;
