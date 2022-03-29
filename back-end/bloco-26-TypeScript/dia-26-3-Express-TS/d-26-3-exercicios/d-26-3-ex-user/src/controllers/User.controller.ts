import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/User.service";
import 'express-async-errors';

class UserController {
  constructor(private userService: UserService = new UserService()) { }

  public async getAll(_req: Request, res: Response) {
    this.userService = new UserService();
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  };
}

export default UserController;