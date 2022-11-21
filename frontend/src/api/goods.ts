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

export const addGood = async (
  name: string,
  colorId: number,
): Promise<Good> => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ name, colorId }),
  });

  return response.json();
};

export const removeOneGood = async (goodId: number): Promise<void> => {
  await fetch(`${BASE_URL}/${goodId}`, {
    method: 'DELETE',
  });
};
