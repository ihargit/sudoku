module.exports = function solveSudoku(matrix) {
  // your solution
  let zeroPosition = returnZeroPosition(matrix);

  if (zeroPosition[0] === 1) {

  }






  
}

function returnZeroPosition (matrix) {
  let position = [-1, -1]; // [row, column]
  for (let i = 0; i < matrix.length; i++) {
    position[1] = matrix[i].indexOf(0);
    if (position[1] != -1) {
      position[0] = i;
      break;
    }
  }
  return position;
}