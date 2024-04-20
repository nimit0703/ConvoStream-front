import {configureStore} from "@reduxjs/toolkit"
import {LoaderSliceReducer} from "./slices/LoaderSlice"
export const store = configureStore({
    reducer:{
        LoaderSliceReducer: LoaderSliceReducer,
    }
})