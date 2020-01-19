import readlineSync from 'readline-sync';
import questionPrime from './games/gamePrime';
// import questionProgression from './games/gameProgression';
// import questionGcd from './games/gameGcd';
// import questionCalc from './games/gameCalc';
// import questionEven from './games/gameEven';

const startGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 1; i <= 3; i += 1) {
    const exitStatus = questionPrime(name);
    if (exitStatus === true) {
      break;
    }
  }
};

export default startGame;
