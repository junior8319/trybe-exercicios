export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  set birthDate(birthDate: Date) {
    this.validateBirthDate(birthDate);
    this._birthDate = birthDate;
  }

  static getAge(receivedBirthDate: Date): number {
    const diff = Math.abs(new Date().getTime() - receivedBirthDate.getTime());
    const yearInMiliseconds = 31_536_000_000;
    return Math.floor(diff / yearInMiliseconds); 
  }

  private validateBirthDate(receivedBirthDate: Date): void {
    if (receivedBirthDate.getTime() > new Date().getTime()) {
      throw new Error('Birth date must be in the past');
    }

    if (Person.getAge(receivedBirthDate) > 120) {
      throw new Error('Person must be younger than 120 years old');
    }
  }

  private validateName(receivedName: string): void {
    if (receivedName.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
  }
}