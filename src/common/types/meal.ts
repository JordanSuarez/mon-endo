export type MealFormInitialValues = {
  breakfast: string;
  lunch: string;
  dinner: string;
};

export type Meal = {
  id: string;
  date: string;
  content: MealFormInitialValues;
  userId: string;
};
