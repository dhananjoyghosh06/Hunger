import {createSlice} from '@reduxjs/toolkit'
import { useEffect } from 'react';
import axios from 'axios';

const initialState=[];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add: 
        (state, action)=>{           
            const itemIndex = state.findIndex(item=>item.id === action.payload.id);
            if(itemIndex!== -1){
                state[itemIndex].quantity +=1;
            }else{
                state.push(action.payload);
            }
            
        },
        remove:(state, action)=>{
            return state.filter(item=>item.id!==action.payload);
        },
        removeItem: (state, action) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
          
            if (itemIndex !== -1 && state[itemIndex].quantity > 1) {
              // Item exists and quantity is more than 1, decrease quantity
              state[itemIndex].quantity -= 1;
            } else if (itemIndex !== -1 && state[itemIndex].quantity === 1) {
              // Item exists and quantity is 1, remove item
              state.splice(itemIndex, 1); // Remove item from the array
            }
          },
          removeAll:()=>{
                return [];
          }
          
          

    }
})


export const {add, remove, removeItem,removeAll, loadCart} = cartSlice.actions;
export default cartSlice.reducer;
