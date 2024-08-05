import { CartItem, IIngredientData } from "@/types/ingredient";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IIngredientData>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (cartItem) cartItem.amount++;
      else {
        state.cartItems.push({
          product: action.payload,
          amount: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<IIngredientData>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (cartItem) {
        cartItem.amount--;
        if (cartItem.amount === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product._id !== action.payload._id
          );
        }
      }
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const productAmountInCartSelector = createSelector(
  [cartItems, (cartItems, productId: string) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product._id === productId)?.amount
);

export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.amount), 0)
);

export const totalCaloriesSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) =>
      (total += curr.amount * curr.product.calories),
    0
  )
);

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
