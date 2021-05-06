export interface RouteModel {
  id: string;
  exact: boolean;
  path: string;
  component: any;
}

export interface RoutesModel {
  routes: Array<RouteModel>;
}
