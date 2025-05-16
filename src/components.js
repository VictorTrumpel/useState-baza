import { $ } from "./lib/$";
import { useState } from "./lib/react";

export const RedClicker = () => {
  const [counter, setCounter] = useState(0);

  console.log("<RedClicker> render");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return $(
    /*html*/ `<button class="clicker red">Red clicker ${counter}</button>`,
    {
      onclick: handleClick,
    }
  );
};

export const GreenClicker = () => {
  const [counter, setCounter] = useState(1);

  console.log("<GreenClicker> render");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return $(
    /*html*/ `<button class="clicker green">Green clicker ${counter}</button>`,
    {
      onclick: handleClick,
    }
  );
};

export const BlueClicker = () => {
  const [counter, setCounter] = useState(2);

  console.log("<BlueClicker> render");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return $(
    /*html*/ `<button class="clicker blue">Blue clicker ${counter}</button>`,
    {
      onclick: handleClick,
    }
  );
};

export const ClickerContainer = () => {
  const [text, setText] = useState("");

  console.log("<ClickerContainer> render");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const div = $(/*html*/ `<div></div>`);
  const input = $(/*html*/ `<input type="text" placeholder='Type...'/>`, {
    value: text,
    oninput: handleInput,
  });

  div.append(input);

  return div;
};
