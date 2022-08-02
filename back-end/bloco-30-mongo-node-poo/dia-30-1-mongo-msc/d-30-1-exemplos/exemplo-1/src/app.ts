import express from 'express';
import connection from './database/connection';
import booksRouter from './routes/index.routes';

class App {
  public express: express.Application;

  public connection: Promise<typeof import('mongoose')>;

  constructor() {
    this.express = express();
    // this.middlewares(); // a implementar
    this.connection = connection();
    this.booksRoutes();
  }

  // private middlewares(): void {
  //   this.express.use(express.json());
  // }

  private booksRoutes(): void {
    this.express.use(booksRouter);
  }
}

export default new App().express;