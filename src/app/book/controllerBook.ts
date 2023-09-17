import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { serviceBook } from './serviceBook';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceBook.createBook(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Created',
    data: result,
  });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceBook.getAllBook();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Retrieved Successfully',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceBook.getSingleBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Retrieved Successfully',
    data: result,
  });
});

const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceBook.deleteSingleBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Deleted Successfully',
    data: result,
  });
});

const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await serviceBook.updateSingleBook(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Updated Successfully',
    data: result,
  });
});

export const controllerBook = {
  createBook,
  getAllBook,
  getSingleBook,
  deleteSingleBook,
  updateSingleBook,
};
