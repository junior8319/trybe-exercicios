import * as Book from "./models/Book";
import connection  from "./models/connection";

const main = async () => {
  const bookModel = new Book.BookModel(connection);

  const books = await bookModel.getAll();
  console.log(books)
}

main();