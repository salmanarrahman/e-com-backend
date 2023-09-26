import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';
import prisma from '../../shared/prisma';
import { ILoginResponse } from './interfaceAuth';

const userSignUp = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

const userLogin = async (data: User): Promise<ILoginResponse | null> => {
  const result = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const { id, role } = result;

  const token = jwtHelpers.createToken(
    {
      id,
      role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  console.log(result);

  return {
    result,
    token,
  };
};

export const serviceAuth = {
  userSignUp,
  userLogin,
};
