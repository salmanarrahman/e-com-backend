import { Router } from 'express';
import { controllerUser } from './controllerUser';

const router = Router();

router.post('/signup', controllerUser.userSignUp);

export const routerUser = router;
