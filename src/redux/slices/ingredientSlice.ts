import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IIngredientData } from "@/types/ingredient";
import axios from "@/lib/axios";
import { RootState } from "../store";
import { API_PATH } from "@/config/api";

interface IngredientState {
  ingredients: IIngredientData[];
  filteredIngredients: IIngredientData[];
  filters: string[];
  searchTerm: string;
  loading: boolean;
  status: string;
  error: string | null;
}

const initialState: IngredientState = {
  ingredients: [],
  filteredIngredients: [],
  filters: [],
  searchTerm: "",
  loading: false,
  status: "idle",
  error: null,
};

export const fetchIngredients = createAsyncThunk(
  "fetchIngredients",
  async () => {
    try {
      const { data } = await axios.get(API_PATH.GET_INGREDIENTS);
      return data;
    } catch (error: any) {
      console.error("Error fetching", error);
    }
  }
);

const ingredientSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    getIngredients: (state, action: PayloadAction<IIngredientData[]>) => {
      state.ingredients = action.payload;
      state.filteredIngredients = action.payload;
      state.status = "succeeded";
    },
    setIngredientFilters: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
      state.filteredIngredients = state.ingredients.filter(
        (ingredient) =>
          state.filters.length === 0 ||
          state.filters.includes(ingredient.category || "")
      );
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredIngredients = state.ingredients.filter((ingredient) =>
        ingredient.ingredient
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.ingredients = action.payload || [];
        state.filteredIngredients = action.payload || []; // Ensure this is set
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch ingredients";
      });
  },
});

export const selectIngredients = (state: RootState) => state.ingredients;
export const { setIngredientFilters, setSearchTerm } = ingredientSlice.actions;

export default ingredientSlice.reducer;
