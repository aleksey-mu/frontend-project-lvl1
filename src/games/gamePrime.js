import readlineSync from 'readline-sync';

const randomNum = (min = 2, max = 101) => Math.floor(Math.random() * (max - min)) + min;
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionPrime = (name) => {
  const number = randomNum();
  const correctAnswer = isPrime(number);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  let isFalse = false;

  if (answer === correctAnswer) {
    console.log('Correct!');
    isFalse = false;
    return isFalse;
  }
  console.log(`\`${answer}\` is wrong answer ;(. Correct answer was \`${correctAnswer}\`.\nLet's try again, ${name}`);
  isFalse = true;
  return isFalse;
};

export default questionPrime;
