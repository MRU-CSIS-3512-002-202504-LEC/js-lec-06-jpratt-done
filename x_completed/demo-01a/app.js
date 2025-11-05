// 🤔 What are we doing here?
// 🤔 Could we use a different path for our `from`?
import { colourIt, logIt, clearIt } from "/js/utils.js";

let inputElem = document.querySelector("input");

inputElem.addEventListener("mousemove", colourIt);

inputElem.addEventListener("click", clearIt);
inputElem.addEventListener("click", logIt);
inputElem.addEventListener("click", colourIt);
