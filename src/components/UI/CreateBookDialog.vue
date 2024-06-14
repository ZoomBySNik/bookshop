<script>

import {mapMutations, mapState} from "vuex";
import {v4 as uuidv4} from "uuid";

export default {
  data() {
    return {
      createBookDialog: false,
      datePicker: false,
      date: null,
      newBook: {
        uuid: undefined,
        name: '',
        author: '',
        dateOfPublication: '',
        genre: '',
        price: 0,
        cover: undefined,
      }
    }
  },
  computed: {
    ...mapState({
      covers: state => state.books.covers,
    }),
  },
  methods: {
    ...mapMutations({
      pushBook: 'books/pushBook',
    }),
    updateDate(val) {
      console.log(val)
      this.newBook.dateOfPublication = val.toISOString().split('T')[0];
      this.datePicker = false;
    },
    submitBookForm() {
      const newBook = {
        ...this.newBook,
        uuid: uuidv4(),
        cover: this.covers[Math.floor(Math.random() * this.covers.length)],
      };
      this.pushBook(newBook);
      this.createBookDialog = false;
      this.resetForm();
    },
    resetForm() {
      this.newBook = {
        uuid: '',
        name: '',
        author: '',
        dateOfPublication: '',
        genre: '',
        price: 0
      };
    }
  },
}
</script>

<template>
  <v-btn
      @click="createBookDialog=true"
      prepend-icon="fa-solid fa-plus"
      variant="elevated"
      rounded="xl"
  >Создать книгу
  </v-btn>
  <v-dialog v-model="createBookDialog" max-width="600px">
    <v-card class="pa-4">
      <v-card-text>
        <v-card-title>Форма добавления книги</v-card-title>
      </v-card-text>
      <v-form @submit.prevent="submitBookForm">
        <v-text-field v-model="newBook.name" label="Название" required></v-text-field>
        <v-text-field v-model="newBook.author" label="Автор" required></v-text-field>
        <v-text-field
            v-model="newBook.dateOfPublication"
            label="Дата публикации"
            @click="datePicker = true"
            required
        ></v-text-field>
        <v-dialog v-model="datePicker">
          <v-date-picker
              v-model="date"
              no-title
              @update:modelValue="updateDate($event)"
          ></v-date-picker>
        </v-dialog>

        <v-text-field v-model="newBook.genre" label="Жанр" required></v-text-field>
        <v-text-field v-model="newBook.price" label="Цена" type="number" required></v-text-field>
        <v-btn type="submit" color="primary">Добавить</v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>