import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json();
})

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        // data: {sortedProducts: [], sortOption : 'sorting'},
        data: [],
        loading: true,
    },
    reducers: {},
        // sortChange: (state, action) => {
        //     const {allData, option} = action.payload
        //     let sortedArray = [...allData];

        //     switch(option){
        //         case 'lowToHigh':
        //             sortedArray.sort((a, b) =>
        //                 parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
        //             );
        //             break;
        //         case 'highToLow':
        //             sortedArray.sort((a, b) =>
        //                 parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
        //             );
        //             break;

            // }
            
            // state.sortedProducts = sortedArray;
            // state.sortOption = sortOption;
        
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
    }
});

export default dataSlice.reducer;