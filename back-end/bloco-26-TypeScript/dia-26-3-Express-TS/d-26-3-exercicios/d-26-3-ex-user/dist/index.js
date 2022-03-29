"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const index_routes_1 = require("./routes/index.routes");
require("express-async-errors");
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', index_routes_1.userRouter);
app.get('/', (_req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send();
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
