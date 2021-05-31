import { SportActivity } from "common/types/sportActivity";

export type SportActivitiesAction = {
  type: string;
  sportActivities: SportActivity[];
};
