/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { serviceAuth } from '../auth/serviceAuth';
import { serviceOrder } from './serviceOrder';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const auth: any = req.headers.authorization;
  let verification;
  try {
    verification = jwtHelpers.verifyToken(auth, config.jwt.secret as Secret);
  } catch (err) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid Token');
  }

  // eslint-disable-next-line no-unused-vars
  const { id, role } = verification;
  const check = await serviceAuth.checkUser(id);

  if (!check) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid User');
  }

  const order = req.body;
  const orderDetails = {
    userId: id,
    orderedBooks: order.orderedBooks,
  };

  console.log(orderDetails);

  const result = await serviceOrder.createOrder(orderDetails);

  //console.log('this from verified ', verification);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Created successfully',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const auth: any = req.headers.authorization;
  let result;

  let verification;
  try {
    verification = jwtHelpers.verifyToken(auth, config.jwt.secret as Secret);
  } catch (err) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid Token');
  }

  // eslint-disable-next-line no-unused-vars
  const { id, role } = verification;

  const check = await serviceAuth.checkUser(id);

  if (!check) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid User');
  }

  if (role !== 'admin') {
    result = await serviceOrder.getAllOrder(id);
  } else {
    result = await serviceOrder.getAllOrder(undefined);
  }

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
