import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import AddPropertyToDB from '../ApiRequests/Post/AddPropertyDB';
import { AddFloortoDB } from '../ApiRequests/Post/AddFloorDB';

export const usePropertyStore = create(devtools((set, get) => ({
    property: {
        id: "",  // Store the property ID
        name: "",
        rating: "",
        floorCount: "",
        checkOut: "",
        checkIn: "",
        photos: [],
        buildingNo: "",
        street: "",
        town: "",
        district: "",
        postalCode: "",
        province: "",
        country: "",
        floors: []
    },

    // Unified field updater (for general property fields)
    setPropertyField: (fieldOrObject, value) => {
        if (typeof fieldOrObject === 'string') {
            set((state) => ({
                property: {
                    ...state.property,
                    [fieldOrObject]: value
                }
            }), false, "setPropertyField");
        } else {
            set((state) => ({
                property: {
                    ...state.property,
                    ...fieldOrObject
                }
            }), false, "setPropertyFieldsObject");
        }
    },

    // Function to update property ID after successful submission
    setPropertyId: (id) => set((state) => ({
        property: { 
            ...state.property, 
            id 
        }
    }), false, "setPropertyId"),

    // Floor Operations
    addFloor: (floor) => set((state) => ({
        property: {
            ...state.property,
            floors: [...state.property.floors, { ...floor, rooms: [] }]
        }
    }), false, "addFloor"),

    editFloor: (floorIndex, updatedFloor) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex] = { 
            ...updatedFloors[floorIndex], 
            ...updatedFloor, 
            rooms: updatedFloors[floorIndex].rooms 
        };
        return { property: { ...state.property, floors: updatedFloors } };
    }, false, "editFloor"),

    deleteFloor: (floorIndex) => set((state) => ({
        property: {
            ...state.property,
            floors: state.property.floors.filter((_, index) => index !== floorIndex)
        }
    }), false, "deleteFloor"),

    // Room Operations within a Floor
    addRoomToFloor: (floorIndex, room) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms.push(room);
        return { property: { ...state.property, floors: updatedFloors } };
    }, false, "addRoomToFloor"),

    editRoomInFloor: (floorIndex, roomIndex, updatedRoom) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms[roomIndex] = { 
            ...updatedFloors[floorIndex].rooms[roomIndex], 
            ...updatedRoom 
        };
        return { property: { ...state.property, floors: updatedFloors } };
    }, false, "editRoomInFloor"),

    deleteRoomFromFloor: (floorIndex, roomIndex) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms = updatedFloors[floorIndex].rooms.filter((_, idx) => idx !== roomIndex);
        return { property: { ...state.property, floors: updatedFloors } };
    }, false, "deleteRoomFromFloor"),

    // Reset Property to Initial State
    resetProperty: () => set({
        property: {
            id: "",  
            name: "",
            rating: "",
            floorCount: "",
            checkOut: "",
            checkIn: "",
            photos: [],
            buildingNo: "",
            street: "",
            town: "",
            district: "",
            postalCode: "",
            province: "",
            country: "",
            floors: []
        }
    }, false, "resetProperty"),

    // Submit Property to Backend and update ID
    submitProperty: async () => {
        const { property, setPropertyId } = get();
        try {
            const response = await AddPropertyToDB(property);
            if (response && response._id) {
                setPropertyId(response._id); // Store the property ID in state
            }
            console.log("Property added successfully", response);
            return response;
        } catch (error) {
            console.error("Failed to add property", error);
            throw error;
        }
    },

    // Submit Floor to Database

}), { name: "PropertyStore" }));
