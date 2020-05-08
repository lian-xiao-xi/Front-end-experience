/**
 * @method swapArray
 * @param {Array} arr (进行操作的数组)
 * @param {number} x (位置1下标索引)
 * @param {number} y (位置2下标索引)
 * @return {Array}
 */
function swapArray(arr, x, y) {
  const swapArr = arr.concat();
  const len = arr.length;

  x < 0 && (x = len + x);
  y < 0 && (y = len + y);

  if (x < 0 || y < 0 || x > len - 1 || y > len - 1) {
    console.error("两个相互交互的位置不得大于数组长度");
    return swapArr;
  }

  if (x === y) {
    return swapArr;
  }
  // ES5 写法
  // swapArr.splice(x, 1, swapArr.splice(y, 1, swapArr[x])[0])

  // ES6 写法
  // [swapArr[x], swapArr[y]] = [swapArr[y], swapArr[x]] // 解构赋值的写法
  swapArr.splice(x, 1, ...swapArr.splice(y, 1, swapArr[x])); // 普通写法
  return swapArr;
}