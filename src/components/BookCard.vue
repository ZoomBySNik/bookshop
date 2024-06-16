<template>
  <v-card class="border-thin rounded-lg d-flex flex-column h-100">
    <v-img style="aspect-ratio: 3/4;" cover class="h-68" :src="book.cover">
      <div class="d-flex flex-row-reverse">
        <slot name="delete-checkbox"></slot>
      </div>
    </v-img>
    <v-card-text class="h-20 d-flex flex-column justify-space-between pa-0">
      <div>
        <v-card-title class="text-truncate" v-tooltip:="book.name">{{ book.name }}</v-card-title>
        <v-card-subtitle class="text-truncate" v-tooltip:="book.author">{{ book.author }}</v-card-subtitle>
        <v-card-text>
          <p class="text-truncate" v-tooltip:="book.genre">Жанр: {{ book.genre }}</p>
          <p>Дата публикации: {{ formatDate(book.dateOfPublication) }}</p>
        </v-card-text>
      </div>
    </v-card-text>
    <v-card-title class="text-red font-weight-bold">{{ book.price }} р.</v-card-title>
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
.h-68 {
  height: 50% !important;
}
.h-20 {
  height: 30% !important;
}
@media (max-width: 800px) {
  .h-68 {
    height: 36% !important;
  }
  .h-20 {
    height: 48% !important;
  }
}
@media (max-width: 1200px) {
  .h-68 {
    height: 42% !important;
  }
  .h-20 {
    height: 43% !important;
  }
}
@media  (max-width: 1600px){
  .h-68 {
    height: 45% !important;
  }
  .h-20 {
    height: 40% !important;
  }
}
</style>
