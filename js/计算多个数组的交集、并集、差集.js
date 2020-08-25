/**
 * 计算多个数组的并集
 * @param {Array} arrays
 * @return {Array} 去重的数组
 */
function union(...arrays) {
  const list = arrays.reduce((pre, cur) => {
    return pre.concat(...cur);
  }, []);
  return Array.from(new Set(list))
}

/**
 * 计算多个数组的交集
 * @param {Array} arrays
 * @return {Array} 去重的数组
 */
function intersection(...arrays) {
  let i = 0;
  let result = arrays[i];
  for (; i < arrays.length - 1; i++) {
    const next = arrays[i + 1];
    result = result.filter(ele => next.includes(ele));
  }
  return Array.from(new Set(result));
}

/**
 * 计算多个数组的差集
 * @param {Array} arrays
 * @return {Array} 
 */
function difference(...arrays) {
  const uArray = union(...arrays);
  const iArray = intersection(...arrays);
  return uArray.filter(item => !iArray.includes(item));
}