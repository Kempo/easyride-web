export const state = () => ({
  assignments: [],
  filesList: [],
  nextPageToken: '',
  pageIDs: ['']
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
  },
  updatePage(state, args) {
    state.filesList = args.list
    state.nextPageToken = args.token
  }
}
