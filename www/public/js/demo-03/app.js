document.querySelector("main").addEventListener("click", makeActive);

function makeActive(clickEvent) {
  let targetElem = clickEvent.target;
  if (targetElem.tagName === "DIV") {
    targetElem.classList.add("active");
  }
}
