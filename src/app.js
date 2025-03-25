import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["♦","♥","♠","♣"]
  const cardNumber =["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const randomSuitsnNumbers = (arr) => Math.floor(Math.random()*arr.length)
  const randomSuits = suits[randomSuitsnNumbers(suits)] 
  const randomNumber = cardNumber [randomSuitsnNumbers(cardNumber)] 


  const card = document.querySelector('#card')
  const suitUp = document.querySelector('#suitUp')
  const cardValue = document.querySelector('#cardValue')
  const suitDown = document.querySelector('#suitDown')
  
  
  if (randomSuits == "♦" || randomSuits == "♥") {
    suitUp.classList.add("red")
    cardValue.classList.add("red")
    suitDown.classList.add("red")
  } else {
    suitUp.classList.add("black")
    cardValue.classList.add("black")
    suitDown.classList.add("black")
  }
  
  suitUp.innerHTML = randomSuits
  cardValue.innerHTML = randomNumber
  suitDown.innerHTML = randomSuits
  console.log(randomSuits, randomNumber)
  
};
