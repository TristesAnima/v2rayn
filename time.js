// 时间戳格式化
module.exports = dayjs = (timestamp = Date.now()) => {
  let time = new Date(Number(timestamp))
  let y = time.getFullYear() //年
  let m = time.getMonth() + 1 //月
  m = m < 10 ? '0' + m : m

  let d = time.getDate() //日
  d = d < 10 ? '0' + d : d

  let h = time.getHours() //时
  h = h < 10 ? '0' + h : h

  let mm = time.getMinutes() //分
  mm = mm < 10 ? '0' + mm : mm

  let s = time.getSeconds() //秒
  s = s < 10 ? '0' + s : s

  const timeStr = y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s
  return timeStr
}