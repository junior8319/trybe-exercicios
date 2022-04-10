import IEmployee from "../interfaces/Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person
  implements IEmployee {
    private _subject: Subject;
    private _salary: number = Number();
    private _registration: string = String();
    private _admissionDate: Date;

    constructor(name: string,  birthDate: Date, salary: number, subject: Subject) {
      super(name, birthDate);

      this._subject = subject;
      this.salary = salary;
      this.registration = this.generateRegistration();
      this._admissionDate = new Date();
    }

    public generateRegistration(): string {
      const randomRegistration = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

      return `TEA${randomRegistration}`;
    }

    public get subject(): Subject {
      return this._subject;
    }

    public set subject(receivedValue: Subject) {
      this._subject = receivedValue;
    }

    public get registration(): string {
      return this._registration;
    }

    public set registration(receivedValue: string) {
      if (receivedValue.length < 16) {
        throw new Error('O registro deve ter no mínimo 16 caracteres');
      }

      this._registration = receivedValue;
    }
    
    public get salary(): number {
      return this._salary;
    }

    public set salary(receivedValue: number) {
      if (receivedValue < 0) {
        throw new Error('O salário não pode ser negativo');
      }

      this._salary = receivedValue;
    }

    public get admissionDate(): Date {
      return this._admissionDate;
    }

    static validateAdmissionDate(receivedValue: Date): void {
      if (receivedValue > new Date()) {
        throw new Error('A data de admissão não pode ser uma data futura');
      }
    }

    public set admissionDate(receivedValue: Date) {
      Teacher.validateAdmissionDate(receivedValue);
      this._admissionDate = receivedValue;
    }
}