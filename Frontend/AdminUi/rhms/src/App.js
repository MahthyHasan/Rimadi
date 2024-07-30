import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./Componets/DashBoard/Pages/Overview";
import Expenses from "./Componets/DashBoard/Pages/Expenses";


function App() {
  return (
    <div>
      <Routes>
         <Route path="/dashboard-overview" element={<Overview />} />
         <Route path="/dashboard-expenses" element={<Expenses />} />            
      </Routes>
    </div>
  );
}

export default App;
