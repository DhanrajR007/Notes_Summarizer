import { createRootRoute, createRoute } from "@tanstack/react-router";
import App from "../App";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import { checkAuth } from "../utils/helper";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: Auth,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: Profile,
  beforeLoad: checkAuth,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
  beforeLoad: checkAuth,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: History,
  beforeLoad: checkAuth,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  profileRoute,
  dashboardRoute,
  authRoute,
  historyRoute,
]);
