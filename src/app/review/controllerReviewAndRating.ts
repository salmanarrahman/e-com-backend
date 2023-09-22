import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { serviceReviewAndRating } from './serviceReviewAndRating';

const createReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const result = await serviceReviewAndRating.createReviewAndRating(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ReviewAndRating Created',
      data: result,
    });
  }
);

const getAllReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const result = await serviceReviewAndRating.getAllReviewAndRating();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ReviewAndRating Retrieved Successfully',
      data: result,
    });
  }
);

const getSingleReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await serviceReviewAndRating.getSingleReviewAndRating(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ReviewAndRating Retrieved Successfully',
      data: result,
    });
  }
);

const deleteSingleReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await serviceReviewAndRating.deleteSingleReviewAndRating(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ReviewAndRating Deleted Successfully',
      data: result,
    });
  }
);

const updateSingleReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await serviceReviewAndRating.updateSingleReviewAndRating(
      id,
      payload
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ReviewAndRating Updated Successfully',
      data: result,
    });
  }
);

export const controllerReviewAndRating = {
  createReviewAndRating,
  getAllReviewAndRating,
  getSingleReviewAndRating,
  deleteSingleReviewAndRating,
  updateSingleReviewAndRating,
};
