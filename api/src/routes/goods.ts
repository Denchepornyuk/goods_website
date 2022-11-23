import { Router } from "express";
import * as goodsController from '../controllers/goods';

export const route = Router();

route.get('/', goodsController.getAll);
route.get('/:goodId', goodsController.getOne);
route.post('/', goodsController.add);
route.delete('/:goodId', goodsController.remove);

