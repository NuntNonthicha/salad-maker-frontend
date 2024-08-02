import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { API_PATH } from "@/config/api";
import { IRecipe } from "@/types/ingredient";
import { RootState } from "../store";

// Define the state interface
interface RecipeState {
  recipes: IRecipe[];
  loading: boolean;
  status: string;
  error: string | null;
}

// Initial state
const initialState: RecipeState = {
  recipes: [],
  loading: false,
  status: "idle",
  error: null,
};

// Thunks for CRUD operations

// Fetch recipes
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const {
        data: { data },
      } = await axios.get(API_PATH.GET_RECIPES);
      console.log(data, "fetchRecipes");
      return data.recipe;
    } catch (error: any) {
      throw new Error(error.response?.data || "Failed to fetch recipes");
    }
  }
);
// fetchRecipById
export const fetchRecipeById = createAsyncThunk(
  "fetchPlanById",
  async (id: string) => {
    try {
      const {
        data: { data },
      } = await axios.get(API_PATH.GET_RECIPES_BY_ID(id));
      console.log(data, "fetchRecipById");
      return data;
    } catch (error: any) {
      //console.error('Error fetching Plan ID:', error);
      throw new Error(`Error fetching Plan ID ${error.message}`);
    }
  }
);

// Create a recipe
export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (recipeData: IRecipe) => {
    try {
      const response = await axios.post(API_PATH.POST_RECIPE, recipeData);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data || "Failed to create recipe");
    }
  }
);

// Update a recipe
export const updateRecipe = createAsyncThunk(
  "recipes/updateRecipe",
  async (payload: { id: string; recipeData: IRecipe }) => {
    try {
      const response = await axios.patch(
        API_PATH.PATCH_RECIPE(payload.id),
        payload.recipeData
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data || "Failed to update recipe");
    }
  }
);

// Create the slice
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<IRecipe[]>) => {
      state.recipes = action.payload;
    },
    removeIngredient: (
      state,
      action: PayloadAction<{ recipeId: string; ingredientId: string }>
    ) => {
      const { recipeId, ingredientId } = action.payload;
      const recipe = state.recipes.find((recipe) => recipe.id === recipeId);
      if (recipe) {
        recipe.detail = recipe.detail.filter(
          (ingredient) => ingredient._id !== ingredientId
        );
      }
    },
    increaseIngredient: (
      state,
      action: PayloadAction<{
        recipeId: string;
        ingredientId: string;
        amount: number;
      }>
    ) => {
      const { recipeId, ingredientId, amount } = action.payload;
      const recipe = state.recipes.find((recipe) => recipe.id === recipeId);
      if (recipe) {
        const ingredient = recipe.detail.find(
          (ingredient) => ingredient._id === ingredientId
        );
        if (ingredient) {
          ingredient.amount += amount;
        }
      }
    },
    decreaseIngredient: (
      state,
      action: PayloadAction<{
        recipeId: string;
        ingredientId: string;
        amount: number;
      }>
    ) => {
      const { recipeId, ingredientId, amount } = action.payload;
      const recipe = state.recipes.find((recipe) => recipe.id === recipeId);
      if (recipe) {
        const ingredient = recipe.detail.find(
          (ingredient) => ingredient._id === ingredientId
        );
        if (ingredient) {
          ingredient.amount = Math.max(0, ingredient.amount - amount);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //fetchRecipes//
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch recipe";
      })
      //fetchRecipeById//
      .addCase(fetchRecipeById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        const recipe = action.payload;
        const index = state.recipes.findIndex((r) => r.id === recipe.id);
        if (index !== -1) {
          state.recipes[index] = recipe;
        } else {
          state.recipes.push(recipe);
        }
      })

      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch recipes";
        state.loading = false;
      })
      //createRecipe//
      .addCase(createRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.recipes.push(action.payload);
        state.loading = false;
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.error = action.error.message || "Failed to create recipe";
        state.loading = false;
      })
      //updateRecipe//
      .addCase(updateRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        const updatedRecipe = action.payload;
        const index = state.recipes.findIndex((r) => r.id === updatedRecipe.id);
        if (index !== -1) {
          state.recipes[index] = updatedRecipe;
        }
        state.loading = false;
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.error = action.error.message || "Failed to update recipe";
        state.loading = false;
      });
  },
});

export const selectAllRecipes = (state: { recipes: RecipeState }) =>
  state.recipes.recipes;

export const {
  setRecipes,
  removeIngredient,
  increaseIngredient,
  decreaseIngredient,
} = recipeSlice.actions;

// Selector to get a recipe by ID
export const selectRecipeById = (state: RootState, id: string) =>
  state.recipes.recipes.find((recipe) => recipe.id === id);

export default recipeSlice.reducer;
