import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "Data",
    loggedIn: true
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        moreData(state, action) {
            state.value = "More data."
        },
        login(state) { state.loggedIn = true }, 
        logout(state) { state.loggedIn = false }
    }
})

export const {moreData, login, logout} = dataSlice.actions

export default dataSlice.reducer;