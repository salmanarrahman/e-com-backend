import { ReviewAndRating } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import prisma from '../../shared/prisma';

const createReviewAndRating = (data: any): Promise<ReviewAndRating> => {
  const result = prisma.reviewAndRating.create({
    data,
  });

  return result;
};

const getAllReviewAndRating = async (): Promise<ReviewAndRating[] | null> => {
  const result = await prisma.reviewAndRating.findMany();
  return result;
};

const getSingleReviewAndRating = async (id: string): Promise<any> => {
  const result = await prisma.reviewAndRating.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteSingleReviewAndRating = async (id: string): Promise<any> => {
  const result = await prisma.reviewAndRating.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something Happened !');
  }

  return result;
};

const updateSingleReviewAndRating = async (
  id: string,
  payload: Partial<ReviewAndRating>
): Promise<ReviewAndRating | null> => {
  const isExist = await prisma.reviewAndRating.findUnique({
    where: {
      id: id,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ReviewAndRating not found !');
  }

  const result = await prisma.reviewAndRating.update({
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

export const serviceReviewAndRating = {
  createReviewAndRating,
  getAllReviewAndRating,
  getSingleReviewAndRating,
  deleteSingleReviewAndRating,
  updateSingleReviewAndRating,
};
