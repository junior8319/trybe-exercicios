import Person from "./Person";

export default class Employee extends Person {
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, registration: string, salary: number, admissionDate: Date) {
    super(name, birthDate);
    this._registration = registration;
    this._salary = salary;
    this._admissionDate = admissionDate;
  }

  public get registration(): string {
    return this._registration;
  }

  public set registration(registration: string) {
    // this.validateRegistration(registration);
    this._registration = registration;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(salary: number) {
    // this.validateSalary(salary);
    this._salary = salary;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(admissionDate: Date) {
    // this.validateAdmissionDate(admissionDate);
    this._admissionDate = admissionDate;
  }
}