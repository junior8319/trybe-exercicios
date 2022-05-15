"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(enrollment, name, birthDate) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._examsGrades = [];
        this._worksGrades = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(receivedValue) {
        if (receivedValue.length < 16) {
            throw new Error('A matrícula deve ter no mínimo 16 caracteres');
        }
        this._enrollment = receivedValue;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(receivedGrades) {
        if (receivedGrades.length > 4) {
            throw new Error('O aluno só pode ter no máximo 4 notas de exame');
        }
        this._examsGrades = receivedGrades;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(receivedGrades) {
        if (receivedGrades.length > 2) {
            throw new Error('O aluno só pode ter no máximo 2 notas de trabalho');
        }
        this._worksGrades = receivedGrades;
    }
    calculateSumGrades() {
        return [...this._examsGrades, ...this._worksGrades]
            .reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
    }
    calculateAverageGrade() {
        const sumGrades = this.calculateSumGrades();
        const totalGrades = this._examsGrades.length + this._worksGrades.length;
        return Math.round(sumGrades / totalGrades);
    }
    generateEnrollment() {
        const randomEnrollment = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomEnrollment}`;
    }
}
exports.default = Student;
