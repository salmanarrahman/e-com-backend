import { Router } from 'express';
import { controllerAuth } from './controllerAuth';

const router = Router();

router.post('/signin', controllerAuth.userLogin);

export const routerAuth = router;
