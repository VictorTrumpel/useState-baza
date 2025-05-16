import { useState, createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const RedClicker = () => {
  const [counter, setCounter] = useState(0);

  console.log("<RedClicker> render");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return createElement(
    "button",
    { className: "clicker red", onClick: handleClick },
    "Red clicker ",
    counter
  );
};

const GreenClicker = () => {
  const [counter, setCounter] = useState(1);

  console.log("<GreenClicker> render");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return createElement(
    "button",
    { className: "clicker green", onClick: handleClick },
    "Green clicker ",
    counter
  );
};

const BlueClicker = () => {
  const [counter, setCounter] = useState(2);

  window.__$dispatch = setCounter;

  console.log("<BlueClicker> render");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return createElement(
    "button",
    { className: "clicker blue", onClick: handleClick },
    "Blue clicker ",
    counter
  );
};

const ClickerContainer = () => {
  const [text, setText] = useState("");

  console.log("<ClickerContainer> render");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return createElement(
    "div",
    null,
    createElement("input", {
      value: text,
      onChange: handleInput,
      placeholder: "Type...",
    }),
    createElement(RedClicker, null),
    createElement(GreenClicker, null),
    createElement(BlueClicker, null)
  );
};

const root = createRoot(document.getElementById("root"));
root.render(createElement(ClickerContainer, null));
