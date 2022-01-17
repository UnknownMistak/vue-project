export const state = () => ({
  articles: [],
  loading: true,
})

export const mutations = {
  addArticles(state, articles) {
    state.articles = articles
  },
  setLoading(state, loading) {
    state.loading = loading
  },
}

export const actions = {
  async getArticles({ commit }) {
    commit('setLoading', true)
    try {
      const { data } = await this.$axios.get(
        'http://demo-api.vsdev.space/api/articles'
      )
      commit('addArticles', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setLoading', false)
    }
  },
}

export const getters = {
  getArticles(state) {
    return state.articles
  },
  getLoading(state) {
    return state.loading
  },
  getArticlesFromSlider(state) {
    const articlesFromSlider = []
    for (let index = 0; index < state.articles.length; index++) {
      if (state.articles[index].slider) {
        articlesFromSlider.push(state.articles[index])
      }
    }
    return articlesFromSlider
  },
}
