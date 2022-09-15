import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

import * as data from './data/info';

import { Main } from './Main';

let card = document.querySelector(".card");

window.onload = function() {
    console.log("JM was Here!");
    getCard();
};

document.querySelector("#draw-btn").addEventListener("click", getCard);

function getCard() {
    card.innerHTML = "";

    const suits = ["♣", "♦", "♥", "♠"];
    const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let randomsuit = suits[Math.floor(Math.random() * suits.length)];
    let randomrank = ranks[Math.floor(Math.random() * ranks.length)];

    let objCard = {};
    objCard.suit = randomsuit;
    objCard.rank = randomrank;
    console.log(objCard);

    let divSuitTop = document.createElement("div");
    let divRank = document.createElement("div");
    let divSuitBot = document.createElement("div");

    divSuitTop.classList.add("suit-top");
    divRank.classList.add("rank");
    divSuitBot.classList.add("suit-bot");

    divSuitTop.style.color = randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";
    divRank.style.color = randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";
    divSuitBot.style.color = randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";

    divSuitTop.innerHTML = objCard.suit;
    divRank.innerHTML = objCard.rank;
    divSuitBot.innerHTML = objCard.suit;

    card.append(divSuitTop, divRank, divSuitBot);
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main {...data} />);