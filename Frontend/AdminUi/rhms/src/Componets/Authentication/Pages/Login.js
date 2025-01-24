import React from "react";

function SignUp() {
    return (
        <>
        <div className="bg-rmdGreen w-full h-screen flex justify-center items-center">
            {/* <div className="bg-white w-1/4 h-3/4 p-10 rounded-lg">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form className="mt-5">
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-5">
                        <button type="submit" className="w-full bg-rmdGreen text-white p-2 rounded-md">Sign Up</button>
                    </div>
                </form>
        </div> */}
        <div className="flex flex-col justify-center items-center px-5 py-7 gap-4">
            <div>
                <div className="flex flex-col gap-2">
                    <label className="text-[0.5rem] text-rmdYellow flex-start">Enter the User Name</label>
                    <input type="text" className="border-2 border-rmdYellow rounded-md p-1 text-sm" />
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default SignUp;  