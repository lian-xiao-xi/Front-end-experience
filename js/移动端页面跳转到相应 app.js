function gotoApp() {
  var angent = window.top.navigator.userAgent.toLowerCase();
  var isAndroid =
    angent.indexOf("android") > -1 || angent.indexOf("linux") > -1;
  var isiOS = !!angent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);
  // Android和ios开发者定义的一个app标示
  const appHref = "yioksnike://course";
  // 如果手机上有这个app的话就将打开并跳转到相应的app页面；因为页面跳转了，所以下面的代码将不再执行
  window.location.href = appHref;
  // 如果没有的话，
  setTimeout(function() {
    // Android前往下载页（或根据业务进行具体操作）
    isAndroid && (window.location.href = "load.html");
    // ios 前往appstore中app的相应页面
    isiOS && (window.location.href = "app_store_url");
  }, 1500);
}