import {
  createRoute,
} from '@tanstack/react-router'

import { rootRoute } from './routeTree'
import Dashboard from '../pages/Dashboard.jsx'
import { AuthUser } from '../utils/helper.js'

export const DashBoardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
  beforeLoad: AuthUser
})