import readlineSync from 'readline-sync';

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const randomExpressionPrint = (num1, num2) => {
  const operator = randomNum(0, 3);
  switch (operator) {
    case 0:
      console.log(`Question: ${num1} + ${num2}`);
      return num1 + num2;
    case 1:
      console.log(`Question: ${num1} - ${num2}`);
      return num1 - num2;
    default:
      console.log(`Question: ${num1} * ${num2}`);
      return num1 * num2;
  }
};


const questionCalc = (name) => {
  const num1 = randomNum(1, 20);
  const num2 = randomNum(1, 20);
  let isFalse = true;
  const correctAnswer = randomExpressionPrint(num1, num2);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
    isFalse = false;
    return isFalse;
  }
  console.log(`\`${answer}\` is wrong answer ;(. Correct answer was \`${correctAnswer}\`.\nLet's try again, ${name}`);
  isFalse = true;
  return isFalse;
};


export default questionCalc;
