import React, { useEffect, useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { Color } from './types/Color';
import { GoodWithColor } from './types/GoodWithColor';
import { GoodsList } from './components/GoodsList';
import { AddGoodForm } from './components/AddGoodForm';
import { getAllColors } from './api/colors';
import { addGood, getAllGoods, removeOneGood } from './api/goods';

const getColorById = (colors: Color[], colorId: number) => {
  const foundColor = colors.find(color => color.id === colorId);

  return foundColor || null;
};

const getGoodsWithColors = (
  goods: Good[],
  colors: Color[],
): GoodWithColor[] => {
  return goods.map(good => ({
    ...good,
    color: getColorById(colors, good.colorId),
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
      console.log(error.message);

      console.log('error', error.message);
    }
  };

  const getColors = async () => {
    try {
      const colorsFromServer = await getAllColors();

      setColors(colorsFromServer);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log('error', error.message);
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
    const allGoodsWithColors = getGoodsWithColors(goods, colors);

    setGoodsWithColors(allGoodsWithColors);
  }, [goods, colors]);

  return (
    <div className="App">
      <GoodsList goods={goodsWithColors} removeGood={removeGood} />

      <AddGoodForm
        addNewGood={addNewGood}
        colors={colors}
      />
    </div>
  );
};
