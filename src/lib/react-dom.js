import { ReactCurrentDispatcher } from "./react";

export function render(fiberNode) {
  const queue = [fiberNode];

  while (queue.length > 0) {
    const node = queue.shift();

    const domNode = node.renderDOMNode();

    node.return.stateNode.append(domNode);

    queue.push(...node.children);
  }
}

export class FiberNode {
  children = [];

  stateNode = null;

  memoizedState = {
    state: undefined,
    isInited: false,
  };

  return = null;

  constructor(renderFunc, ...children) {
    this.renderFunc = renderFunc;
    this.children = children;
    for (const child of this.children) {
      child.return = this;
    }
  }

  setInitialState = (initialState) => {
    if (this.memoizedState.isInited) return;
    this.memoizedState.state = initialState;
    this.memoizedState.isInited = true;
  };

  dispatchState = (newState) => {
    this.memoizedState.isInited = true;

    this.memoizedState.state = newState;

    render(this);
  };

  renderDOMNode() {
    ReactCurrentDispatcher.current = {
      currentState: this.memoizedState,
      setInitialState: this.setInitialState,
      dispatchState: this.dispatchState,
    };

    this.stateNode?.remove();

    this.stateNode = this.renderFunc();

    return this.stateNode;
  }
}
