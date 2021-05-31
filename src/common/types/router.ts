export type RouteModel = {
  id: string;
  exact?: boolean;
  path: string;
  component: any;
  requireAuthentication?: boolean;
};

export type RoutesModel = {
  routes: Array<RouteModel>;
};
