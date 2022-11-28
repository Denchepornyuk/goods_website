import React, { useEffect, useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { addGood, getAllGoods, removeOneGood } from './api/goods';
import { getAllColors } from './api/colors';
import { Color } from './types/Color';
import { GoodWithColor } from './types/GoodWithColor';
import { GoodsList } from './components/GoodsList';
import { AddGoodForm } from './components/AddGoodForm';
import { getAllColors } from './api/colors';
import { addGood, getAllGoods, removeOneGood } from './api/goods';

<<<<<<< HEAD
const getColorById = (colorId: number, colors: Color[]) => {
=======
const getColorById = (colors: Color[], colorId: number) => {
>>>>>>> master
  const foundColor = colors.find(color => color.id === colorId);

  return foundColor || null;
};

const getGoodsWithColors = (
  goods: Good[],
  colors: Color[],
): GoodWithColor[] => {
  return goods.map(good => ({
    ...good,
<<<<<<< HEAD
    color: getColorById(good.colorId, colors),
=======
    color: getColorById(colors, good.colorId),
>>>>>>> master
  }));
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodsWithColors, setGoodsWithColors] = useState<GoodWithColor[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  const getGoods = async () => {
    try {
      const goodsFromServer = await getAllGoods();

      setGoods(goodsFromServer);
    } catch (error: any) {
      // eslint-disable-next-line no-console
<<<<<<< HEAD
      console.log(error.message);
=======
      console.log('error', error.message);
>>>>>>> master
    }
  };

  const getColors = async () => {
    try {
      const colorsFromServer = await getAllColors();

      setColors(colorsFromServer);
    } catch (error: any) {
      // eslint-disable-next-line no-console
<<<<<<< HEAD
      console.log(error.message);
=======
      console.log('error', error.message);
>>>>>>> master
    }
  };

  const addNewGood = async (name: string, colorId: number) => {
    try {
      await addGood(name, colorId);
      await getGoods();
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const removeGood = async (goodId: number) => {
    try {
      await removeOneGood(goodId);
      await getGoods();
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  useEffect(() => {
    getGoods();
    getColors();
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    const allGoods = getGoodsWithColors(goods, colors);

    setGoodsWithColors(allGoods);
=======
    const allGoodsWithColors = getGoodsWithColors(goods, colors);

    setGoodsWithColors(allGoodsWithColors);
>>>>>>> master
  }, [goods, colors]);

  return (
    <div className="App">
<<<<<<< HEAD
      <GoodsList
        goods={goodsWithColors}
        removeGood={removeGood}
      />
=======
      <GoodsList goods={goodsWithColors} removeGood={removeGood} />
>>>>>>> master

      <AddGoodForm
        addNewGood={addNewGood}
        colors={colors}
      />
    </div>
  );
};
