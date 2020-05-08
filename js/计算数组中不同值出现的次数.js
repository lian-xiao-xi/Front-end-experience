/**
 * 计算数组中不同值出现的次数
 * @method arrayCount
 * @param {Array} arr
 * @return {Array}
 */
function arrayCount(arr) {
  let coachInfoNum = [];
  for (let i = 0; i < arr.length; ) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    coachInfoNum.push({
      date: arr[i],
      count: count
    });
    i += count;
  }
  return coachInfoNum;
}