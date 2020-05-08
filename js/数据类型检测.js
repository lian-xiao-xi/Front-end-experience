/**
 * @method judgeType
 * @param {*} data
 */
function judgeType(data) {
  return Object.prototype.toString
    .call(data)
    .slice(8, -1)
    .toLocaleLowerCase();
}