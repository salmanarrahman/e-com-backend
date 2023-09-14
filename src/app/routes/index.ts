import express from 'express';
import { routerUser } from '../user/routerUser';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/user',
    routes: routerUser,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
