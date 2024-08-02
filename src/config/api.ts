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

  //Doctor & Staff
  GET_PROFILE_ALL: "/api/user/profile/all", //get Profile Doctor/Staff/Patient
  PUT_PROFILE_OTHER: (role: string, id: string) =>
    `/api/user/profile/${role}/${id}`,
  GET_PATIENT: "/api/user/profile/all/patient-account",
  DELETE_USER: (role: string, id: string) => `/api/user/profile/${role}/${id}`, // doctor/staff => delete HN BUT admin => delete account

  GET_PROFILE_ME: "/api/user/profile",
  PUT_PROFILE_ME: "/api/user/profile",

  GET_PROFILE_ALL_DOCTOR: "/api/user/profile/all/doctor",
};
