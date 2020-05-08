// 格式化数字 1234567890 --> 1,234,567,890
/**
 * @method formatNumber
 * @param {string} str (必传 数字的字符串形式)
 * @param {string} joiner (可选 格式化的连接符)
 * @return {string}
 */
function formatNumber(str, joiner = ",") {
  const len = str.length;
  let arr = [],
    count = len;

  while (count >= 3) {
    arr.unshift(str.slice(count - 3, count));
    count -= 3;
  }
  // 数字长度如果不是3的倍数则追加上去
  len % 3 && arr.unshift(str.slice(0, len % 3));
  return arr.join(joiner);
}

function formatNumber(str, joiner = ",") {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + joiner) + prev;
    });
}