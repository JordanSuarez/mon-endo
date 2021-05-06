import { generatePath } from "react-router-dom";

export const HOME = "/";
export const CALENDAR = "/calendar";
export const PROFILE = "/profile";

export const getHomeRoute = (): string => generatePath(HOME);
export const getCalendarRoute = (): string => generatePath(CALENDAR);
export const getProfileRoute = (): string => generatePath(PROFILE);
