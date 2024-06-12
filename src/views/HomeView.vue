<template>
  <v-row class="ma-4">
    <v-col v-for="book in books" :key="book.uuid" :cols="columnCount">
      <v-card class="border-thin rounded-lg d-flex flex-column">
        <v-img style="aspect-ratio: 9/16;"
               cover
               class="flex-grow-1"
               :src="book.cover"></v-img>
        <v-card-text class="flex-grow-1 w-100 d-flex flex-column justify-space-between">
          <div>
            <v-card-title class="text-truncate">{{ book.name }}</v-card-title>
            <v-card-subtitle>{{ book.author }}, {{ formatDate(book.yearOfPublication) }}</v-card-subtitle>
            <v-card-text>Жанр: {{ book.genre }}</v-card-text>
          </div>
        </v-card-text>
        <v-card-actions class="flex-row-reverse">
          <v-btn prepend-icon="fa-solid fa-cart-plus" color="cyan-lighten-1"></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {v4 as uuidv4} from "uuid";
import cover1 from '@/assets/bookscovers/random-book-cover-1.webp';
import cover2 from '@/assets/bookscovers/random-book-cover-2.webp';
import cover3 from '@/assets/bookscovers/random-book-cover-3.webp';
import cover4 from '@/assets/bookscovers/random-book-cover-4.webp';

export default {
  name: 'HomeView',
  data() {
    return {
      covers: [cover1, cover2, cover3, cover4],
      books: [
        {
          uuid: undefined,
          name: 'Евгений Онегин',
          author: 'А. С. Пушкин',
          yearOfPublication: '1888-07-20',
          genre: 'Роман',
          dateOfCreation: '2024-06-12',
          price: 1000,
          cover: undefined
        },
        {
          uuid: undefined,
          name: 'Война и Мир',
          author: 'Л. Н. Толстой',
          yearOfPublication: '1888-07-20',
          genre: 'Роман',
          dateOfCreation: '2024-06-12',
          price: 1000,
          cover: undefined
        },
        {
          uuid: undefined,
          name: 'Кирпич и Орёл',
          author: 'ZoomBySNik',
          yearOfPublication: '2024-06-12',
          genre: 'Писанина',
          dateOfCreation: '2024-06-12',
          price: 1000,
          cover: undefined
        },
      ]
    }
  },
  computed: {
    columnCount() {
      return this.$store.state.isSidebarOpen ? 3 : 2; // Количество колонок в зависимости от состояния боковой панели
    }
  },
  methods: {
    formatDate(dateString) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(dateString).toLocaleDateString('ru-RU', options);
    },
    getRandomCover() {
      const randomIndex = Math.floor(Math.random() * this.covers.length);
      return this.covers[randomIndex];
    },
  },
  beforeMount() {
    this.books.forEach(book => {
      book.uuid = uuidv4();
      book.cover = this.getRandomCover();
    });
    this.books = [...this.books]
  },
  components: {},
}
</script>
