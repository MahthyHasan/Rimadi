import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import AddPropertyToDB from '../ApiRequests/Post/AddPropertyDB';
import  AddFloorDB  from '../ApiRequests/Post/AddFloorDB';

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

     // Add Floor and Store ID
     addFloorToDB: async () => {
        try {
            const { property } = get();
            const floors = property.floors;  // get all floors from store
          // Replace with actual user ID from auth (maybe req.user._id)
    
            const response = await AddFloorDB(property.id, floors);
    
            console.log("Floors added successfully", response);
            return response;
        } catch (error) {
            console.error("Failed to add floors", error);
            throw error;
        }
    },

    // // Add Room and Store ID
    // addRoomToDB: async (floorIndex, room) => {
    //     try {
    //         const { property } = get();
    //         const floorId = property.floors[floorIndex]?.id;
    //         if (!floorId) throw new Error("Floor ID not found");

    //         const response = await AddRoomToDB({
    //             ...room,
    //             floorId,
    //             propertyId: property.id,
    //             createdBy: "USER_ID_HERE"
    //         });

    //         if (response && response._id) {
    //             set((state) => {
    //                 const updatedFloors = [...state.property.floors];
    //                 updatedFloors[floorIndex].rooms.push({ ...room, id: response._id });

    //                 return { property: { ...state.property, floors: updatedFloors } };
    //             }, false, "addRoomToDB");
    //         }
    //         console.log("Room added successfully", response);
    //         return response;
    //     } catch (error) {
    //         console.error("Failed to add room", error);
    //         throw error;
    //     }
    // },

    
    // store Floor Id After adding Floor
    setFloorId: (floorId) => set((state) => ({
        selectedFloorId: floorId, // Store the floor ID
    }), false, "setFloorId"),

}), { name: "PropertyStore" }));
