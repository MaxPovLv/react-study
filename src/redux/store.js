import {combineReducers, configureStore} from "@reduxjs/toolkit";

import catReducer from "./slices/cat.slice";
import dogReducer from "./slices/dog.slice";

const rootReducer = combineReducers({
    cats: catReducer,
    dogs: dogReducer
});

export const store = configureStore({
    reducer: rootReducer
})