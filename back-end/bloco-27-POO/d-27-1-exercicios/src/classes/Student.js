"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(enrollment, name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._enrollment = _this.generateEnrollment();
        _this._examsGrades = [];
        _this._worksGrades = [];
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (receivedValue) {
            if (receivedValue.length < 16) {
                throw new Error('A matrícula deve ter no mínimo 16 caracteres');
            }
            this._enrollment = receivedValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (receivedGrades) {
            if (receivedGrades.length > 4) {
                throw new Error('O aluno só pode ter no máximo 4 notas de exame');
            }
            this._examsGrades = receivedGrades;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "worksGrades", {
        get: function () {
            return this._worksGrades;
        },
        set: function (receivedGrades) {
            if (receivedGrades.length > 2) {
                throw new Error('O aluno só pode ter no máximo 2 notas de trabalho');
            }
            this._worksGrades = receivedGrades;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.calculateSumGrades = function () {
        return __spreadArray(__spreadArray([], this._examsGrades, true), this._worksGrades, true).reduce(function (accumulator, currentGrade) { return accumulator + currentGrade; }, 0);
    };
    Student.prototype.calculateAverageGrade = function () {
        var sumGrades = this.calculateSumGrades();
        var totalGrades = this._examsGrades.length + this._worksGrades.length;
        return Math.round(sumGrades / totalGrades);
    };
    Student.prototype.generateEnrollment = function () {
        var randomEnrollment = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU".concat(randomEnrollment);
    };
    return Student;
}(Person_1.default));
exports.default = Student;
