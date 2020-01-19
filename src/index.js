import readlineSync from 'readline-sync';
import questionProgression from './games/gameProgression';
// import questionGcd from './games/gameGcd';
// import questionCalc from './games/gameCalc';
// import questionEven from './games/gameEven';

const startGame = () => {
  console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 1; i <= 3; i += 1) {
    const exitStatus = questionProgression(name);
    if (exitStatus === true) {
      break;
    }
  }
};

export default startGame;
