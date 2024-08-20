import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./features/basketSlice";
import basketReducer from "./features/basketSlice";
export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
