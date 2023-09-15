import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { serviceCategory } from './serviceCategory';

const CategorySignUp = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceCategory.createCategory(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Created',
    data: result,
  });
});

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceCategory.getAllCategory();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Retrieved Successfully',
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceCategory.getSingleCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Retrieved Successfully',
    data: result,
  });
});

const deleteSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceCategory.deleteSingleCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Deleted Successfully',
    data: result,
  });
});

const updateSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await serviceCategory.updateSingleCategory(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Updated Successfully',
    data: result,
  });
});

export const controllerCategory = {
  CategorySignUp,
  getAllCategory,
  getSingleCategory,
  deleteSingleCategory,
  updateSingleCategory,
};
