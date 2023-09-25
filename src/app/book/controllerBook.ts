import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import pick from '../../shared/pick';
import sendResponse from '../../shared/sendResponse';
import { serviceBook } from './serviceBook';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceBook.createBook(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Created',
    data: result,
  });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const option = pick(req.query, [
    'page',
    'size',
    'limit',
    'skip',
    'sortBy',
    'sortOrder',
    'orderBy',
  ]);
  let filter: any = pick(req.query, ['category', 'search', 'author', 'title']);

  const pricing: any = pick(req.query, ['minPrice', 'maxPrice']);
  console.log(pricing);

  if (filter.category) {
    const { category, ...rest } = filter;
    filter = {
      categoryId: category,
      ...rest,
    };
  }

  // if (filter.minPrice) {
  //   const { minPrice, ...rest } = filter;
  //   const price = parseInt(minPrice.toString());
  //   filter = {
  //     price: {
  //       gte: price,
  //     },
  //     ...rest,
  //   };
  // }
  // if (filter.maxPrice) {
  //   const { maxPrice, ...rest } = filter;
  //   const price = parseInt(maxPrice.toString());
  //   filter = {
  //     price: {
  //       lte: price,
  //     },
  //     ...rest,
  //   };
  // }

  console.log(filter);

  const result = await serviceBook.getAllBook(filter, option, pricing);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Retrieved Successfully',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceBook.getSingleBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Retrieved Successfully',
    data: result,
  });
});
const getBookByCategory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.categoryId;
  const result = await serviceBook.getBookByCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Retrieved Successfully',
    data: result,
  });
});

const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceBook.deleteSingleBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Deleted Successfully',
    data: result,
  });
});

const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await serviceBook.updateSingleBook(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Updated Successfully',
    data: result,
  });
});

export const controllerBook = {
  createBook,
  getAllBook,
  getSingleBook,
  deleteSingleBook,
  updateSingleBook,
  getBookByCategory,
};
