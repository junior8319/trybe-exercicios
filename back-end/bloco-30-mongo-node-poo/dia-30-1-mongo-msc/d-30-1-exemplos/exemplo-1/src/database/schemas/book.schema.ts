import { Model, Schema } from "mongoose";
import IBook from "../interfaces/IBook";

const BookSchema = new Schema<IBook, Model<IBook>>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: false },
  weight: { type: String, required: false },
});

export default BookSchema;