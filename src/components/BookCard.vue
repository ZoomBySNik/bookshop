<template>
  <v-card class="border-thin rounded-lg d-flex flex-column h-100">
    <v-img style="aspect-ratio: 3/4;" cover class="h-58" :src="book.cover"></v-img>
    <v-card-text class="h-30 d-flex flex-column justify-space-between pa-0">
      <div>
        <v-card-title class="text-truncate" v-tooltip:="book.name">{{ book.name }}</v-card-title>
        <v-card-subtitle>{{ book.author }}</v-card-subtitle>
        <v-card-text>
          <p>Жанр: {{ book.genre }}</p>
          <p>Дата публикации: {{ formatDate(book.dateOfPublication) }}</p>
        </v-card-text>
      </div>
    </v-card-text>
    <v-card-actions class="d-flex justify-space-between h-12">
      <v-card-title class="text-red font-weight-bold">{{ book.price }} р.</v-card-title>
      <div>
        <slot name="actions"></slot>
      </div>
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
.h-58 {
  height: 58% !important;
}
.h-30 {
  height: 30% !important;
}
.h-12 {
  height: 12% !important;
}
</style>
