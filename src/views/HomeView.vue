<template>
  <v-container>
    <v-row class="ma-4">
      <v-col v-for="book in sortedBooks" :key="book.uuid" cols="12" sm="6" md="3" lg="2">
        <v-card class="border-thin rounded-lg d-flex flex-column">
          <v-img style="aspect-ratio: 3/4;"
                 cover
                 class="flex-grow-1"
                 :src="book.cover">
          </v-img>
          <v-card-text class="flex-grow-1 w-100 d-flex flex-column justify-space-between pa-0">
            <div>
              <v-card-title class="text-truncate">{{ book.name }}</v-card-title>
              <v-card-subtitle>{{ book.author }}</v-card-subtitle>
              <v-card-text>
                <p>Жанр: {{ book.genre }}</p>
                <p>Дата публикации: {{ formatDate(book.dateOfPublication) }}</p>
              </v-card-text>
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-card-title class="text-red font-weight-bold">{{ book.price }} р.</v-card-title>
            <v-btn icon="fa-solid fa-cart-plus" color="cyan-lighten-1" variant="tonal"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'HomeView',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      covers: state => state.books.covers,
      books: state => state.books.books
    }),
    ...mapGetters({
      sortedBooks: 'books/sortedBooks',
    })
  },
  methods: {
    ...mapMutations({
      pushBook: 'books/pushBook',
      setBooks: 'books/setBooks',
    }),
    formatDate(dateString) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(dateString).toLocaleDateString('ru-RU', options);
    },
  },
  components: {},
}
</script>
