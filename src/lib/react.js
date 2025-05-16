export const ReactCurrentDispatcher = {
  current: {},
};

export const useState = (initialState) => {
  ReactCurrentDispatcher.current.setInitialState(initialState);

  const state = ReactCurrentDispatcher.current.currentState.state;

  return [state, ReactCurrentDispatcher.current.dispatchState];
};
