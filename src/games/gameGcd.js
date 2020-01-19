import readlineSync from 'readline-sync';

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const euclid = (num1, num2) => {
  let n1 = num1;
  let n2 = num2;
  while (n1 !== 0 && n2 !== 0) {
    if (n1 > n2) {
      n1 %= n2;
    } else {
      n2 %= n1;
    }
  }
  return n1 + n2;
};

const questionGcd = (name) => {
  const num1 = randomNum();
  const num2 = randomNum();
  const gcd = euclid(num1, num2);
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
