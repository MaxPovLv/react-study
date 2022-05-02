import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: []
};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            const newCat = {id: new Date().getTime(), name}
            state.dogs.push(newCat)
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex(dog => dog.id === id)
            state.dogs.splice(index, 1)
        },
        setDogForUpdate:(state, action) => {
            state.dogForUpdate = action.payload.dog;
        },
        updateDog: (state, action) => {
            const {id,name} = action.payload;
            const index = state.dogs.findIndex((dog) => dog.id === id);
            state.dogs[index].name = name;
            state.dogForUpdate = false;
        }
    }
});
const {reducer, actions: {addDog, deleteDog,setDogForUpdate,updateDog}} = dogSlice;

export default reducer
export const actionsDog = {
    addDog, deleteDog,setDogForUpdate,updateDog}