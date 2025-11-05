export function tileElement(s) {
  let divElem = document.createElement("div");
  divElem.textContent = s;
  divElem.classList.add("tile");

  // Style each tile so that it shakes and turns blue when moused over.
  divElem.addEventListener("mouseover", () => {
    // The shake CSS classes are from the neat https://elrumordelaluz.github.io/csshake/
    divElem.classList.add("shake-slow", "shake-constant");

    // Just as a reminder you can do inline styling.
    divElem.style.backgroundColor = "blue";
  });

  return divElem;
}
