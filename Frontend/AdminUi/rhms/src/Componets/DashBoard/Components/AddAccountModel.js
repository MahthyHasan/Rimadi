import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddAccountModel({ open, onClose, onSave }) {
  const [formData, setFormData] = useState({
    date: "",
    entryType: "",
    amount: "",
    description: "",
    category: "",
    paymentMethod: "",
    reference: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("Form Data Before Submission:", formData); // Debugging log

    try {
      const response = await axios.post(
        "http://localhost:5001/api/account/add",
        formData,
        {
          withCredentials: true, // Ensures cookies (JWT) are sent with the request
        }
      );
      console.log("API Response:", response.data);
      toast.success("Entry added Sucessfully"); // Debugging log
      setLoading(false);
      onSave(response.data); // Optional: to trigger any action after saving
      onClose();
    } catch (err) {
      console.error("Error Adding Account Entry:", err.response?.data || err.message);
      toast.error(err.message); // Debugging log
      setError(err.response?.data?.message || "Failed to add account entry.");
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg shadow-md max-w-full overflow-x-auto"
      >
        <h3 className="text-lg font-bold mb-4">Add Account Entry</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Entry Type</label>
              <select
                name="entryType"
                value={formData.entryType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              >
                <option value="">Select Entry Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows="3"
                required
              ></textarea>
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Reference</label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 ${
                loading ? "bg-rmdYellow cursor-not-allowed" : "bg-rmdGreen text-white"
              } rounded`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Add Entry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAccountModel;
