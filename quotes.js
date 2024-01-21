const quotes = [
  //명언 배열
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote: "When it's late, it's really late. So start right now.",
    author: "Park",
  },
  {
    quote:
      "If you don't study now, you will work in a hot place when it's hot and a cold place when it's cold.",
    author: "Park",
  },
  {
    quote: 'A difficult "way" is not a "way".',
    author: "Park",
  },
  {
    quote: "The early bird gets tired.",
    author: "Park",
  },
  {
    quote: "If you can't enjoy it, avoid it.",
    author: "Park",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "You will never know until you try.",
    author: "Anonymous",
  },
];

const quote = document.querySelector("#quote span:first-child"); // quote아이디의 첫번째 span
const author = document.querySelector("#quote span:last-child"); // quote아이디의 마지막 span

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
