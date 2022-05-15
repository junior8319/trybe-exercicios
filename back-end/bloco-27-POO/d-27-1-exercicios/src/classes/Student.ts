import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(receivedValue: string) {
    if (receivedValue.length < 16) {
      throw new Error('A matrícula deve ter no mínimo 16 caracteres');
    }

    this._enrollment = receivedValue;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(receivedGrades: number[]) {
    if (receivedGrades.length > 4) {
      throw new Error('O aluno só pode ter no máximo 4 notas de exame');
    }

    this._examsGrades = receivedGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(receivedGrades: number[]) {
    if (receivedGrades.length > 2) {
      throw new Error('O aluno só pode ter no máximo 2 notas de trabalho');
    }

    this._worksGrades = receivedGrades;
  }

  public calculateSumGrades(): number {
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
  }

  public calculateAverageGrade(): number {
    const sumGrades = this.calculateSumGrades();
    const totalGrades = this._examsGrades.length + this._worksGrades.length;

    return Math.round(sumGrades / totalGrades);
  }

  public generateEnrollment(): string {
    const randomEnrollment = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomEnrollment}`;
  }
}
