import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts:[]
}


const cardSlice = createSlice ({
    name:"cartslice",
    initialState,
    reducers:{
        

//add To cart
        addToCart :(state,action)=>{
            const ItemIndex     = state.carts.findIndex((item)=>item.id === action.payload.id);

            if(ItemIndex >0){
                state.carts[ItemIndex].qnty += 1
            }
            else{
                const temp = {...action.payload,qnty: 1}
                state.carts = [...state.carts,temp]
            }
        },

        removeToCart :(state,action)=>{
            const data =state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },
        removeSingleItem :(state,action)=>{
            const ItemIndex_dec =state.carts.findIndex((item)=>item.id === action.payload.id)
            if(state.carts[ItemIndex_dec].qnty >=1){
                state.carts[ItemIndex_dec].qnty -=1
            }
        },
        emptycartItem:(state,action)=>{
            state.carts =[]
        }

    }

});

export const { addToCart,removeToCart ,emptycartItem,removeSingleItem} =cardSlice.actions;


export default cardSlice.reducer