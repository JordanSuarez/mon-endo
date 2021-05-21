import firebase from "firebase/app";
import { Meal } from "common/types/meal";

const mealPath = (userId: string) => `meal/${userId}`;
const firebaseDatabaseRef = (path: string) => firebase.database().ref(path);

export const mealRef = async (
  userId: string
): Promise<firebase.database.Reference> =>
  firebaseDatabaseRef(mealPath(userId));

export const createMeal = async (
  meal: Omit<Meal, "id">
): Promise<firebase.database.Reference> =>
  firebaseDatabaseRef(mealPath(meal.userId)).push(meal);

export const editMeal = async (
  meal: Meal,
  userId: string
): Promise<firebase.database.Reference> =>
  firebaseDatabaseRef(mealPath(userId)).child(meal.id).update(meal);
