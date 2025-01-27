import React, { createContext, useContext, useState } from "react";
import apiClient from "./apiService.js";
const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    try {
      const response = await apiClient.get("/account");
      setAccounts(response.data);
    } catch (error) {
      console.error("Error fetching account entries:", error.message);
    }
  };

  const addAccountEntry = async (entry) => {
    try {
      const response = await apiClient.post("/account/add", entry);
      setAccounts((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error adding account entry:", error.message);
    }
  };

  const deleteAccountEntry = async (id) => {
    try {
      await apiClient.delete(`/account/${id}`);
      setAccounts((prev) => prev.filter((entry) => entry._id !== id));
    } catch (error) {
      console.error("Error deleting account entry:", error.message);
    }
  };

  return (
    <AccountContext.Provider value={{ accounts, fetchAccounts, addAccountEntry, deleteAccountEntry }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccounts = () => useContext(AccountContext);