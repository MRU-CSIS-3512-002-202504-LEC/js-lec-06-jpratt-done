let searchElem = document.querySelector("[type='search']");
let buttonElem = document.querySelector("button");

// Let's choose a reasonable name!
// ⚠️ This is an example of an event handler that DOESN'T NEED the event as input. Why?
function enableButtonIfValidSearch() {
  // What property holds the content of the input element? 🤔
  let text = searchElem.value;

  // This SHOULD be a one-liner. How would you do that? 🤔
  // if (text.length >= 3) {
  //   buttonElem.disabled = false;
  // } else {
  //   buttonElem.disabled = true;
  // }
  buttonElem.disabled = text.length < 3;
}

searchElem.addEventListener("input", enableButtonIfValidSearch);
