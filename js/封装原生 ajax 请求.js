document.addEventListener("DOMContentLoaded", function() {
  const AjaxGet = new XMLHttpRequest();
  AjaxGet.onreadystatechange = function() {
    if (AjaxGet.readyState === 4) {
      if (
        (AjaxGet.status >= 200 && AjaxGet.status < 300) ||
        AjaxGet.status === 304
      ) {
        let resultData = JSON.parse(AjaxGet.responseText);
        if (resultData.code === 0) {
          console.error("参数传递错误 ");
          return;
        }
        if (resultData.resultInfo) {
          // do somethings
        }
      } else {
        console.log("request was fail: ", AjaxGet.status);
      }
    }
  };
  AjaxGet.open("get", `${window.location.origin}/api/...`, true);
  AjaxGet.send(null);
});