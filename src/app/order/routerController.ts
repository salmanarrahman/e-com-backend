import { Router } from 'express';
import { ENUM_ROLES } from '../../enum/user';
import auth from '../middlewares/auth';
import { controllerOrder } from './controllerOrder';

const router = Router();

router.post(
  '/create-order',
  auth(ENUM_ROLES.CUSTOMER),
  controllerOrder.createOrder
);
router.get(
  '/',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN, ENUM_ROLES.CUSTOMER),
  controllerOrder.getAllOrder
);
router.delete('/:id', controllerOrder.deleteSingleOrder);
router.get('/:id', controllerOrder.getSingleOrder);
router.patch('/:id', controllerOrder.updateSingleOrder);

export const routerOrder = router;
