import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./Componets/DashBoard/Pages/Overview";


function App() {
  return (
    <div>
      <Routes>
         <Route path="/dashboard-overview" element={<Overview />} />        
      </Routes>
    </div>
  );
}

export default App;
