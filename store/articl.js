export const state = () => ({
  loading: true,
  loadingComments: false,
  articl: {},
  comments: [],
})

export const mutations = {
  addArticl(state, articl) {
    state.articl = articl
  },
  setLoadingComments(state, loading) {
    state.loadingComments = loading
    console.log(state.loadingComments)
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  addComments(state, comments) {
    state.comments = comments
  },
}

export const actions = {
  async getArticl({ commit }, id) {
    commit('setLoading', true)
    try {
      const { data } = await this.$axios.get(
        `http://demo-api.vsdev.space/api/articles/${id}`
      )
      commit('addArticl', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setLoading', false)
    }
  },
  async getComments({ commit }, id) {
    commit('setLoadingComments', true)
    try {
      const { data } = await this.$axios.get(
        `http://demo-api.vsdev.space/api/articles/${id}/comments`
      )
      commit('addComments', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setLoadingComments', false)
    }
  },
  async sendComment({}, comment) {
    try {
      await this.$axios.post(
        `http://demo-api.vsdev.space/api/articles/${comment.id}/comments`,
        {
          user_name: comment.user_name,
          comment: comment.comment,
        }
      )
    } catch (error) {
      console.log(error)
    }
  },
}

export const getters = {
  getArticl: (state) => {
    return state.articl
  },
  getComments: (state) => {
    return state.comments
  },
  getLoading: (state) => {
    return state.loading
  },
  getLoadingComments: (state) => {
    return state.loadingComments
  },
}
