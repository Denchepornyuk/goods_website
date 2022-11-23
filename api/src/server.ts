import express from 'express';
import cors from 'cors';

import { route as goodsRouter } from "./routes/goods";
import { route as colorsRouter } from "./routes/colors";

const app = express();

app.use(cors());

app.use('/goods', express.json(), goodsRouter);
app.use('/colors', express.json(), colorsRouter);

app.listen(5000);
