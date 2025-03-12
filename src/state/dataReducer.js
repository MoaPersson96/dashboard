import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "Data"
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        moreData(state, action) {
            state = "More data."
        }
    }
})

export const {moreData} = dataSlice.actions

export default dataSlice.reducer;