import App from '../App';
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { HomePageRoute } from './homePage';
import { DashBoardRoute } from './dashBoard';
import { authRoute } from './authRoute';

export const rootRoute = createRootRoute({
  component: App
})

export const routeTree = rootRoute.addChildren([HomePageRoute,DashBoardRoute,authRoute])