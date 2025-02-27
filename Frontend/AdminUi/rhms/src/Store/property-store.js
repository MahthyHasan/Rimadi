import {create} from 'zustand';

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
}));