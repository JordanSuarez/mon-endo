import { generatePath } from "react-router-dom";

export const HOME = "/";
export const LOGIN = "/login";
export const LOGOUT = "/logout";
export const REGISTER = "/register";
export const CALENDAR = "/calendar";
export const PROFILE = "/profile";
export const NOT_FOUND = "/not-found";
export const PASSWORD_RECOVERY = "/password-recovery";

export const getHomeRoute = (): string => generatePath(HOME);
export const getLoginRoute = (): string => generatePath(LOGIN);
export const getLogoutRoute = (): string => generatePath(LOGOUT);
export const getRegisterRoute = (): string => generatePath(REGISTER);
export const getCalendarRoute = (): string => generatePath(CALENDAR);
export const getProfileRoute = (): string => generatePath(PROFILE);
export const getPasswordRecoveryRoute = (): string =>
  generatePath(PASSWORD_RECOVERY);
