import {
  Activity,
  SportActivityDurationType,
} from "common/types/sportActivity";

export const durationTypes = [
  { id: "minute(s)", name: "minute(s)" },
  { id: "heure(s)", name: "heure(s)" },
] as SportActivityDurationType[];

export const activities = [
  { id: "1", name: "vélo" },
  { id: "2", name: "course à pied" },
  { id: "3", name: "football" },
] as Activity[];
