export default {
  setDomain: function (state, domain) {
    state.domain = domain
  },
  setToken: function (state, token) {
    state.token = token
  },
  setUser: function (state, data) {
    if (data &&
      data.constructor === [].constructor &&
      data.length > 0
    ) {
      data.forEach((item) => {
        if (
          item && item.constructor === {}.constructor &&
          'key' in item && 'value' in item && item.key
        ) {
          if (item.key in state) {
            state[item.key] = item.value
          }
        }
      })
    }
    state.onAuthReady = true
  }
}