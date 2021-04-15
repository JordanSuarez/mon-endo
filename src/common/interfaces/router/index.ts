import { FunctionComponent } from "react";

export interface RouteModel {
  id: string;
  exact: boolean;
  path: string;
  component: FunctionComponent<Element>;
}

export interface RoutesModel {
  routes: Array<RouteModel>;
}
