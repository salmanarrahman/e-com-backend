import { Router } from 'express';
import { ENUM_ROLES } from '../../enum/user';
import auth from '../middlewares/auth';
import { controllerUser } from './controllerUser';

const router = Router();

//router.post('/signup', controllerUser.userSignUp);
router.get(
  '/',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerUser.getAllUser
);
router.delete(
  '/:id',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerUser.deleteSingleUser
);
router.get(
  '/:id',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerUser.getSingleUser
);
router.patch(
  '/:id',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerUser.updateSingleUser
);

export const routerUser = router;
