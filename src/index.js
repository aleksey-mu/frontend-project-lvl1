import readlineSync from 'readline-sync';
import questionCalc from './games/gameCalc';
import questionEven from './games/gameEven';

const startGame = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 1; i <= 3; i += 1) {
    const exitStatus = questionCalc(name);
    if (exitStatus === true) {
      break;
    }
  }
};

export default startGame;
