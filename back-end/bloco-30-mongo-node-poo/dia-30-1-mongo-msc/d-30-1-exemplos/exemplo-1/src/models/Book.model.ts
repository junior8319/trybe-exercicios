import { model as createModel } from "mongoose";
import IBook from "../database/interfaces/IBook";
import BookSchema from "../database/schemas/book.schema";

class BookModel {
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
    const book = await this.bookModel.findById(id);
    return book;
  }

  public async editBook(id: string, bookData: object): Promise<IBook | null> {
    const book = await this.bookModel.findByIdAndUpdate(id, bookData, { new: true });
    return book;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findByIdAndDelete(id);
    return book;
  }
}

export default BookModel;