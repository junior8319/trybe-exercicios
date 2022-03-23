enum StudentStatus {
  Active,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Active;
console.log(newStudentStatus);

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired,
  Forbidden,
  NotFound = 404,
}

const ok = StatusCodes.OK;
const indexOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok);
console.log(indexOk);
console.log(stringBadRequest);