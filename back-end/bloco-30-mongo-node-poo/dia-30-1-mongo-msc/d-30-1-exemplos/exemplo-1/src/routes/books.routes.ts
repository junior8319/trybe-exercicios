import { Router } from "express";
import BookController from "../controllers/Books.controller";

const bookController = new BookController();
const routes = Router();

const booksId = '/books/:id';

routes.get("/books", bookController.getBooks);
routes.get(booksId, bookController.getBook);
routes.post("/books", bookController.createBook);
routes.put(booksId, bookController.updateBook);
routes.delete(booksId, bookController.deleteBook);

export default routes;