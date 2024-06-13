<template>
  <v-container>
    <div class="d-flex flex-column ga-8">
      <div class="d-flex flex-row align-start ga-4">
        <v-btn prepend-icon="fa-solid fa-wand-magic-sparkles" variant="elevated" @click="generateBooks(5)">Создать 5 случайных книг</v-btn>
        <v-btn prepend-icon="fa-solid fa-plus" variant="elevated">Создать книгу</v-btn>
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
            <template #actions>
              <v-btn icon="fa-solid fa-pen-to-square" color="blue-darken-1" variant="elevated"></v-btn>
              <v-btn icon="fa-solid fa-trash" color="red-accent-4" variant="elevated"></v-btn>
            </template>
          </book-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import BookCard from "@/components/BookCard.vue";

export default {
  name: 'HomeView',
  data() {
    return {}
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
    }
  },
  components: {BookCard},
}
</script>