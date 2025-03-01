import {create} from 'zustand';
import AddPropertyToDB from '../ApiRequests/Post/AddPropertyDB';

export const usePropertyStore = create((set) => ({
    property: {
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
        floors: [] // Each floor contains rooms
    },

    // Update basic property details
    updatePropertyDetails: (details) => set((state) => ({
        property: {
            ...state.property,
            ...details
        }
    })),

    // Add a new floor
    addFloor: (floor) => set((state) => ({
        property: {
            ...state.property,
            floors: [...state.property.floors, { ...floor, rooms: [] }]
        }
    })),

    // Edit floor details
    editFloor: (floorIndex, updatedFloor) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex] = { ...updatedFloor, rooms: updatedFloors[floorIndex].rooms };
        return {
            property: {
                ...state.property,
                floors: updatedFloors
            }
        };
    }),

    // Delete a floor
    deleteFloor: (floorIndex) => set((state) => ({
        property: {
            ...state.property,
            floors: state.property.floors.filter((_, index) => index !== floorIndex)
        }
    })),

    // Add room to specific floor
    addRoomToFloor: (floorIndex, room) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms.push(room);
        return {
            property: {
                ...state.property,
                floors: updatedFloors
            }
        };
    }),

    // Edit room within a floor
    editRoomInFloor: (floorIndex, roomIndex, updatedRoom) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms[roomIndex] = updatedRoom;
        return {
            property: {
                ...state.property,
                floors: updatedFloors
            }
        };
    }),

    // Delete room from a floor
    deleteRoomFromFloor: (floorIndex, roomIndex) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms = updatedFloors[floorIndex].rooms.filter((_, idx) => idx !== roomIndex);
        return {
            property: {
                ...state.property,
                floors: updatedFloors
            }
        };
    }),

    // Reset entire property
    resetProperty: () => set({
        property: {
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
    }),

    submitProperty: async () => {
        const { property } = usePropertyStore.getState();
        try {
            const response = await AddPropertyToDB(property);
            console.log("property added successfully", response);
            return response;
        } catch (error) {
            console.error("Failed to add property", error);
            throw error;
        }
    }
}));
