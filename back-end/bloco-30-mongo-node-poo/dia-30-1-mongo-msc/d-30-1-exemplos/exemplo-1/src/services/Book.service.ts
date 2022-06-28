import IBook from '../database/interfaces/IBook';
import BookModel from '../models/Book.model'

class Book {
  static bookModel: BookModel;

  constructor(public bookModel = new BookModel()) {}
  
  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.getBooks();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookModel.createBook(bookData);
    return book;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.getBook(id);
    return book;
  }

  public async updateBook(id: string, bookData: object): Promise<IBook | null> {
    const book = await this.bookModel.editBook(id, bookData);
    return book;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.deleteBook(id);
    return book;
  }
}

export default Book;