import axios from "axios";

const AddFloorDB = async (propertyId, floors, createdBy) => {
    try {
        const response = await axios.post(
            "http://localhost:5001/api/floor/add-multiple",
            { propertyId, floors },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error in Adding Floor in Frontend", error.response?.data || error.message);
        throw error;
    }
};

export default AddFloorDB;

