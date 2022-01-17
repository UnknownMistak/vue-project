<template>
  <v-carousel cycle height="45vh" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide) in $store.getters['articles/getArticlesFromSlider']" :key="slide.id">
      <v-img :src="`img/${slide.full_image}`" max-height="100%"  max-width="100%"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>


