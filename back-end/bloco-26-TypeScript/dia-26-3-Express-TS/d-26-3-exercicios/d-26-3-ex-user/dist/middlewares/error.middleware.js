"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (err, req, res) => {
    const { name, message, details } = err;
    switch (name) {
        case 'ValidationError':
            return res.status(400).json({ message: details[0].message });
        case 'NotFoundError':
            return res.status(404).json({ message });
        case 'ConflictError':
            return res.status(409).json({ message });
        default:
            console.log(err);
            return res.status(500).json({ message });
    }
};
exports.handleError = handleError;
