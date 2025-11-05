export function tileElement(s) {
  let divElem = document.createElement("div");
  divElem.textContent = s;
  divElem.classList.add("tile");

  return divElem;
}
