"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this.validateName(name);
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (birthDate) {
            this.validateBirthDate(birthDate);
            this._birthDate = birthDate;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (receivedBirthDate) {
        var diff = Math.abs(new Date().getTime() - receivedBirthDate.getTime());
        var yearInMiliseconds = 31536000000;
        return Math.floor(diff / yearInMiliseconds);
    };
    Person.prototype.validateBirthDate = function (receivedBirthDate) {
        if (receivedBirthDate.getTime() > new Date().getTime()) {
            throw new Error('Birth date must be in the past');
        }
        if (Person.getAge(receivedBirthDate) > 120) {
            throw new Error('Person must be younger than 120 years old');
        }
    };
    Person.prototype.validateName = function (receivedName) {
        if (receivedName.length < 3) {
            throw new Error('Name must have at least 3 characters');
        }
    };
    return Person;
}());
exports.default = Person;
