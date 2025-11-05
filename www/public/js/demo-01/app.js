import { colourIt, logIt, clearIt } from "../utils.js";

let inputElem = document.querySelector("input");

inputElem.addEventListener("mouseover", colourIt);

inputElem.addEventListener("input", colourIt);
inputElem.addEventListener("input", logIt);
inputElem.addEventListener("input", clearIt);
