import { writable } from "svelte/store";

const initialState: Players = {
  Black: false,
  Blue: false,
  Brown: false,
  Cyan: false,
  Green: false,
  Lime: false,
  Orange: false,
  Pink: false,
  Purple: false,
  Red: false,
  White: false,
  Yellow: false,
};

export const players = writable(initialState);

export const reset = () => {
  players.update(() => initialState);
};

export const getSelected = (state: Players): PlayerColor[] => {
  return (Object.keys(state) as PlayerColor[]).filter((key) => state[key]);
};
