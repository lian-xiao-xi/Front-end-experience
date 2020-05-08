/**
 * 转义
 * @method htmlEncode
 * @param {string} html
 * @return {string}
 */
function htmlEncode(html) {
  //1.首先动态创建一个容器标签元素，如DIV
  let temp = document.createElement("div");
  //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
  temp.textContent != undefined
    ? (temp.textContent = html)
    : (temp.innerText = html);
  //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
  let output = temp.innerHTML;
  temp = null;
  return output;
}

/**
 * 反转义
 * @method htmlDecode
 * @param {string} text
 * @return {string}
 */
function htmlDecode(text) {
  //1.首先动态创建一个容器标签元素，如DIV
  let temp = document.createElement("div");
  //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
  temp.innerHTML = text;
  //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
  let output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}