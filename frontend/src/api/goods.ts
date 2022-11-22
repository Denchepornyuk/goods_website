import { Good } from '../types/Good';

const BASE_URL = 'http://localhost:5000/goods';

export const getAllGoods = async (): Promise<Good[]> => {
  const response = await fetch(BASE_URL);

  return response.json();
};

export const getGoodById = async (goodId: number): Promise<Good> => {
  const response = await fetch(`${BASE_URL}/${goodId}`);

  return response.json();
};
