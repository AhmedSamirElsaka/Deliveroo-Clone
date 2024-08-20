import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [] as Item[], // specify the type of the items array
  },
  reducers: {
    addToBasket: (state, actions: PayloadAction<Item>) => {
      state.items = [...state.items, actions.payload];
    },
    removeFromBasket: (state, actions) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
export const selectBasketItems = (state: any) => state.basket.items;
export const selectBasketItemsWithId = (state: any, id: string) =>
  state.basket.items.filter((item: Item) => item.id === id);

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
