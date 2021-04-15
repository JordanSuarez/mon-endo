import { generatePath } from "react-router-dom";

export const HOME = "/";

export const getHomeRoute = (): string => generatePath(HOME);
