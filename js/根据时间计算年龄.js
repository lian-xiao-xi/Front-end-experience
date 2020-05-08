/**
 * 根据一个形如 '2018-10-10' 的时间字符串计算年龄
 * @method getAge
 * @param {string} dateString
 * @return {number}
 */
function getAge(dateString) {
  const today = new Date(),
    birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}