<template>
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
              <p>Год публикации: {{ book.yearOfPublication }}</p>
              <p>Дата добавления: {{ formatDate(book.dateOfCreation) }}</p>
            </v-card-text>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <v-card-title class="text-red font-weight-bold">{{ book.price }} р.</v-card-title>
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
          yearOfPublication: '1888',
          genre: 'Роман',
          dateOfCreation: '2024-06-13',
          price: 1000,
          cover: undefined
        },
        {
          uuid: undefined,
          name: 'Война и Мир',
          author: 'Л. Н. Толстой',
          yearOfPublication: '1888',
          genre: 'Роман',
          dateOfCreation: '2024-06-09',
          price: 1000,
          cover: undefined
        },
        {
          uuid: undefined,
          name: 'Кирпич и Орёл',
          author: 'ZoomBySNik',
          yearOfPublication: '2024',
          genre: 'Писанина',
          dateOfCreation: '2024-06-15',
          price: 1000,
          cover: undefined
        },
      ]
    }
  },
  computed: {
    sortedBooks() {
      let sortedBooks = [...this.books];
      sortedBooks = sortedBooks.sort((a, b) => {
        let dateA = new Date(a.dateOfCreation);
        let dateB = new Date(b.dateOfCreation);
        if (dateA < dateB) {
          return 1
        } else if (dateA > dateB) {
          return -1
        } else {
          return 0
        }
      });
      return sortedBooks
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
