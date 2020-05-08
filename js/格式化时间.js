// 将表示日期的字符串或者时间戳转换为形如 2000-09-18 15:59:08 的格式
/**
 * @method formatDate
 * @param {string | number} date (可以被 Date.parse() 方法识别的字符串或者时间戳)
 * @return {string}
 */
function formatDate(date) {
  const date = new Date(date);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  // m = m < 10 ? ('0'+m) : m;
  m < 10 && (m = "0" + m);
  let d = date.getDate();
  // d = d < 10 ? ('0'+d) : d;
  d < 10 && (d = "0" + d);
  let hour = date.getHours();
  hour < 10 && (hour = "0" + hour);
  let min = date.getMinutes();
  min < 10 && (min = "0" + min);
  let sec = date.getSeconds();
  sec < 10 && (sec = "0" + sec);
  return y + "-" + m + "-" + d + " " + hour + ":" + min + ":" + sec;
}

/**
 * 将时间戳转换为如下规则的格式：
    1 分钟以内显示为：刚刚
    1 小时以内显示为：N 分钟前
    当天以内显示为：今天 N 点 N 分（如：今天 22:33）
    昨天时间显示为：昨天 N 点 N 分（如：昨天 10:15）
    当年以内显示为：N 月 N 日 N 点 N 分（如：02 月 03 日 09:33）
    今年以前显示为：N 年 N 月 N 日 N 点 N 分（如：2000 年 09 月 18 日 15:59）
 */

 /**
 * @method timestampFormat
 * @param {number} timestamp (时间戳)
 * @return {string}
 */
function timestampFormat(timestamp) {
  const zeroize = num => (String(num).length == 1 ? "0" : "") + num;

  const curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
  const timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

  const curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
  const tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

  const Y = tmDate.getFullYear(),
    m = tmDate.getMonth() + 1,
    d = tmDate.getDate();
  const H = tmDate.getHours(),
    i = tmDate.getMinutes(),
    s = tmDate.getSeconds();

  if (timestampDiff < 60) {
    // 一分钟以内
    return "刚刚";
  } else if (timestampDiff < 3600) {
    // 一小时前之内
    return Math.floor(timestampDiff / 60) + "分钟前";
  } else if (
    curDate.getFullYear() == Y &&
    curDate.getMonth() + 1 == m &&
    curDate.getDate() == d
  ) {
    return "今天" + zeroize(H) + ":" + zeroize(i);
  } else {
    var newDate = new Date((curTimestamp - 60 * 60 * 24) * 1000); // 24小时前的日期对象
    if (
      newDate.getFullYear() == Y &&
      newDate.getMonth() + 1 == m &&
      newDate.getDate() == d
    ) {
      return "昨天" + zeroize(H) + ":" + zeroize(i);
    } else if (curDate.getFullYear() == Y) {
      return (
        zeroize(m) + "月" + zeroize(d) + "日 " + zeroize(H) + ":" + zeroize(i)
      );
    } else {
      return (
        Y +
        "年" +
        zeroize(m) +
        "月" +
        zeroize(d) +
        "日 " +
        zeroize(H) +
        ":" +
        zeroize(i)
      );
    }
  }
}

// 将日期时间转换为时间差形式，形如：2 分钟前、4 小时前、5 天前
/**
 * @method getDateDiff
 * @param {number} dateTimeStamp (时间戳)
 * @return {string}
 */
function getDateDiff(dateTimeStamp) {
  const now = new Date().getTime();
  const minute = 1000 * 60,
    hour = minute * 60,
    day = hour * 24,
    month = day * 30;
  const diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    //若日期不符则弹出窗口告之
    //alert("结束日期不能小于开始日期！");
  }
  const monthC = diffValue / month,
    weekC = diffValue / (7 * day),
    dayC = diffValue / day,
    hourC = diffValue / hour,
    minC = diffValue / minute;

  if (monthC >= 1) {
    return "发表于" + parseInt(monthC) + "个月前";
  } else if (weekC >= 1) {
    return "发表于" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return "发表于" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    return "发表于" + parseInt(hourC) + "个小时前";
  } else if (minC >= 1) {
    return "发表于" + parseInt(minC) + "分钟前";
  } else {
    return "刚刚发表";
  }
}
