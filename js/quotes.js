const quotes = [
  {
    quote: "Watch your habits for they become your destiny.",
    author: "Margaret Thatcher",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote:
      "Success seems to be connected with action. Successful people keep moving.",
    author: "Conard Hilton",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  },
  {
    quote: "Grind Hard, Shine Hard",
    author: "Dwayne Johnson",
  },
  {
    quote:
      "If you never want to be criticized, for goodness sake don’t do anything new.",
    author: "Jefft Bezos",
  },
  {
    quote:
      "The first step is to establish that something is possible; then probability will occur.",
    author: "Elon Musk",
  },
  {
    quote:
      "You have to be pretty driven to make it happen. Otherwise, you will just make yourself miserable",
    author: "Elon Musk",
  },
  {
    quote: "Everyone has a plan, until they get pushed in th mouth",
    author: "Mike Tyson",
  },
  {
    quote:
      "The first principle is that you must not fool yourself and you are the easiest person to fool.",
    author: "Richard Feynman",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
