import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { serviceOrder } from './serviceOrder';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceOrder.createOrder(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Created',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceOrder.getAllOrder();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Retrieved Successfully',
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceOrder.getSingleOrder(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Retrieved Successfully',
    data: result,
  });
});

const deleteSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceOrder.deleteSingleOrder(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Deleted Successfully',
    data: result,
  });
});

const updateSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await serviceOrder.updateSingleOrder(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Updated Successfully',
    data: result,
  });
});

export const controllerOrder = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  deleteSingleOrder,
  updateSingleOrder,
};
