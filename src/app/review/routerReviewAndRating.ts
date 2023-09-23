import { Router } from 'express';
import { controllerReviewAndRating } from './controllerReviewAndRating';

const router = Router();

router.post('/addReview', controllerReviewAndRating.createReviewAndRating);
router.get('/', controllerReviewAndRating.getAllReviewAndRating);
router.delete('/:id', controllerReviewAndRating.deleteSingleReviewAndRating);
router.get('/:id', controllerReviewAndRating.getSingleReviewAndRating);
router.patch('/:id', controllerReviewAndRating.updateSingleReviewAndRating);

export const routerReview = router;
