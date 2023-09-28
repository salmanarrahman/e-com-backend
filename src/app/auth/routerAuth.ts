import { Router } from 'express';
import { controllerAuth } from './controllerAuth';

const router = Router();

router.post('/signin', controllerAuth.userLogin);
router.post('/signup', controllerAuth.userSignup);

export const routerAuth = router;
