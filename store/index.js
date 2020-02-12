export const state = () => ({
  assignments: []
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
