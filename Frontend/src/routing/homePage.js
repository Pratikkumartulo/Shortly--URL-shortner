import {
  createRoute,
} from '@tanstack/react-router'

import { rootRoute } from './routeTree'
import HomePage from '../pages/HomePage.jsx';
import {AuthUserHome} from '../utils/helper.js';
import {store} from '../store/store.js';
import { logout } from '../api/userAuth.api.js';


export const HomePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})