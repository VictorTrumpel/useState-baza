export const ReactCurrentDispatcher = { current: null };

export const useState = (initialState) => {
  ReactCurrentDispatcher.current.setInitaState(initialState);

  return [
    ReactCurrentDispatcher.current.currentState.state,
    ReactCurrentDispatcher.current.dispatchState,
  ];
};
