import axios from "axios";

// Api call for adding property
const AddPropertyToDB = async (property) => {
    try {
        const response = await axios.post("http;//localhost:5002/api/property/add");
        return response.data;
    } catch (error) {
        console.log("Error in adding property front end code")
    }
}
export default AddPropertyToDB;