import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./features/basketSlice";
import basketReducer from "./features/basketSlice";
import restaurantReducer from "./features/restaurantSlice";
export default configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
