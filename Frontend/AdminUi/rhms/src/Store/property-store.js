import { create } from 'zustand';
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
            }));
        } else {
            set((state) => ({
                property: {
                    ...state.property,
                    ...fieldOrObject
                }
            }));
        }
    },

    // Floor Operations
    addFloor: (floor) => set((state) => ({
        property: {
            ...state.property,
            floors: [...state.property.floors, { ...floor, rooms: [] }]
        }
    })),

    editFloor: (floorIndex, updatedFloor) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex] = { 
            ...updatedFloors[floorIndex], 
            ...updatedFloor, 
            rooms: updatedFloors[floorIndex].rooms 
        };
        return { property: { ...state.property, floors: updatedFloors } };
    }),

    deleteFloor: (floorIndex) => set((state) => ({
        property: {
            ...state.property,
            floors: state.property.floors.filter((_, index) => index !== floorIndex)
        }
    })),

    // Room Operations within a Floor
    addRoomToFloor: (floorIndex, room) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms.push(room);
        return { property: { ...state.property, floors: updatedFloors } };
    }),

    editRoomInFloor: (floorIndex, roomIndex, updatedRoom) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms[roomIndex] = { 
            ...updatedFloors[floorIndex].rooms[roomIndex], 
            ...updatedRoom 
        };
        return { property: { ...state.property, floors: updatedFloors } };
    }),

    deleteRoomFromFloor: (floorIndex, roomIndex) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex].rooms = updatedFloors[floorIndex].rooms.filter((_, idx) => idx !== roomIndex);
        return { property: { ...state.property, floors: updatedFloors } };
    }),

    // Reset Property to Initial State
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

    // Submit Property to Backend
    submitProperty: async () => {
        const { property } = usePropertyStore.getState();
        try {
            const response = await AddPropertyToDB(property);
            console.log("Property added successfully", response);
            return response;
        } catch (error) {
            console.error("Failed to add property", error);
            throw error;
        }
    }
}));
