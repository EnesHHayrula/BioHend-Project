import * as request from "../lib/request";

const baseUrl = "http://localhost:1337/products";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (productId) => {
  const result = await request.get(`${baseUrl}/${productId}`);

  return result;
};

export const getLatest = async () => {
  const query = new URLSearchParams({
    offset: 0,
    pageSize: 3,
  });
  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};
