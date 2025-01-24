import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LogoPath from "../../../assets/Layout/logo.png";
import { useNavigate } from "react-router-dom";

export default function SigninForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async ({ username, password }) => {
      const res = await fetch("http://localhost:5001/api/auth/logIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return data;
    },
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/dashboard"); // Navigate to dashboard
    },
    onError: (err) => {
      toast.error(err.message || "Login failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData); // Pass formData to the mutation
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-transparent border-solid border-[2px] border-rmdYellow rounded-xl shadow-lg p-8">
        <div className="flex justify-center items-center">
          <img src={LogoPath} alt="Logo" />
        </div>
        <h2 className="text-2xl font-bold text-rmdGreen mb-6 text-center">
          Sign In
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-rmdGreen mb-1">
              User Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 ring-1 ring-rmdYellow bg-transparent text-rmdGreen border border-rmdYellow rounded-lg focus:ring-2 focus:ring-rmdYellow focus:border-rmdYellow outline-none transition-all"
              placeholder="Enter your user name"
              onChange={handleInputChange}
              value={formData.username}
              name="username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rmdGreen mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-transparent ring-1 ring-rmdYellow text-rmdGreen border border-rmdYellow rounded-lg focus:ring-2 focus:ring-rmdYellow focus:border-rmdYellow outline-none transition-all"
              placeholder="••••••••"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-rmdYellow"
              />
              <span className="ml-2 text-sm text-rmdGreen">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-rmdYellow text-rmdGreen hover:bg-transparent hover:ring-2 hover:ring-rmdYellow hover:text-rmdGreen hover:scale-95 font-medium py-2.5 rounded-lg transition-colors"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Sign In"}
          </button>
          {isError && (
            <div className="text-red-500 mt-2">{error?.message}</div>
          )}
        </form>
      </div>
    </div>
  );
}
