
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let newArr = []

  if (matrix) {
    matrix.forEach(mi => matrix.indexOf(mi) % 2 === 0 ? newArr = newArr.concat(mi) : newArr = newArr.concat(mi.reverse()));
  }

  return newArr;
}
