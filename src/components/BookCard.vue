<template>
  <v-card class="border-thin rounded-lg d-flex flex-column h-100 book-card">
    <v-img style="aspect-ratio: 3/4;" class="book-card__image" :src="book.cover">
      <div class="d-flex flex-row-reverse">
        <slot name="delete-checkbox"></slot>
      </div>
    </v-img>
    <v-card-text class="d-flex flex-column justify-space-between pa-0 book-card__content">
      <div class="mt-0">
        <v-card-title class="text-truncate" v-tooltip:="book.name">{{ book.name }}</v-card-title>
        <v-card-subtitle class="text-truncate" v-tooltip:="book.author">{{ book.author }}</v-card-subtitle>
        <v-card-text>
          <p class="text-truncate" v-tooltip:="book.genre">Жанр: {{ book.genre }}</p>
          <p>Дата публикации: {{ formatDate(book.dateOfPublication) }}</p>
        </v-card-text>
      </div>
      <v-card-title class="text-red font-weight-bold pl-4 pa-0">{{ book.price }} р.</v-card-title>
    </v-card-text>
    <v-card-actions class="d-flex flex-row-reverse justify-space-between pa-2 align-self-end mt-auto">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    book: Object // Принимает объект книги в качестве свойства
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('ru-RU', options);
    }
  }
};
</script>

<style scoped>
.book-card__image {
  height: 60% !important;
}
.book-card__content {
  height: 30% !important;
}
@media (max-width: 800px) {
  .book-card__image {
    height: 45% !important;
  }
  .book-card__content {
    height: 45% !important;
  }
}
@media (max-width: 1200px) {
  .book-card__image {
    height: 50% !important;
  }
  .book-card__content {
    height: 40% !important;
  }
}
@media (max-width: 1400px) {
  .book-card__image {
    height: 55% !important;
  }
  .book-card__content {
    height: 30% !important;
  }
}
@media  (max-width: 1600px){
  .book-card__image {
    height: 40% !important;
  }
  .book-card__content {
    height: 35% !important;
  }
}
</style>
