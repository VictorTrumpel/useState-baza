import "./lib/$.js";
import "./index.css";
import { FiberNode, render } from "./lib/react-dom.js";
import {
  ClickerList,
  RedClicker,
  GreenClicker,
  BlueClicker,
} from "./components";

export const root = new FiberNode(
  ClickerList,
  new FiberNode(RedClicker),
  new FiberNode(GreenClicker),
  new FiberNode(BlueClicker)
);

root.return = { stateNode: document.getElementById("root") };

render(root);
