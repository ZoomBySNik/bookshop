<template>
  <v-container>
    <div class="d-flex flex-row align-start ga-4">
      <v-select
          :items="sorting"
          @update:model-value="setSelectedSort"
          variant="underlined"
          density="comfortable"
          label="Сортировка книг"
      ></v-select>
    </div>
    <v-row class="ma-4">
      <v-col v-for="book in sortedBooks" :key="book.uuid" cols="12" sm="6" md="3" lg="2">
        <book-card :book="book">
          <template #actions>
            <v-btn icon="fa-solid fa-cart-plus" color="info" variant="tonal" size="small"></v-btn>
          </template>
        </book-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapGetters, mapMutations, mapState} from "vuex";
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
  },
  components: {BookCard},
}
</script>
