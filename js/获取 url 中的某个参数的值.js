/**
 * @method getHrefVal
 * @param {string} name (必传 查找的url中的某个参数的值)
 * @param {string} url (可选)
 * @return {string}
 */
function getHrefVal(name, url) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let regMatch = window.location.search.substr(1).match(reg);
  if (url !== undefined) {
    let _url = url.split("?")[1];
    regMatch = _url.match(reg);
  }
  return regMatch === null ? "" : decodeURIComponent(regMatch[2]);
}
// 备注: URLSearchParams 有很大的兼容性问题
function getHrefVal(name) {
  return decodeURIComponent(
    new URLSearchParams(window.location.search).get(name)
  );
}