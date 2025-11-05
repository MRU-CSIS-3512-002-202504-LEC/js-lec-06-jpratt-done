console.log("demo-03");

document.querySelector("main").addEventListener("click", toggleActive);

// Variation One
function toggleActive(event) {
  let targetElem = event.target;
  if (targetElem.tagName === "DIV") {
    targetElem.classList.toggle("active");
  }
}

// Variation Two
// function toggleActive(event) {
//   let targetElem = event.target.closest("main>div");
//   if (!targetElem) return;

//   targetElem.classList.toggle("active");
// }
