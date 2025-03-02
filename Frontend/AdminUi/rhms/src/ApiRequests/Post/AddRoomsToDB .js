import axios from "axios";

// Api call for adding Rooms
const AddRoomsToDB  = async (propertyId, floorId, rooms) => {
    try {
        const response = await axios.post(
            "http://localhost:5001/api/room/add-multiple",
            {propertyId, floorId, rooms},
            {
                withCredentials: true, // Ensures the JWT cookie is sent
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error in adding Rooms (frontend side):", error.response?.data || error.message);
        throw error;
    }
};

export default AddRoomsToDB ;
