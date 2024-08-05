export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export const API_PATH = {
  //Ingredient
  GET_INGREDIENTS: "/api/ingredients",

  //Recipe
  POST_RECIPE: "/api/create-recipe",
  GET_RECIPES: "/api/recipes",
  GET_RECIPES_BY_ID: (id: string) => `/api/recipe/${id}`,
  PATCH_RECIPE: (id: string) => `/api/edit-recipe/${id}`,
  DELETE_RECIPE: (id: string) => `/api/recipe/${id}`,
};
