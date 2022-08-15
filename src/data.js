const X_CHIPS_DATA = ['s1x', 's2x', 'm1x', 'm2x', 'l1x', 'l2x'];
const O_CHIPS_DATA = ['s1o', 's2o', 'm1o', 'm2o', 'l1o', 'l2o'];

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export { X_CHIPS_DATA, O_CHIPS_DATA, WIN_CONDITIONS };
