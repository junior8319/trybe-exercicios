"use strict";
class Student {
    constructor(enrollment, name) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._worksGrades = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(receivedValue) {
        this._enrollment = receivedValue;
    }
    get name() {
        return this._name;
    }
    set name(receivedName) {
        if (receivedName.length < 3) {
            throw new Error('O nome precisa ter no mínimo 3 caracteres');
        }
        this._name = receivedName;
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
}
const studentOne = new Student('12345', 'João');
console.log(studentOne);
studentOne.examsGrades = [5, 6, 7, 8];
studentOne.worksGrades = [10, 10];
const st1SumGrades = studentOne.calculateSumGrades();
const st1AverageGrade = studentOne.calculateAverageGrade();
console.log(`A média de ${studentOne.name} é ${st1AverageGrade} e sua soma de notas é ${st1SumGrades}`);
const studentTwo = new Student('54321', 'Maria');
console.log(studentTwo);
studentTwo.examsGrades = [10, 9, 8, 7];
studentTwo.worksGrades = [10, 10];
const st2SumGrades = studentTwo.calculateSumGrades();
const st2AverageGrade = studentTwo.calculateAverageGrade();
console.log(`Notas de provas de ${studentTwo.name}: ${studentTwo.examsGrades}`);
console.log(`Notas de trabalhos de ${studentTwo.name}: ${studentTwo.worksGrades}`);
console.log(`A média de ${studentTwo.name} é ${st2AverageGrade} e sua soma de notas é ${st2SumGrades}`);
