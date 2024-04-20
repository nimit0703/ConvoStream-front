import { createSlice} from "@reduxjs/toolkit"

const loaderSlice = createSlice({
    name: 'LoaderSlice',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setLoader: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { setLoader } = loaderSlice.actions;
export const LoaderSliceReducer = loaderSlice.reducer;