import {create} from 'zustand';
import AddPropertyToDB from '../ApiRequests/Post/AddPropertyDB';

export const usePropertyStore = create((set) => ({
    property: {
        name:"",
        rating:"",
        floorCount:"",
        checkOut:"",
        checkIn:"",
        photos:[],
        buildingNo:"",
        street:"",
        town:"",
        district:"",
        postalCode:"",
        province:"",
        country:"",
    },
    setPropertyField: (field, value) => set((state) => ({
        property: {...state.property, [field]: value },
    })),
    addPropertyImages: (files) => set((state) => ({
        property: {
            ...state.property,
            photos: [...state.property.photos, ...files],
        },
    })),
    resetProperty: () => set({
        property: {
        name:"",
        rating:"",
        floorCount:"",
        checkOut:"",
        checkIn:"",
        photos:[],
        buildingNo:"",
        street:"",
        town:"",
        district:"",
        postalCode:"",
        province:"",
        country:"",
        },
    }),

    // Here I creating function to add the Property data to add them in to the system database
    submitProperty: async () => {
        const {property} = usePropertyStore.getState();
        try {
            const response = await AddPropertyToDB(property);
            console.log("property added successfully", response);            
        } catch (error) {
            console.error("Failed to add property", error );            
        }
    }
}));