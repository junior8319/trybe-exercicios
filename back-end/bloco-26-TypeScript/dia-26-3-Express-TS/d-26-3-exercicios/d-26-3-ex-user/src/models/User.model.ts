import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/User.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [users] = await this.connection.execute('SELECT * FROM users');
    return users as IUser[];
  }

  public async create(user: IUser): Promise<IUser> {
    const { firstName, lastName, birth } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (firstName, lastName, birth) VALUES (?, ?, ?)',
      [firstName, lastName, birth],
    );
    user.id = result.insertId;
    return user;
  }
}