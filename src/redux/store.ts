import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartSlice from "./slices/cartSlice";
import ingredientSlice from "./slices/ingredientSlice";
import recipeSlice from "./slices/recipeSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    ingredients: ingredientSlice,
    recipes: recipeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
