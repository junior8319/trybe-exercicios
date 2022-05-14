"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, birthDate) {
        this._name = String();
        this._birthDate = new Date();
        this._name = name;
        this._birthDate = birthDate;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this.validateName(name);
        this._name = name;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(birthDate) {
        this.validateBirthDate(birthDate);
        this._birthDate = birthDate;
    }
    static getAge(receivedBirthDate) {
        const diff = Math.abs(new Date().getTime() - receivedBirthDate.getTime());
        const yearInMiliseconds = 31536000000;
        return Math.floor(diff / yearInMiliseconds);
    }
    validateBirthDate(receivedBirthDate) {
        if (receivedBirthDate.getTime() > new Date().getTime()) {
            throw new Error('Birth date must be in the past');
        }
        if (Person.getAge(receivedBirthDate) > 120) {
            throw new Error('Person must be younger than 120 years old');
        }
    }
    validateName(receivedName) {
        if (receivedName.length < 3) {
            throw new Error('Name must have at least 3 characters');
        }
    }
}
exports.default = Person;
