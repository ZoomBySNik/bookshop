<template>
  <v-container>
    <div class="d-flex flex-column ga-8">
      <div class="d-flex justify-space-between ga-4">
        <div class="d-flex flex-row ga-4">
          <v-btn
              prepend-icon="fa-solid fa-wand-magic-sparkles"
              variant="elevated"
              @click="generateBooks(5)"
              rounded="xl"
          >Создать 5 случайных книг
          </v-btn>
          <create-book-dialog></create-book-dialog>
        </div>
        <div>
          <v-btn
              prepend-icon="fa-solid fa-trash"
              class="align-self-end"
              rounded="xl"
              @click="toggleDeletingMode"
          >Удалить несколько
          </v-btn>
          <v-snackbar
              v-model="deletingMode"
              :timeout="-1"
              color="info"
          >Выберите книги для удаления и снова нажмите "Удалить несколько".
            <v-btn
                color="red"
                @click="cancelDeletingMode"
            >Отмена
            </v-btn>
          </v-snackbar>
          <v-dialog v-model="deletionDialog" max-width="600px">
            <v-card>
              <v-card-text>
                <v-card-title>Вы собираетесь удалить книги</v-card-title>
                <p><span v-for="book in deletingArray">
                  {{ book.name }}, {{ book.author }};
                </span></p>
              </v-card-text>
              <v-btn-group class="align-self-end">
                <v-btn @click="deletionDialog=false">Отмена</v-btn>
                <v-btn @click="confirmDeleting">Подтвердить</v-btn>
              </v-btn-group>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <div class="d-flex flex-row align-start ga-4">
        <v-select
            :items="sorting"
            @update:model-value="setSelectedSort"
            variant="underlined"
            density="comfortable"
            label="Сортировка книг"
        ></v-select>
      </div>
    </div>
    <v-row class="ma-4">
      <v-col v-for="book in sortedBooks" :key="book.uuid" cols="12" sm="6" md="3" lg="2">
        <book-card :book="book">
          <template #delete-checkbox>
            <div class="bg-white px-2 pl-2 pr-1 rounded-bs-lg" v-if="deletingMode">
              <v-checkbox-btn color="error"
                              @change="changeDeletionBooksList(book, $event.target.checked)"></v-checkbox-btn>
            </div>

          </template>
          <template #actions>
            <v-btn icon="fa-solid fa-pen-to-square" color="info" variant="tonal" size="small"></v-btn>
          </template>
        </book-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import BookCard from "@/components/BookCard.vue";
import CreateBookDialog from "@/components/UI/CreateBookDialog.vue";

export default {
  name: 'HomeView',
  data() {
    return {
      deletingMode: false,
      deletionDialog: false,
      deletingArray: [],
    }
  },
  computed: {
    ...mapState({
      covers: state => state.books.covers,
      books: state => state.books.books,
      sorting: state => state.books.sorting,
      selectedSort: state => state.books.selectedSort,
    }),
    ...mapGetters({
      sortedBooks: 'books/sortedBooks',
    })
  },
  methods: {
    ...mapMutations({
      pushBook: 'books/pushBook',
      setBooks: 'books/setBooks',
      setSelectedSort: 'books/setSelectedSort',
    }),
    ...mapActions({
      createRandomBook: 'books/createRandomBook',
    }),
    generateBooks(count) {
      for (let i = 0; i < count; i++) {
        this.createRandomBook();
      }
    },
    toggleDeletingMode() {
      if (this.deletingMode) {
        this.deletionDialog = true;
      } else {
        this.deletingMode = true;
        this.deletingArray = [];
      }
    },
    changeDeletionBooksList(book, isChecked) {
      if (isChecked) {
        this.deletingArray = [...this.deletingArray, book];
      } else {
        this.deletingArray = [...this.deletingArray.filter(item => item !== book)];
      }
    },
    confirmDeleting() {
      this.setBooks([...this.books.filter(item => !this.deletingArray.includes(item))]);
      this.deletingArray = [];
      this.deletionDialog = false;
      this.deletingMode = false;
    },
    cancelDeletingMode() {
      this.deletingMode = false;
    },
  },
  components: {
    BookCard, CreateBookDialog
  },
}
</script>