import express from 'express';
import createConnection from './models/connection';
import tournamentsRoutes from './routes/index.routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.routes();

    createConnection();
  }

  private routes(): void {
    this.express.use(tournamentsRoutes);
  }
}

export default App;