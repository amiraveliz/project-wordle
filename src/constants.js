export const NUM_OF_GUESSES_ALLOWED = 6;

export const KEYBOARD = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export const KEYBOARD_MAP = KEYBOARD.reduce(
  (allKeys, keys) => [...keys, ...allKeys],
  []
).reduce((map, key) => {
  map[key] = "unused";
  return map;
}, {});
