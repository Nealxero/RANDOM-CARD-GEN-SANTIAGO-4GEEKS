/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  const symbolvariant = randomSymbol();
  document.querySelector(".topLeft").innerHTML = symbolvariant;
  document.querySelector(".botRight").innerHTML = symbolvariant;
  document.querySelector(".number").innerHTML = randomNumb();
};
//write your code here
let randomNumb = () => {
  let numberList = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberGen = Math.floor(Math.random() * numberList.length);
  return numberList[numberGen];
};
let randomSymbol = () => {
  let symbolList = ["♥", "♠", "♣", "♦"];
  let symbolGen = Math.floor(Math.random() * symbolList.length);
  return symbolList[symbolGen];
};
