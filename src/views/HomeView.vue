<template>
  <h2 class="mb-2">Главная</h2>
  <div v-if="sortedBooks.length > 0">
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
      <v-col v-for="book in sortedBooks" :key="book._id" cols="12" sm="12" md="6" lg="3">
        <book-card :book="book">
          <template #actions>
            <v-btn prepend-icon="fa-solid fa-trash" variant="tonal" rounded="xl" v-if="booksInBasket.includes(book)"
                   @click="removeBookFromBasket(book)">Убрать
            </v-btn>
            <v-btn prepend-icon="fa-solid fa-cart-plus" variant="tonal" rounded="xl" v-else @click="appendBookToBasket(book)">В
              корзину
            </v-btn>
          </template>
        </book-card>
      </v-col>
    </v-row>
  </div>
  <div v-else-if="isLoading"></div>
  <div class="pa-8" v-else>
    <v-card>
      <v-card-title>Книг пока нет, но они обязательно появятся)</v-card-title>
    </v-card>
  </div>
</template>

<script>

import {mapGetters, mapMutations, mapState, mapActions} from "vuex";
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
      booksInBasket: state => state.basket.booksInBasket,
      isLoading: state => state.isLoading,
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
      appendBookToBasket: 'basket/appendBookToBasket',
      removeBookFromBasket: 'basket/removeBookFromBasket',
    })
  },
  components: {BookCard},
}
</script>
