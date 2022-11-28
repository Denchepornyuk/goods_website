import React, { useEffect, useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { addGood, getAllGoods, removeOneGood } from './api/goods';
import { getAllColors } from './api/colors';
import { Color } from './types/Color';
import { GoodWithColor } from './types/GoodWithColor';
import { GoodsList } from './components/GoodsList';
import { AddGoodForm } from './components/AddGoodForm';

const getColorById = (colorId: number, colors: Color[]) => {
  const foundColor = colors.find(color => color.id === colorId);

  return foundColor || null;
};

const getGoodsWithColors = (
  goods: Good[],
  colors: Color[],
): GoodWithColor[] => {
  return goods.map(good => ({
    ...good,
    color: getColorById(good.colorId, colors),
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
      console.log(error.message);
    }
  };

  const getColors = async () => {
    try {
      const colorsFromServer = await getAllColors();

      setColors(colorsFromServer);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error.message);
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
    const allGoods = getGoodsWithColors(goods, colors);

    setGoodsWithColors(allGoods);
  }, [goods, colors]);

  return (
    <div className="App">
      <GoodsList
        goods={goodsWithColors}
        removeGood={removeGood}
      />

      <AddGoodForm
        addNewGood={addNewGood}
        colors={colors}
      />
    </div>
  );
};
