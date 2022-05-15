"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyDate {
    constructor(day, month, year) {
        const stringDate = `${year}-${month}-${day}`;
        // Validate the received date
        // isn't working properly.
        if (new Date(stringDate).getDate() !== day) {
            console.log(new Date(stringDate).getDate());
            console.log('Invalid date', stringDate);
            day = 1;
            month = 1;
            year = 1900;
        }
        this._day = day;
        this._month = month;
        this._year = year;
    }
    get day() {
        return this._day;
    }
    get month() {
        return this._month;
    }
    get year() {
        return this._year;
    }
    set day(receivedDay) {
        if (receivedDay < 1 || receivedDay > 31) {
            throw new Error('O dia precisa estar entre 1 e 31');
        }
        this._day = receivedDay;
    }
    set month(receivedMonth) {
        if (receivedMonth < 1 || receivedMonth > 12) {
            throw new Error('O mês precisa estar entre 1 e 12');
        }
        this._month = receivedMonth;
    }
    set year(receivedYear) {
        if (receivedYear < 0) {
            throw new Error('O ano precisa ser positivo');
        }
        this._year = receivedYear;
    }
    getFormattedDate() {
        return `${this._day}/${this._month}/${this._year}`;
    }
}
exports.default = MyDate;
const dateTest = new MyDate(30, 9, 2013);
const dateTest1 = new MyDate(30, 10, 2013);
const dateTest2 = new MyDate(30, 4, 2019);
console.log(dateTest);
console.log(dateTest1);
console.log(dateTest2);
