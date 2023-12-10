/**
 * [ conditional(조건문) ]
 *
 * and operator : a && b
 *  - a 와 b 모두 true 일 때 true
 * or : a || b
 *  - a 와 b 하나만 true 여도 true
 *
 * true || true === true
 * false || true === true
 * true || false === true
 * false || false === false
 *
 * true && true === true
 * false && true === false
 * true && false === false
 * false && false === false
 *
 * [ 형변환 ]
 */

// const age = prompt('How old are you? ');
// console.log(typeof age, typeof parseInt(age));

const userAge = parseInt(prompt('input your age'));

if (isNaN(userAge) || userAge < 0) {
  console.log(' please write a real positive number ');
} else if (userAge < 18) {
  console.log(' you are too young ');
} else if (userAge >= 18 && userAge <= 50) {
  console.log('you can drink');
} else if (userAge === 100) {
  console.log('you are wise');
} else if (userAge > 80) {
  console.log("you can't drink");
}
