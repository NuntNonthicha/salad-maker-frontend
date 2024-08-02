//Ingredients
export type IIngredientData = {
  id?: number;
  _id: string;
  ingredient: string;
  category?: string;
  image: string | null;
  calories: number;
};

export interface CartItem {
  product: IIngredientData;
  amount: number;
}

//Create Recipe
export type IRecipe = {
  id: string;
  name: string;
  detail: {
    _id: string;
    ingredient: string;
    category: string;
    image: string;
    calories: number;
    amount: number;
  }[];
  totalAmount: number;
  totalCalories: number;
};

export interface IAllRecipe {
  id: string;
  name: string;
  totalCalories: number;
}

// mock api //
//IGetRecipeAllApi
export interface IGetRecipeAllApi {
  data: {
    recipe: IRecipe[];
  };
  status: string;
}

//Recipe by Id
export interface IGetRecipeIdApi {
  id: string;
  name: string;
  ingredients: IIngredientData[];
  totalCalories: number;
}
