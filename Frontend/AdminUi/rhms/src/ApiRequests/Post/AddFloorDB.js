import axios from "axios";

export const AddFloortoDB = async (floor) => {
	try {
        const response = await axios.post(
            "http://localhost:5001/api/floor/add",
            floor,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
            }
        );
        return response.data;
	} catch (error) {
        console.error("Error in Adding Floor in Frontend" , error.response?.data || error.message);
        throw error;
    }
};
