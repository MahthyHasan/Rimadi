import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import AddPropertyToDB from '../ApiRequests/Post/AddPropertyDB';
import AddFloorDB from '../ApiRequests/Post/AddFloorDB';
import AddRoomsToDB from '../ApiRequests/Post/AddRoomsToDB ';
import axios from 'axios';

export const usePropertyStore = create(devtools((set, get) => ({
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
    },

    // Unified field updater (handles both single field and batch update)
    setPropertyField: (fieldOrObject, value) => {
        if (typeof fieldOrObject === 'string') {
            set((state) => ({
                property: { ...state.property, [fieldOrObject]: value }
            }), false, "setPropertyField");
        } else {
            set((state) => ({
                property: { ...state.property, ...fieldOrObject }
            }), false, "setPropertyFieldsObject");
        }
    },

    setPropertyId: (id) => set((state) => ({
        property: { ...state.property, id }
    }), false, "setPropertyId"),

    // Floor Operations
    addFloor: (floor) => set((state) => ({
        property: { ...state.property, floors: [...state.property.floors, { ...floor, rooms: [] }] }
    }), false, "addFloor"),

    editFloor: (floorIndex, updatedFloor) => set((state) => {
        const updatedFloors = [...state.property.floors];
        updatedFloors[floorIndex] = { ...updatedFloors[floorIndex], ...updatedFloor, rooms: updatedFloors[floorIndex].rooms };
        return { property: { ...state.property, floors: updatedFloors } };
    }, false, "editFloor"),

    deleteFloor: (floorIndex) => set((state) => ({
        property: {
            ...state.property,
            floors: state.property.floors.filter((_, index) => index !== floorIndex)
        }
    }), false, "deleteFloor"),

    // Room Operations
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

    // Submit Property to Backend
    submitProperty: async () => {
        const { property, setPropertyId } = get();
        try {
            const response = await AddPropertyToDB(property);
            if (response && response._id) {
                setPropertyId(response._id);
            }
            console.log("Property added successfully", response);
            return response;
        } catch (error) {
            console.error("Failed to add property", error);
            throw error;
        }
    },

    addFloorToDB: async () => {
        const { property, setFloorsWithIds } = get();
        try {
            const response = await AddFloorDB(property.id, property.floors);
            if (response && Array.isArray(response.createdFloors)) {
                setFloorsWithIds(response.createdFloors);
            } else {
                console.error("Unexpected response format:", response);
                throw new Error("Invalid floors response from server");
            }
            console.log("Floors added successfully", response);
            return response;
        } catch (error) {
            console.error("Failed to add floors", error);
            throw error;
        }
    },
    
    setFloorsWithIds: (floorsWithIds) => {
        if (!Array.isArray(floorsWithIds)) {
            console.error("Expected floorsWithIds to be an array but got", floorsWithIds);
            return;
        }
        set((state) => ({
            property: {
                ...state.property,
                floors: floorsWithIds.map(floor => ({
                    ...floor,
                    id: floor._id  // Consistent ID mapping
                }))
            }
        }), false, "setFloorsWithIds");
    },

    setFloorId: (floorId) => set({
        selectedFloorId: floorId
    }, false, "setFloorId"),

    submitRoomsToDB: async (token) => {
        const { property } = get();
        const propertyId = property.id;

        for (const floor of property.floors) {
            if (floor.rooms.length > 0) {
                await AddRoomsToDB(propertyId, floor.id, floor.rooms, token);
            }
        }
    },
    setSelectedProperty: async (propertyId) => {
        try {
            const response = await axios.get(`http://localhost:5001/api/property/${propertyId}?populate=floors.rooms`, {
                withCredentials: true,
            });
    
            const propertyData = response.data;
    
            set((state) => ({
                property: {
                    id: propertyData._id,
                    name: propertyData.name,
                    rating: propertyData.rating,
                    floorCount: propertyData.floorCount,
                    checkOut: propertyData.checkOut,
                    photos: propertyData.photos || [],
                    buildingNo: propertyData.buildingNo,
                    street: propertyData.street,
                    town: propertyData.town,
                    district: propertyData.district,
                    postalCode: propertyData.postalCode,
                    province: propertyData.province,
                    country: propertyData.country,
                    floors: propertyData.floors?.map(floor => ({
                        id: floor._id,
                        name: floor.name,  // Adjust based on actual floor schema
                        width: floor.width,
                        length: floor.length,
                        rooms: floor.rooms?.map(room => ({
                            id: room._id,
                            name: room.name, // Adjust based on actual room schema
                            width: room.width, // Example: Single, Double, Suite
                            length: room.length,
                            positionX: room.positionX,
                            positionY: room.positionY,
                            accessories: room.accessories,
                            status: room.status, // Example: Available, Booked

                        })) || []
                    })) || [],
                }
            }), false, "setSelectedProperty");
    
        } catch (error) {
            console.error("Failed to fetch property details:", error);
        }
    }
    

}), { name: "PropertyStore" }));
