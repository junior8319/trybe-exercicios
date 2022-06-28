import IBook from '../database/interfaces/IBook';
import BookService from '../services/Book.service';

class BookController {
  static bookService: BookService;

  constructor(public bookService = new BookService()) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookService.getBooks();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookService.createBook(bookData);
    return book;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const book = await this.bookService.getBook(id);
    return book;
  }

  public async updateBook(id: string, bookData: object): Promise<IBook | null> {
    const book = await this.bookService.updateBook(id, bookData);
    return book;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this.bookService.deleteBook(id);
    return book;
  }
}

export default BookController;