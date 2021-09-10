const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyPunctuaction = (student_answers, right_answers) => {
  let punctuation = 0;
  for (index in right_answers) {
    if (student_answers[index] === right_answers[index]) {
      punctuation += 1;
    } else if (student_answers[index] === 'N.A') {
      punctuation += 0;
    } else {
      punctuation -= 0.5;
    }
  }
  // console.log(punctuation)
  return punctuation;
};

const evaluateTest = (student_answers, right_answers, verifyPunctuaction) => {
  console.log (`O resultado da avaliação foi ${verifyPunctuaction(student_answers, right_answers)} pontos`);
};

evaluateTest(STUDENT_ANSWERS, RIGHT_ANSWERS, verifyPunctuaction);