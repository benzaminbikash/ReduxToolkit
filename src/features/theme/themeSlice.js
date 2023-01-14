import { createSlice } from "@reduxjs/toolkit";


const initialState={
    color:""
}

export const themeSlice = createSlice({
    name:"Theme",
    initialState,
    reducers:{
        changeColor:(state, action)=>{
            state.color=action.payload
        }
    }
})
export const {changeColor}=themeSlice.actions

export default themeSlice.reducer