<template>
  <v-col cols="11">
    <v-card>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ articl.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ articl.shortDesc }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="100">
          <v-img :src="`img/${articl.preview_image}`"
        /></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined text @click="$router.push(`/articles/${articl.id}`)"> Подробнее </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    articl: {
      type: Object,
      require: true,
    },
  },
}
</script>
