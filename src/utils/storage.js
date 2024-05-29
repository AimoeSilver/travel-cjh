// 管理本地 Storage


/* 
存储数据
*/
export const setItem = (key, value) => {
  // translate JSON 转
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  // write
  window.localStorage.setItem()
}

export const getItem = (key) => {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (err) {
    return err
  }
}


export const removeItem = (key) => {
    window.localStorage.removeItem(key)
}

export const removeAllItem = () => {
    window.localStorage.clear()
}
