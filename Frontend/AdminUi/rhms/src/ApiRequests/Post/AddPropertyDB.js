import axios from "axios";

// Api call for adding property
const AddPropertyToDB = async (property) => {
    try {
        const response = await axios.post(
            "http://localhost:5001/api/property/add",
            property, // Sending property data
            {
                withCredentials: true, // Ensures the JWT cookie is sent
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error in adding property (frontend side):", error.response?.data || error.message);
        throw error;
    }
};

export default AddPropertyToDB;
