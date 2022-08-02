// models/BookModel.ts

import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';

class BookModel {
  /*
    Criamos no construtor um model do Mongoose do tipo IBook, passando pro createModel(model do Mongoose) um nome e o schema de referência.
  */

  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookModel.create(bookData);
    return book;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const data = await this.bookModel.findById(id);
    return data;
  }

  public async editBook(id: string, bookData: object): Promise<IBook | null> {
    await this.bookModel.findByIdAndUpdate(id, bookData);
    const updatedBook = await this.bookModel.findById(id);
    return updatedBook;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const data = await this.bookModel.findByIdAndDelete(id);
    return data;
  }
}

export default BookModel;