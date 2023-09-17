import { Book } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import prisma from '../../shared/prisma';

const createBook = (data: Book): Promise<Book> => {
  const result = prisma.book.create({
    data,
  });

  return result;
};

const getAllBook = async (): Promise<Book[] | null> => {
  const result = await prisma.book.findMany();
  return result;
};

const getSingleBook = async (id: string): Promise<any> => {
  const result = await prisma.book.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteSingleBook = async (id: string): Promise<any> => {
  const result = await prisma.book.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something Happened !');
  }

  return result;
};

const updateSingleBook = async (
  id: string,
  payload: Partial<Book>
): Promise<Book | null> => {
  const isExist = await prisma.book.findUnique({
    where: {
      id: id,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !');
  }

  const result = await prisma.book.update({
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

export const serviceBook = {
  createBook,
  getAllBook,
  getSingleBook,
  deleteSingleBook,
  updateSingleBook,
};
