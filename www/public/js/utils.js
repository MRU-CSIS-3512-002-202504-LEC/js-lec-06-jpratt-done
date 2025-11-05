/* eslint-disable unicorn/numeric-separators-style */
/* eslint-disable unicorn/prefer-math-trunc */
/* eslint-disable unicorn/number-literal-case */

// From https://stackoverflow.com/a/5365036
// Returns a random hex colour.
function randoColour() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}

function clearIt() {
  console.clear();
}

// 🤔 What does the `type` property return?
function logIt(event) {
  console.log(
    `<${event.currentTarget.tagName}> heard a ${event.type} event, so handler logIt is being called`,
  );
}

// 🤔 What does the `currentTarget` property return?
function colourIt(event) {
  console.log(
    `<${event.currentTarget.tagName}> heard a ${event.type} event, so handler colourIt is being called`,
  );
  event.currentTarget.style.backgroundColor = randoColour();
}

function borderIt(event) {
  console.log(
    `<${event.currentTarget.tagName}> heard a ${event.type} event, so handler borderIt is being called`,
  );
  event.currentTarget.style.backgroundColor = randoColour();
  event.currentTarget.style.borderStyle = "solid";
  event.currentTarget.style.borderWidth = "10px";
}

function EventReporter() {
  this.level = 0;
  this.report = (inputEvent) => {
    if (this.level === 0) {
      console.clear();
      console.log("===============");
      console.log("Event fired:", inputEvent.toString());
      console.log(`Event target: <${inputEvent.target.tagName}> element`);
      console.log("===============");
    }

    if (inputEvent.currentTarget === document) {
      console.log("** INPUT EVENT REACHED DOCUMENT LEVEL **");
      this.level = 0;
    } else {
      console.log(
        `LEVEL ${this.level++}: <${
          inputEvent.currentTarget.tagName
        }> element is running its input event handler.`,
      );
    }
    console.log("----------------");
  };
}

export { EventReporter, logIt, colourIt, clearIt, borderIt };
