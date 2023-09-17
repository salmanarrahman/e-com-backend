import { Router } from 'express';
import { controllerCategory } from './controllerCategory';

const router = Router();

router.post('/create-category', controllerCategory.createCategory);
router.get('/', controllerCategory.getAllCategory);
router.delete('/:id', controllerCategory.deleteSingleCategory);
router.get('/:id', controllerCategory.getSingleCategory);
router.patch('/:id', controllerCategory.updateSingleCategory);

export const routerUser = router;
