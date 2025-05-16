import { ReactCurrentDispatcher } from "./react";

export const render = (fiberNode) => {
  const queue = [fiberNode];

  while (queue.length > 0) {
    const fiber = queue.shift();
    const domNode = fiber.createDOMNode();

    fiber.return.stateNode.append(domNode);

    queue.push(...fiber.childern);
  }
};

export class FiberNode {
  childern = [];

  stateNode = null; // dom узел конкретной файбер ноды

  return = null; // ссылка на родительскую файбер ноду

  memoizedState = {
    state: undefined,
    isInited: false,
  };

  constructor(renderFunc, ...childern) {
    this.renderFunc = renderFunc;
    this.childern = childern;

    for (const child of childern) {
      child.return = this;
    }
  }

  setInitaState = (initialState) => {
    if (this.memoizedState.isInited) return;
    this.memoizedState.isInited = true;
    this.memoizedState.state = initialState;
  };

  dispatchState = (newState) => {
    this.memoizedState.isInited = true;
    this.memoizedState.state = newState;
    render(this);
  };

  createDOMNode() {
    ReactCurrentDispatcher.current = {
      currentState: this.memoizedState,
      setInitaState: this.setInitaState,
      dispatchState: this.dispatchState,
    };

    this.stateNode?.remove();
    const domNode = this.renderFunc();
    this.stateNode = domNode;
    return this.stateNode;
  }
}
