import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({
      required_error: "Recipe name is required",
    })
    .min(1, {
      message: "Recipe must be at leaast 1 charactors",
    }),
});

export const createRecipeSchema = z.object({
  name: z
    .string({
      required_error: "Recipe name is required",
    })
    .min(1, {
      message: "Recipe must be at least 1 character",
    }),
  detail: z
    .array(
      z.object({
        ingredient: z.string({
          required_error: "Ingredient is required",
        }),
        category: z.string({
          required_error: "Category is required",
        }),
        image: z.string().optional(),
        calories: z
          .number({
            required_error: "Calories is required",
          })
          .positive("Calories must be positive"),
        amount: z
          .number({
            required_error: "Amount is required",
          })
          .positive("Amount must be positive"),
      })
    )
    .nonempty({
      message: "Detail cannot be empty",
    }),
  totalAmount: z.number({
    required_error: "totalAmount is required",
  }),
  totalCalories: z
    .number({
      required_error: "Total calories is required",
    })
    .positive("Total calories must be positive"),
});

export type createRecipeValues = z.infer<typeof createRecipeSchema>;
