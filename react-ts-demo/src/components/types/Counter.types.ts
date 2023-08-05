export type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "+" | "-";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

export type CounterAction = UpdateAction | ResetAction;
