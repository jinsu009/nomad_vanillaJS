/**
 * id 는 잘 사용되지 않는다.
 * className과 같이 사용된다.
 *
 * className은 배열로 들어온다.
 *
 * TagName : h1, div, span ... element 이름
 * querySelector : element를 css방식으로 검색 할 수 있다.
 * document에 동일한 클래스가 있다면 첫번째 하나만 가져온다.
 *
 * querySelectorAll : 배열
 *
 * html element의 event를 알아보고 싶을 때 : h1 html element mdn 검색
 *
 * addEventListener 를 사용할 경우 후에 removeEventListener로 이벤트를 제거할 수 있다.
 */

// const title = document.getElementById('title');
// // console.dir(title);
// title.innerText = 'Got you!';
// console.log(title.id);

// const hellos = document.getElementsByClassName('hello');
// console.log(hellos);

// const title = document.getElementsByTagName('h1');
// console.log(title);

// const title = document.querySelector('.hello h1:first_child'); // class
// const title2 = document.querySelector('#hello'); // ID
// console.log(title);

const h1 = document.querySelector('div.hello:first-child h1');
// // title.style.color = 'blue';

function handleTitleClick() {
  //   console.log(' title was click');
  //   const currentColor = h1.style.color;
  //   let newColor;
  //   if (currentColor === 'blue') {
  //     newColor = 'tomato';
  //   } else {
  //     newColor = 'blue';
  //   }
  //   h1.style.color = newColor;
  //   const clickClickName = 'active';
  //   if (h1.className === clickClickName) {
  //     h1.className = '';
  //   } else {
  //     h1.className = clickClickName;
  //   }
  const clickedClass = 'active';
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }
  h1.classList.toggle('active');
}

h1.addEventListener('click', handleTitleClick);

// function handleMouseEnter() {
//   h1.innerText = 'Mouse is herere';
// }
// function handleMouseLeave() {
//   h1.innerText = 'Mouse is gone';
// }
// title.addEventListener('mouseenter', handleMouseEnter);
// title.addEventListener('mouseleave', handleMouseLeave);

// h1.onclick = handleTitleClick;
// h1.mouseenter = handleMouseEnter;
// h1.mouseleave = handleMouseLeave;

// function handleWindowResize() {
//   document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
//   alert('copy');
// }

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
