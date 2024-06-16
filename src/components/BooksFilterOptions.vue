<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: 'BooksFilterOptions',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      sorting: state => state.books.sorting,
      selectedSort: state => state.books.selectedSort,
      searchRequest: state => state.books.searchRequest,
      selectedAuthor: state => state.books.selectedAuthor,
      authors: state => state.books.authors,
      selectedGenre: state => state.books.selectedGenre,
      genres: state => state.books.genres,
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedSort: 'books/setSelectedSort',
      setSelectedAuthor: 'books/setSelectedAuthor',
      setSelectedGenre: 'books/setSelectedGenre',
      updateSearchRequest: 'books/updateSearchRequest'
    }),
  },
}
</script>

<template>
  <div class="d-flex flex-row align-start ga-4">
    <v-select
        :items="sorting"
        @update:model-value="setSelectedSort"
        :model-value="selectedSort"
        variant="underlined"
        density="comfortable"
        label="Сортировка книг"
    ></v-select>
    <v-text-field
        :model-value="searchRequest"
        @update:modelValue="updateSearchRequest"
        label="Введите название книги"
        density="comfortable"
        clearable
        clear-icon="fa-solid fa-xmark"
    ></v-text-field>
    <v-select
        :items="genres"
        @update:model-value="setSelectedGenre"
        :model-value="selectedGenre"
        variant="underlined"
        density="comfortable"
        label="Фильтр по жанру"
        clearable
        clear-icon="fa-solid fa-xmark"
    ></v-select>
    <v-select
        :items="authors"
        @update:model-value="setSelectedAuthor"
        :model-value="selectedAuthor"
        variant="underlined"
        density="comfortable"
        label="Фильтр по автору"
        clearable
        clear-icon="fa-solid fa-xmark"
    ></v-select>
  </div>
</template>

<style>

</style>