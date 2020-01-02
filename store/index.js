export const state = () => ({
  assignments: [
    {
      name: 'Tim'
    },
    {
      name: 'Jacob'
    }
  ]
})

export const mutations = {
  add(state, driver) {
    state.assignments.push(driver)
  },
  addAll(state, list) {
    state.assignments = list
  },
  clear(state) {
    state.assignments = []
  }
}
