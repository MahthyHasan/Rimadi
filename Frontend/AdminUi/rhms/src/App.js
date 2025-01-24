import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./Componets/DashBoard/Pages/Overview";
import Expenses from "./Componets/DashBoard/Pages/Expenses";
import Bill from "./Componets/DashBoard/Pages/Bill";
import Properties from "./Componets/ManageRoom/Pages/Properties";
import AddPropertise from "./Componets/ManageRoom/Pages/AddPropertise";
import SignUp from "./Componets/Authentication/Pages/SignUp";
import Login from "./Componets/Authentication/Pages/Login";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/dashboard" element={<Overview />} />
				<Route path="/dashboard/overview" element={<Overview />} />
				<Route path="/dashboard/expenses" element={<Expenses />} />
				<Route path="/dashboard/bill" element={<Bill />} />
				<Route path="/manageR" element={<Properties />} />
				<Route path="/manageR/properties" element={<Properties />} />
				<Route
					path="/manageR/properties-addProperty"
					element={<AddPropertise />}
				/>
				<Route path="/Login" element={<Login />} />
				<Route path="/SignUP" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
