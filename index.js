const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
];

const titleCasedArray = tutorials.map (tutorial => {

  const firstLetter = tutorial.charAt(0);
  const firstLetterCapitalized = firstLetter.toUpperCase();
  let tutorialCapitalized = tutorial.replace(`${firstLetter}`, `${firstLetterCapitalized}`);

  for(const index in tutorialCapitalized) {
    if(tutorialCapitalized[index] === ' ') {
      let lastLetterBeforeSpace;
      let firstLetterAfterSpace;
      let firstLetterAfterSpaceCapitalized;
      let indexNum = parseInt(index);
      lastLetterBeforeSpace = tutorialCapitalized[indexNum-1];
      firstLetterAfterSpace = tutorialCapitalized[indexNum+1];
      firstLetterAfterSpaceCapitalized = firstLetterAfterSpace.toUpperCase();
      tutorialCapitalized = tutorialCapitalized.replace(`${lastLetterBeforeSpace} ${firstLetterAfterSpace}`, `${lastLetterBeforeSpace} ${firstLetterAfterSpaceCapitalized}`);
    };
  };
  return tutorialCapitalized;
});

const titleCased = tutorials => {
  return titleCasedArray;
};
