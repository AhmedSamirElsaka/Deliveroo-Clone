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
    removeFromBasket: (state, actions) => {
      const index = state.items.findIndex(
        (item) => item.id === actions.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${actions.payload.id}) as it is not in the basket.`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
export const selectBasketItems = (state: any) => state.basket.items;
export const selectBasketItemsWithId = (state: any, id: string) =>
  state.basket.items.filter((item: Item) => item.id === id);

export const selectBasketTotal = (state: any) =>
  state.basket.items.reduce(
    (total: number, item: Item) => total + item.price,
    0
  );

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
