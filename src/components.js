import { $ } from "./lib/$.js";
import { useState } from "./lib/react.js";

export const RedClicker = () => {
  const [count, setCount] = useState(0);

  console.log("<RedClicker render>");

  const handleClick = () => {
    setCount(count + 1);
  };

  return $(
    /*html*/ `<button class="clicker red-clicker">Red clicker ${count}</button>`,
    { onclick: handleClick }
  );
};

export const GreenClicker = () => {
  const [count, setCount] = useState(1);

  console.log("<GreenClicker render>");

  const handleClick = () => {
    setCount(count + 1);
  };

  return $(
    /*html*/ `<button class="clicker green-clicker">Green clicker ${count}</button>`,
    { onclick: handleClick }
  );
};

export const BlueClicker = () => {
  const [count, setCount] = useState(2);

  console.log("<BlueClicker render>");

  const handleClick = () => {
    setCount(count + 1);
  };

  return $(
    /*html*/ `<button class="clicker blue-clicker">Blue clicker ${count}</button>`,
    { onclick: handleClick }
  );
};

export const ClickerList = () => {
  const [appTitle, setAppTitle] = useState("");

  console.log("<ClickerList render>");

  const handleInputChange = (e) => {
    console.log("e :>> ", e);
    setAppTitle(e.target.value);
  };

  const div = $(/*html*/ `<div></div>`);
  const input = $(/*html*/ `<input type='text' placeholder="App title" />`, {
    oninput: handleInputChange,
    value: appTitle,
  });

  div.append(input);

  return div;
};
