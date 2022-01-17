<template>
  <v-row class="d-flex flex-column">
    <div class="text-h2 text-center mt-4">Галерея</div>
    <v-col class="mt-4" cols="12">
      <v-row >
        <v-col
          cols="12"
          md="6"
          sm="6"
          lg="4"
          v-for="img in $store.getters['articles/getArticles']"
          :key="img.id"
        >
          <v-img :src="`../img/${img.full_image}`"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
