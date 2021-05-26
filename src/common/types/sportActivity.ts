export type SportActivity = {
  id: string;
  activity: Activity;
  duration: SportActivityDuration;
  date: string;
  userId: string;
};

export type SportActivityDuration = {
  type: string;
  time: string;
};

export type SportActivityDurationType = {
  id: string;
  name: string;
};

export type Activity = {
  id: string;
  name: string;
};
