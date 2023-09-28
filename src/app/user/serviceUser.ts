import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import prisma from '../../shared/prisma';
import { userLoginReq } from './interfaceUser';

const userSignUp = (data: User): Promise<User> => {
  const result = prisma.user.create({
    data,
  });

  return result;
};

const userLogin = async (data: userLoginReq): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return result;
};

const getAllUser = async (): Promise<User[] | null> => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUser = async (id: string): Promise<any> => {
  const result = await prisma.user.findMany({
    where: {
      role: 'customer',
      id: id,
    },
  });
  return result;
};

const deleteSingleUser = async (id: string): Promise<any> => {
  const result = await prisma.user.delete({
    where: {
      role: 'customer',
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something Happened !');
  }

  return result;
};

const updateSingleUser = async (
  id: string,
  payload: Partial<User>
): Promise<User | null> => {
  const isExist = await prisma.user.findUnique({
    where: {
      id: id,
      role: 'customer',
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: payload,
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something Happened !');
  }

  return result;
};

export const serviceUser = {
  userSignUp,
  userLogin,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
};
