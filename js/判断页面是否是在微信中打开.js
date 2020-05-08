/**
 * @method isWeixin
 * @return {boolen}
 */
function isWeixin() {
  return (
    window.top.navigator.userAgent.toLowerCase().indexOf("micromessenger") !==
    -1
  );
}