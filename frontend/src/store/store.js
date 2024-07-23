import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
// import { saveState, loadState } from "./localStorage";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';

const persistConfig ={
    key:"root",
    version:1,
    storage,
};

const reducer =combineReducers({
    cart:cartReducer,
})

const persistedReducers = persistReducer(persistConfig, reducer);
export const store = configureStore({
    reducer: persistedReducers,
    // {
    //     cart: cartReducer,
    // },
})

