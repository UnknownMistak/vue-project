<template>
  <v-col cols="10">
    <v-card color="#272727" dark>
      <v-card-title class="text-h5"> {{ comment.user_name }} </v-card-title>
      <v-card-subtitle>
        {{ comment.comment }}
      </v-card-subtitle>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      require: true,
    },
  },
}
</script>
