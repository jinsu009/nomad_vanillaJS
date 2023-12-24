const quotes = [
  {
    quote: 'apple',
    author: 'a',
  },
  {
    quote: 'banana',
    author: 'b',
  },
  {
    quote: 'cherry',
    author: 'c',
  },
  {
    quote: 'fig',
    author: 'f',
  },
  {
    quote: 'plum',
    author: 'p',
  },
  {
    quote: 'tangerine',
    author: 't',
  },
  {
    quote: 'grape',
    author: 'g',
  },
  {
    quote: 'melon',
    author: 'm',
  },
  {
    quote: 'sweet-potato',
    author: 's',
  },
  {
    quote: 'radish',
    author: 'r',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayStr = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayStr.quote;
author.innerText = todayStr.author;
