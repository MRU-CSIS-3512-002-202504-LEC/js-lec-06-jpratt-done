import { colourIt, logIt, clearIt } from "/js/utils.js";

let inputElem = document.querySelector("input");
let labelElem = document.querySelector("label");
let mainElem = document.querySelector("main");
let bodyElem = document.body;
let htmlElem = document.querySelector("html");

inputElem.addEventListener("input", colourIt);

mainElem.addEventListener("input", logIt);
mainElem.addEventListener("input", colourIt);

bodyElem.addEventListener("input", colourIt);

labelElem.addEventListener("input", colourIt);

htmlElem.addEventListener("input", colourIt);

// mainElem.addEventListener("input", (event) => console.log(event));
