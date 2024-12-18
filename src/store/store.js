import { configureStore } from "@reduxjs/toolkit";
 import authSlice from "./Authslice.js"
const store = configureStore({
    reducer:{
            auth: authSlice
    }
})

export default store;