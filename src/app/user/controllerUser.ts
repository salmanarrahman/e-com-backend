import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { serviceUser } from './serviceUser';

const userSignUp = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceUser.userSignUp(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created',
    data: result,
  });
});

export const controllerUser = {
  userSignUp,
};
