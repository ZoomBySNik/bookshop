<script>

import {mapActions, mapState} from "vuex";

export default {
  props: {
    book: {
      type: Object,
      default: null
    }
  },
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
        price: null,
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
    ...mapActions({
      createBook: 'books/createBook',
      updateBook: 'books/updateBook',
    }),
    openDialog(){
      if(this.book){
        this.newBook = this.book;
        this.createBookDialog = true
      } else {
        this.createBookDialog = true;
      }
    },
    updateDate(val) {
      console.log(val)
      this.newBook.dateOfPublication = val.toISOString().split('T')[0];
      this.datePicker = false;
    },
    submitBookForm() {
      if(this.book){
        this.updateBook(this.newBook);
      } else{
        const newBook = {
          ...this.newBook,
          cover: this.covers[Math.floor(Math.random() * this.covers.length)],
        };
        this.createBook(newBook);

      }
      this.createBookDialog = false;
      this.resetForm();
    },
    resetForm() {
      this.newBook = {
        name: '',
        author: '',
        dateOfPublication: '',
        genre: '',
        price: null,
      };
    }
  },
}
</script>

<template>
  <div>
    <v-btn
        v-if="book"
        @click="openDialog"
        icon="fa-solid fa-pen-to-square"
        color="info"
        variant="tonal"
        size="small"
    />
    <v-btn
        v-else
        @click="openDialog"
        prepend-icon="fa-solid fa-plus"
        variant="elevated"
        rounded="xl"
    >
      Создать книгу
    </v-btn>
  </div>
  <v-dialog
      v-model="createBookDialog"
      max-width="600px"
  >
    <v-card
        class="pa-4"
    >
      <v-card-text>
        <v-card-title>Форма добавления книги</v-card-title>
      </v-card-text>
      <v-form
          @submit.prevent="submitBookForm"
      >
        <v-text-field
            v-model="newBook.name"
            label="Название"
            required
        />
        <v-text-field
            v-model="newBook.author"
            label="Автор"
            required
        />
        <v-text-field
            v-model="newBook.dateOfPublication"
            label="Дата публикации"
            @click="datePicker = true"
            readonly
            required
        />
        <v-dialog v-model="datePicker">
          <v-date-picker
              v-model="date"
              no-title
              @update:modelValue="updateDate($event)"
          />
        </v-dialog>
        <v-text-field
            v-model="newBook.genre"
            label="Жанр"
            required
        />
        <v-text-field
            v-model="newBook.price"
            label="Цена" type="number"
            required
        />
        <v-btn
            type="submit"
            color="primary"
        >
          Сохранить
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>