import readlineSync from 'readline-sync';

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const euclid = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const questionGcd = (name) => {
  const num1 = randomNum();
  const num2 = randomNum();
  const gcd = euclid(num1, num2);
  // questionPrint(num1, num2, gcd);
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  let isFalse = false;

  if (answer === gcd.toString()) {
    console.log('Correct!');
    isFalse = false;
    return isFalse;
  }
  console.log(`\`${answer}\` is wrong answer ;(. Correct answer was \`${gcd}\`.\nLet's try again, ${name}`);
  isFalse = true;
  return isFalse;
};


export default questionGcd;
