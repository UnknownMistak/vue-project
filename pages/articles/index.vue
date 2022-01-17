<template>
  <v-row class="d-flex" justify="center">
    <div class="text-h2 ma-5">Лента новостей</div>
    <card-articl
      :articl="articl"
      v-for="articl in $store.getters['articles/getArticles']"
      :key="articl.id"
    ></card-articl>
  </v-row>
</template>
