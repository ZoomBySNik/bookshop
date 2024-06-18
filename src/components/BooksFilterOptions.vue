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
  <div class="d-flex flex-row align-start ga-2 ga-lg-4 flex-wrap flex-1-0-0">
    <v-select
        :items="sorting"
        @update:model-value="setSelectedSort"
        :model-value="selectedSort"
        variant="underlined"
        density="comfortable"
        class="pa-0 ma-0"
    />
    <v-text-field
        :model-value="searchRequest"
        @update:modelValue="updateSearchRequest"
        label="Введите название книги"
        density="compact"
        clearable
        clear-icon="fa-solid fa-xmark"
        min-width="200"
        class="pa-0 ma-0"
    />
    <v-select
        :items="genres"
        @update:model-value="setSelectedGenre"
        :model-value="selectedGenre"
        variant="underlined"
        density="comfortable"
        label="Фильтр по жанру"
        clearable
        clear-icon="fa-solid fa-xmark"
        min-width="200"
        class="pa-0 ma-0"
    />
    <v-select
        :items="authors"
        @update:model-value="setSelectedAuthor"
        :model-value="selectedAuthor"
        variant="underlined"
        density="comfortable"
        label="Фильтр по автору"
        clearable
        clear-icon="fa-solid fa-xmark"
        min-width="200"
        class="pa-0 ma-0"
    />
  </div>
</template>

<style>

</style>