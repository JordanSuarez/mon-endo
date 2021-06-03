import {
  Activity,
  SportActivityDurationType,
} from "common/types/sportActivity";

export const durationTypes = [
  { id: "minute(s)", name: "minute(s)" },
  { id: "heure(s)", name: "heure(s)" },
] as SportActivityDurationType[];

export const activities = [
  { id: "1", name: "Vélo" },
  { id: "2", name: "Course à pied" },
  { id: "3", name: "Football" },
  { id: "4", name: "Marche nordique" },
  { id: "5", name: "Randonnée" },
  { id: "6", name: "Fitness" },
  { id: "7", name: "Natation" },
  { id: "8", name: "Escalade" },
  { id: "9", name: "Badminton" },
  { id: "10", name: "Rameur" },
  { id: "11", name: "Musculation" },
  { id: "12", name: "Yoga" },
  { id: "13", name: "Arts martiaux" },
  { id: "14", name: "Basket-ball" },
  { id: "15", name: "Tennis" },
] as Activity[];
