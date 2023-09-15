import { Category } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import prisma from '../../shared/prisma';

const createCategory = (data: Category): Promise<Category> => {
  const result = prisma.category.create({
    data,
  });

  return result;
};

const getAllCategory = async (): Promise<Category[] | null> => {
  const result = await prisma.category.findMany();
  return result;
};

const getSingleCategory = async (id: string): Promise<any> => {
  const result = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteSingleCategory = async (id: string): Promise<any> => {
  const result = await prisma.category.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something Happened !');
  }

  return result;
};

const updateSingleCategory = async (
  id: string,
  payload: Partial<Category>
): Promise<Category | null> => {
  const isExist = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found !');
  }

  const result = await prisma.category.update({
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

export const serviceCategory = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  deleteSingleCategory,
  updateSingleCategory,
};
