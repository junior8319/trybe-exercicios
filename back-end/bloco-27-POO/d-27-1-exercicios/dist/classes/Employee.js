"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Employee extends Person_1.default {
    constructor(name, birthDate, registration, salary, admissionDate) {
        super(name, birthDate);
        this._registration = registration;
        this._salary = salary;
        this._admissionDate = admissionDate;
    }
    get registration() {
        return this._registration;
    }
    set registration(registration) {
        // this.validateRegistration(registration);
        this._registration = registration;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        // this.validateSalary(salary);
        this._salary = salary;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(admissionDate) {
        // this.validateAdmissionDate(admissionDate);
        this._admissionDate = admissionDate;
    }
}
exports.default = Employee;
