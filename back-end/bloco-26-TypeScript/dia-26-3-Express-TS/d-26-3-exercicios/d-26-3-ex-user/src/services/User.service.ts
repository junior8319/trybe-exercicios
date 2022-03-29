import IUser from "../interfaces/User.interface";
import connection from "../models/connection";
import UserModel from "../models/User.model";

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }
}

export default UserService;