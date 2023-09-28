import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { serviceAuth } from './serviceAuth';

const userLogin = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceAuth.userLogin(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signin successfully!',
    token: result?.token,
  });
});
const userSignup = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceAuth.userSignUp(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

export const controllerAuth = {
  userLogin,
  userSignup,
};
