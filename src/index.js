module.exports = function solveSudoku(matrix) {
  solveSudokuMain(matrix);
  return matrix;

  function solveSudokuMain(matrix) {
    let row, column, zeroPosition;
    zeroPosition = returnZeroPosition(matrix); // store current position of empty cell [row, column]
    row = zeroPosition[0];
    column = zeroPosition[1];
    // prevent from further calculations if there are no empty cells
    if (row === -1) {
      return true;
    } else {
      // substitution of numbers
      for (let value = 1; value <= 9; value++) {
      if (checkForRulesCompliance (matrix, row, column, value)) {
        matrix[row][column] = value;
        if (solveSudokuMain(matrix)) {
          return true; //stop function execution if child recursive function return 'true' (sudoku solved)
        }
        matrix[row][column] = 0; // make cell empty if a number doesn't fit and we need to continue substitution
        }
      }
      return false; // trigger to continue numbers substitution for parent recursive function
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

  function checkForRulesCompliance (matrix, row, column, value) {

    return checkTheRow(matrix, row, value) && checkTheColumn(matrix, column, value) && checkTheSubMatrix(matrix, row, column, value);

    //check if there is no the same number in the row
    function checkTheRow(matrix, row, value) {
      for(let column = 0; column < 9; column++) {
        if (matrix[row][column] === value) {
          return false;
        }
      }
      return true;
    }

    //check if there is no the same number in the column
    function checkTheColumn(matrix, column, value) {
      for (let row = 0; row < 9; row ++) {
        if (matrix[row][column] === value) {
          return false;
        }
      }
      return true;
    }

    //check if there is no the same number in the submatrix
    function checkTheSubMatrix (matrix, row, column, value) {
      row = Math.floor(row / 3) * 3; // gives 0, 3, or 6
      column = Math.floor(column / 3) * 3; // --||--

      for (let rowPositionShift = 0; rowPositionShift < 3; rowPositionShift++) {
        for (let columnPositionShift = 0; columnPositionShift < 3; columnPositionShift++) {
          if (matrix[row + rowPositionShift][column + columnPositionShift] === value) {
            return false;
          }
        }
      }
      return true;
    }
  }
}