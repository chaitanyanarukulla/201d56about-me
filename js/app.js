'use strict';

// All answers are yes!!!
let questionBank = ['Do you think I like the color black?', 'Could I possibly like to eat sushi?', 'Was I in the Air Force?', 'Do I like to watch cooking shows?', 'Is sleeping my favorite activity?'];
let responseBank = ['Wrong!', 'Right!', 'Not an acceptable response!'];
let possibleAns = ['y', 'n', 'yes', 'no'];
let cue = ' (y/n/yes/no):';
let answer = '';
let idx = 0;
let userName = prompt('What is your name?');

for (let i = 0; i < questionBank.length; i++) {
  answer = prompt(questionBank[i] + cue).toLowerCase();
  console.log('Question: ' + questionBank[i]);
  console.log('Response in all lower case: ' + answer);
  idx = possibleAns.indexOf(answer);
  if (idx + 1) {
    if (idx % 2) {
      alert(responseBank[0]);
    } else {
      alert(responseBank[1]);
    }
  } else {
    alert(responseBank[2]);
    console.log('Not acceptable. Repeating the same question.');
    i--;
  }
}
