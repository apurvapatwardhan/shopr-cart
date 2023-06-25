import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
            return state;
        },
        remove: (state, action) => {
            console.log(action, 'slice')
            return state.filter(el => el.id !== action.payload.id)
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer