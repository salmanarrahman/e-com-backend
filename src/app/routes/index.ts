import express from 'express';
import { routerAuth } from '../auth/routerAuth';
import { routerBook } from '../book/routeBook';
import { routerCategory } from '../category/routeCategory';
import { routerOrder } from '../order/routerController';
import { routerUser } from '../user/routerUser';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/api/v1/auth',
    routes: routerAuth,
  },
  {
    path: '/api/v1/users',
    routes: routerUser,
  },
  {
    path: '/api/v1/categories',
    routes: routerCategory,
  },
  {
    path: '/api/v1/books',
    routes: routerBook,
  },
  {
    path: '/api/v1/orders',
    routes: routerOrder,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
