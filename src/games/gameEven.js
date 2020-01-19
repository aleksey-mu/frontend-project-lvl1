import readlineSync from 'readline-sync';

const randomNum = () => {
  const min = 1;
  const max = 101;
  return Math.floor(Math.random() * (max - min)) + min;
};

const questionEven = (name) => {
  const number = randomNum();
  let correctAnswer = null;
  // eslint-disable-next-line no-unused-expressions
  number % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return false;
  }
  console.log(`\`${answer}\` is wrong answer ;(. Correct answer was \`${correctAnswer}\`.\nLet's try again, ${name}`);
  return true;
};

export default questionEven;
