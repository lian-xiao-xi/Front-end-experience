function os() {
  var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) ||
      (isAndroid && !/(?:Mobile)/.test(ua)) ||
      (isFireFox && /(?:Tablet)/.test(ua)),
    isiPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isiPhone && !isAndroid && !isSymbian;
  return {
    isTablet: isTablet,
    isiPhone: isiPhone,
    isAndroid: isAndroid,
    isPc: isPc
  };
}
if (os.isAndroid || os.isiPhone) {
  window.location.href = "../phone/index.html";
} else if (os.isTablet) {
  // 屏幕宽度过小的平板(如ipad)同样展示手机端页面
  if (window.screen.availWidth < 960) {
    window.location.href = "../phone/index.html";
  }
}
