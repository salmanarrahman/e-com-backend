import { Order } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import prisma from '../../shared/prisma';

const createOrder = (data: any): Promise<Order> => {
  const result = prisma.order.create({
    data,
  });

  return result;
};

const getAllOrder = async (): Promise<Order[] | null> => {
  const result = await prisma.order.findMany();
  return result;
};

const getSingleOrder = async (id: string): Promise<any> => {
  const result = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteSingleOrder = async (id: string): Promise<any> => {
  const result = await prisma.order.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something Happened !');
  }

  return result;
};

const updateSingleOrder = async (
  id: string,
  payload: Partial<Order>
): Promise<Order | null> => {
  const isExist = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found !');
  }

  const result = await prisma.order.update({
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

export const serviceOrder = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  deleteSingleOrder,
  updateSingleOrder,
};
