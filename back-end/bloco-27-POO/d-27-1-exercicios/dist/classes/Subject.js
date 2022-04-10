"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(name) {
        this.validateName(name);
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.validateName(value);
        this._name = value;
    }
    validateName(name) {
        if (name.length < 3) {
            throw new Error('O nome deve ter no mínimo 3 caracteres');
        }
    }
}
exports.default = Subject;
