<template>
  <h2 class="mb-2">Корзина</h2>

</template>

<script>

import {mapGetters, mapMutations, mapState} from "vuex";
import BookCard from "@/components/BookCard.vue";

export default {
  name: 'BasketView',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      covers: state => state.books.covers,
      books: state => state.books.books,
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
