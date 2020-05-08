/**
 * @param {string} key (必传 要添加的参数的key)
 * @param {string} val (必传 要添加的参数的value)
 * @param {string} url (可选)
 */
function addURLParam(key, val, url = window.location.href) {
  return (url +=
    (url.indexOf("?") === -1 ? "?" : "&") +
    encodeURIComponent(key) +
    "=" +
    encodeURIComponent(val));
}