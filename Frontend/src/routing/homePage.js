import {
  createRoute,
} from '@tanstack/react-router'

import { rootRoute } from './routeTree'
import HomePage from '../pages/HomePage.jsx'

export const HomePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
})