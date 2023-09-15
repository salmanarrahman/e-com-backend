import { Router } from 'express';
import { controllerUser } from './controllerUser';

const router = Router();

router.post('/signup', controllerUser.userSignUp);
router.get('/', controllerUser.getAllUser);
router.delete('/:id', controllerUser.getSingleUser);
router.get('/:id', controllerUser.getSingleUser);

export const routerUser = router;
