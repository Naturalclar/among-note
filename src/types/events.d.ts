type CustomEvent<T> = {
  detail: T;
};

type PlayerSelectEvent = CustomEvent<{
  color: PlayerColor;
}>;

type MapSelectEvent = CustomEvent<{
  map: MapName
}>;