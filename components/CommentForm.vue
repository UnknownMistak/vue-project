<template>
  <v-row class="d-flex mt-2" justify="center">
    <div class="text-h6 text-center">Оставить комментарий</div>
    <v-col cols="10">
      <v-form v-model="valid" @submit.prevent>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="name"
                :rules="nameRules"
                :counter="30"
                label="Имя"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                name="input-7-4"
                label="Комментарий"
                :rules="commentRules"
                v-model="comment"
              ></v-textarea>
            </v-col>
            <v-btn
              class="ml-4"
              type="submit"
              :disabled="!valid"
              @click="sendComment(); return false;"
            >
              Отправить
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'Это обязательное поле',
      (v) => v.length <= 30 || 'Имя не может быть длиннее 30 символов',
    ],
    comment: '',
    commentRules: [(v) => !!v || 'Это обязательное поле'],
  }),
  methods: {
    async sendComment() {
      const comment = {
        id: this.$route.params.id,
        user_name: this.name,
        comment: this.comment,
      }
      await this.$store.dispatch('articl/sendComment', comment)
      this.name=''
      this.comment=''
      await this.$store.dispatch('articl/getComments', this.$route.params.id)
    },
  },
}
</script>
