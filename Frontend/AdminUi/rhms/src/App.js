import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./Componets/DashBoard/Pages/Overview";
import Expenses from "./Componets/DashBoard/Pages/Expenses";
import Bill from "./Componets/DashBoard/Pages/Bill";
import Properties from "./Componets/ManageRoom/Pages/Properties";
import AddPropertise from "./Componets/ManageRoom/Pages/AddPropertise";

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
         <Route path="/manageR/properties/addProperties" element={<AddPropertise />} />

      </Routes>
    </div>
  );
}

export default App;
