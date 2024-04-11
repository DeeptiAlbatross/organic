import { createSlice} from "@reduxjs/toolkit";
const initialState = {
  productItems: [],
  itemDetail:{},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   
    addProductItems(state, action) {
        state.productItems=action.payload;
    },
    itemDetailReducer(state, action) {
        state.itemDetail = state.productItems.filter((item) => item.id == action.payload);
        return state;
        
    }
  },
});
export const {addProductItems,itemDetailReducer} = productSlice.actions;

export default productSlice.reducer;