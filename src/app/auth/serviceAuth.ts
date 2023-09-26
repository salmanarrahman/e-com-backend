import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import prisma from '../../shared/prisma';

const userSignUp = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

const userLogin = async (data: User): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  console.log(result);

  return result;
};

export const serviceAuth = {
  userSignUp,
  userLogin,
};
