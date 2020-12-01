const getters = {
  appNameWithVersion : (state) => {
    return state.appName + 'v2.0'
    // 等价于下面
    // return `${state.appName}v2.0`
  }
}

export default getters
