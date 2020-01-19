import readlineSync from 'readline-sync';

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const progressionBuilding = () => {
  const progressionStep = randomNum(2, 10);
  const start = randomNum(1, 20);
  const progression = [];
  progression[0] = start;
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  return progression;
};

const questionProgression = (name) => {
  const progression = progressionBuilding();
  const answerIndex = randomNum(0, 9);
  const correctAnswer = progression[answerIndex];
  const hiddenProgression = progression.slice();
  hiddenProgression[answerIndex] = '..';

  console.log(`Question: ${hiddenProgression.join(', ')}`);
  const answer = readlineSync.question('Your answer: ');
  let isFalse = false;

  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
    isFalse = false;
    return isFalse;
  }
  console.log(`\`${answer}\` is wrong answer ;(. Correct answer was \`${correctAnswer}\`.\nLet's try again, ${name}`);
  isFalse = true;
  return isFalse;
};

export default questionProgression;
