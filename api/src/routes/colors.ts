import { Router } from "express";
import * as colorsController from '../controllers/colors';

export const route = Router();

route.get('/', colorsController.getAll);
route.get('/:colorId', colorsController.getOne);
