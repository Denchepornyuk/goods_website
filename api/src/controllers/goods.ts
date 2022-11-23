import { Request, Response } from 'express';
import * as goodsService from '../services/goods';

export const getAll = (req: Request, res: Response) => {
  const goods = goodsService.getAll();

  res.send(goods);
}

export const getOne = (req: Request, res: Response) => {
  const { goodId } = req.params;
  const foundGood = goodsService.getGoodById(+goodId);

  if (!foundGood) {
    res.sendStatus(404);
    return;
  }

  res.send(foundGood);
}

export const add = (req: Request, res: Response) => {
  const { name, colorId } = req.body;

  if (!name || !colorId) {
    res.sendStatus(422);
    return;
  }

  const newGood = goodsService.addGood(name, colorId);

  res.statusCode = 201;
  res.json(newGood);
}

export const remove = (req: Request, res: Response) => {
  const { goodId } = req.params;
  const foundGood = goodsService.getGoodById(+goodId);

  if (!foundGood) {
    res.sendStatus(404);
    return;
  }

  goodsService.removeGood(+goodId);
  res.sendStatus(204);
}
