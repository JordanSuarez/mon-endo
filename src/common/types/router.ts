export type RouteModel = {
  id: string;
  exact: boolean;
  path: string;
  component: any;
};

export type RoutesModel = {
  routes: Array<RouteModel>;
};
