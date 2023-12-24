const images = ['bagan.jpg', 'moutain.jpg', 'tiger.jpg'];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
