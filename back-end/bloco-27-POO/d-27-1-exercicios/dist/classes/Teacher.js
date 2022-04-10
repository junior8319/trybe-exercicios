"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Teacher extends Person_1.default {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate);
        this._salary = Number();
        this._registration = String();
        this._subject = subject;
        this.salary = salary;
        this.registration = this.generateRegistration();
        this._admissionDate = new Date();
    }
    generateRegistration() {
        const randomRegistration = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `TEA${randomRegistration}`;
    }
    get subject() {
        return this._subject;
    }
    set subject(receivedValue) {
        this._subject = receivedValue;
    }
    get registration() {
        return this._registration;
    }
    set registration(receivedValue) {
        if (receivedValue.length < 16) {
            throw new Error('O registro deve ter no mínimo 16 caracteres');
        }
        this._registration = receivedValue;
    }
    get salary() {
        return this._salary;
    }
    set salary(receivedValue) {
        if (receivedValue < 0) {
            throw new Error('O salário não pode ser negativo');
        }
        this._salary = receivedValue;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    static validateAdmissionDate(receivedValue) {
        if (receivedValue > new Date()) {
            throw new Error('A data de admissão não pode ser uma data futura');
        }
    }
    set admissionDate(receivedValue) {
        Teacher.validateAdmissionDate(receivedValue);
        this._admissionDate = receivedValue;
    }
}
exports.default = Teacher;
