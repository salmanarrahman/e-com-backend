import { Router } from 'express';
import { ENUM_ROLES } from '../../enum/user';
import auth from '../middlewares/auth';
import { controllerCategory } from './controllerCategory';

const router = Router();

router.post(
  '/create-category',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerCategory.createCategory
);
router.get('/', controllerCategory.getAllCategory);
router.delete(
  '/:id',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerCategory.deleteSingleCategory
);
router.get('/:id', controllerCategory.getSingleCategory);
router.patch(
  '/:id',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerCategory.updateSingleCategory
);

export const routerCategory = router;
