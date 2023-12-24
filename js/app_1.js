/**
 * 23.12.10
 * [ basic ]
 * - js, css 파일은 html을 통해서 불러올 수 있다.
 * - 1,2,3 : integer
 * - 1.4 : float
 * - "apple", 'banana' : string
 * - integer와 float는 계산이 가능하다
 * - string + string = string 이 가능하다.
 *
 * [ Variables ]
 * - 값을 저장하거나 유지한다.
 * - constant(const) : 상수 (변하지 않는 값)
 * - 변수 선언 방식
 *      1. camelCase : myName > 새로운 단어를 적을 때 대문자로 구별한다.
 *      2. snake_case : my_name > 주로 파이썬에서 많이 사용, 단어마다 _로 구별한다.
 * - let : 변하는 값
 * - var : 변하는 값 , 값에 대한 오류를 쉽게 찾을 수 없다. 잘 사용하지 않음
 * - boolean : true, false
 * - null : nothing, 메모리가 비어있음
 * - undefined : 정의된 값이 없음
 *
 * [ Array ]
 * - const sample = [];
 * - push : array 의 마지막에 값을 추가
 * - array 값은 0부터 시작한다.
 *
 * [ Object ]
 * - const sample = {
 *  key : value
 * };
 *
 * [ function ]
 *
 * [ 조건문 ]
 */

// alert('hi');

const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

let myName = 'sujin';
console.log(' hello ' + myName);
myName = 'lim';
console.log(' your name is ' + myName);

const testBol = true;
const testBol2 = false;

let something;
console.log(' something > ', something); // undefined

const arrayTest = [1, 2, 'sujin', true, false, null, undefined];
console.log('array : ', arrayTest);
const arrayWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(' arrayWeek : ', arrayWeek[4]);
arrayWeek.push('sun');

const player = {
  name: 'sujin',
  points: 100,
  fat: true,
};
console.log(player);
console.log(player.name, player.points, player.fat);
console.log(player['name'], player['points'], player['fat']);
player.fat = false; // 값 변경
console.log(player);
player.lastName = 'tomato'; // key , value 추가
console.log(player);

function sayHello() {
  console.log(' hello !');
}
sayHello();

function sayMyName(name, age) {
  console.log('hi ! ' + name + ', ' + age);
}
sayMyName('sujin', 50);

const playerObj = {
  name: 'lim',
  goodmorning: function () {
    console.log(' goodmorning ~ ! ');
  },
  goodbye: function (value) {
    console.log(' goodbye ~ ! ' + value);
  },
};

playerObj.goodmorning();
playerObj.goodbye('jin');

const calc = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const age = 12;
function calcAge(value) {
  return value + 2;
}

const krAge = calcAge(age);
console.log(' age : ', krAge);

const addRes = calc.add(3, 4);
const minRes = calc.minus(10, 4);
const powerRes = calc.power(addRes, minRes);
console.log(' 결과 ' + powerRes);
