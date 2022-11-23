import React from 'react';
import { GoodWithColor } from '../../types/GoodWithColor';

interface Props {
  goods: GoodWithColor[]
  removeGood: (goodId: number) => Promise<void>
}

export const GoodsList: React.FC<Props> = ({ goods, removeGood }) => {
  const DEFAULT_COLOR = 'black';

  return (
    <ul>
      {goods.map(({ id, name, color }) => (
        <li
          key={id}
          style={{ color: color?.name || DEFAULT_COLOR }}
        >
          <span>{name}</span>
          <button
            type="button"
            onClick={() => removeGood(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
