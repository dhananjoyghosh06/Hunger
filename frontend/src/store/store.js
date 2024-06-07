import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import orderDetailsReducer from "./orderDetails";
// import { saveState, loadState } from "./localStorage";



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        orderDetails:orderDetailsReducer,
    },
})

