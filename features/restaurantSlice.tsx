import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "basket",
  initialState: {
    restaurant: {
      id: null,
      imgUrl: null,
      title: null,
      rating: null,
      genre: null,
      address: null,
      short_description: null,
      dishes: null,
      long: null,
      lat: null,
    },
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state: any) => state.restaurant;
export default restaurantSlice.reducer;
