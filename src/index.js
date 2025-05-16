import { FiberNode, render } from "./lib/react-dom";
import {
  RedClicker,
  GreenClicker,
  BlueClicker,
  ClickerContainer,
} from "./components";
import "./index.css";

const root = new FiberNode(
  ClickerContainer,
  new FiberNode(RedClicker),
  new FiberNode(GreenClicker),
  new FiberNode(BlueClicker)
);

root.return = { stateNode: document.getElementById("root") };

render(root);
