import { Router } from 'express';
import { controllerOrder } from './controllerOrder';

const router = Router();

router.post('/create-order', controllerOrder.createOrder);
router.get('/', controllerOrder.getAllOrder);
router.delete('/:id', controllerOrder.deleteSingleOrder);
router.get('/:id', controllerOrder.getSingleOrder);
router.patch('/:id', controllerOrder.updateSingleOrder);

export const routerUser = router;
