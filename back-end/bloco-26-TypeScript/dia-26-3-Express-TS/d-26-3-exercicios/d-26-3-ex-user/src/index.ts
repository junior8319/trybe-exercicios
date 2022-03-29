// ./src/index.ts
import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userRouter } from "./routes/index.routes";
import 'express-async-errors';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send();
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
