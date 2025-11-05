/* eslint-disable unicorn/number-literal-case */

import { tileElement } from "./tile-element.js";

const mainElem = document.querySelector("main");

// This loop generates a whole bunch of Japanese characters, creates
// tiles out of them (see tileElement function) and adds them to the <main>
// on the page.
for (let i = 0; i < 2000; i += 1) {
  let s = String.fromCodePoint(0x4e_00 + i);
  mainElem.append(tileElement(s));
}
