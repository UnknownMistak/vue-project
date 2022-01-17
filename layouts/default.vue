<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt v-if="!$store.getters['articles/getLoading']" />
        <div v-else class="text-h2 text-center">Происходит Загрузка</div>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <div>Юрий Зайцев</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Главная',
          to: '/',
        },
        {
          icon: 'mdi-newspaper-variant-multiple-outline',
          title: 'Новости',
          to: '/articles',
        },
        {
          icon: 'mdi-image-multiple',
          title: 'Галерея',
          to: '/galery',
        },
      ],
      title: 'Новостной портал',
    }
  },
  async mounted() {
    if (this.$store.getters["articles/getArticles"].length === 0 ){
      this.$store.dispatch("articles/getArticles")
    }
  },
}
</script>
