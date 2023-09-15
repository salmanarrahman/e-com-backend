import { Router } from 'express';
import { controllerUser } from './controllerUser';

const router = Router();

router.post('/signup', controllerUser.userSignUp);
router.get('/', controllerUser.getAllUser);
router.delete('/:id', controllerUser.deleteSingleUser);
router.get('/:id', controllerUser.getSingleUser);
router.patch('/:id', controllerUser.updateSingleUser);

export const routerUser = router;
