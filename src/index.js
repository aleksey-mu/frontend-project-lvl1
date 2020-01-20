import readlineSync from 'readline-sync';
import questionPrime from './games/gamePrime';
import questionProgression from './games/gameProgression';
import questionGcd from './games/gameGcd';
import questionCalc from './games/gameCalc';
import questionEven from './games/gameEven';

const startGame = () => {
  console.log('Welcome to the Brain Games!\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log('Represented games:');
  console.log('1. Even?\n2. Calculator\n3. GCD\n4. Progression\n5. Prime?');
  const gameSelector = readlineSync.question("Choose the game and enter it's number: ");
  let question = null;
  switch (gameSelector) {
    case '1':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      question = questionEven;
      break;
    case '2':
      console.log('What is the result of the expression?');
      question = questionCalc;
      break;
    case '3':
      console.log('Find the greatest common divisor of given numbers.');
      question = questionGcd;
      break;
    case '4':
      console.log('What number is missing in the progression?');
      question = questionProgression;
      break;
    case '5':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      question = questionPrime;
      break;
    default:
      console.log('Sorry, uknown input');
      break;
  }
  const numberOfRounds = 3;
  if (question !== null) {
    for (let i = 1; i <= numberOfRounds; i += 1) {
      const isAnswerWrong = question(name);
      if (isAnswerWrong === true) {
        break;
      }
    }
  }
};

export default startGame;
