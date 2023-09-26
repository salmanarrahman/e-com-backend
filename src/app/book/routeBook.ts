import { Router } from 'express';
import { ENUM_ROLES } from '../../enum/user';
import auth from '../middlewares/auth';
import { controllerBook } from './controllerBook';
const router = Router();

router.post(
  '/create-book',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerBook.createBook
);
router.get('/', controllerBook.getAllBook);
router.delete(
  '/:id',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerBook.deleteSingleBook
);
router.get('/:categoryId/category', controllerBook.getBookByCategory);
router.get('/:id', controllerBook.getSingleBook);
router.patch(
  '/:id',
  auth(ENUM_ROLES.ADMIN, ENUM_ROLES.SUPER_ADMIN),
  controllerBook.updateSingleBook
);

export const routerBook = router;
