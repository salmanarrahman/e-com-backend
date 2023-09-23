import { Router } from 'express';
import { controllerBook } from './controllerBook';
const router = Router();

router.post('/create-book', controllerBook.createBook);
router.get('/', controllerBook.getAllBook);
router.delete('/:id', controllerBook.deleteSingleBook);
router.get('/:id', controllerBook.getSingleBook);
router.patch('/:id', controllerBook.updateSingleBook);

export const routerBook = router;
