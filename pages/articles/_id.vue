<template>
  <div class="d-flex flex-column" v-if="!$store.getters['articl/getLoading']">
    <v-row class="d-flex mt-2" justify="center">
      <v-col cols="11">
        <div class="text-h3 text-center">
          {{ articl.name }}
        </div>
        <div class="text-subtitle-1 text-center text--disabled">
          Дата: {{ articl.date }}
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex" justify="center">
      <v-col cols="10">
        <v-img :src="`../img/${articl.full_image}`"></v-img>
      </v-col>
    </v-row>
    <v-row class="d-flex mt-2" justify="center">
      <v-col cols="10">
        <div>
          {{ articl.desc }}
        </div>
      </v-col>
    </v-row>
    <comment-form></comment-form>
    <v-row class="d-flex mt-2" justify="center" v-if="!$store.getters['articl/getLoadingComments']">
      <CommentCard
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      ></CommentCard>
    </v-row>
    <v-row v-else class="d-flex mt-2" justify="center">
      <v-col cols="10"> Загрузка коментариев</v-col>
    </v-row>
  </div>
  <div v-else class="text-h1 text-center">
    Загрузка статьи
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('articl', { articl: 'getArticl', comments: 'getComments' }),
  },
  async mounted() {
    await this.$store.dispatch('articl/getArticl', this.$route.params.id)
    await this.$store.dispatch('articl/getComments', this.$route.params.id)
  },
}
</script>
