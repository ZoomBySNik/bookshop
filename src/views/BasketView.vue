<template>
  <h2 class="mb-2">Корзина</h2>
  <p>В вашей корзине
    <my-number-and-word
        :number="booksInBasket.length"
        :word-one="'товар'"
        :word-few="'товара'"
        :word-many="'товаров'"/>, на сумму
    <my-number-and-word
        :number="totalPrice"
        :word-one="'рубль'"
        :word-few="'рубля'"
        :word-many="'рублей'"/>
  </p>
  <v-row class="ma-4">
    <v-col v-for="book in booksInBasket" :key="book._id" cols="12" sm="12" md="6" lg="3">
      <book-card :book="book">
        <template #actions>
          <v-btn prepend-icon="fa-solid fa-trash" variant="tonal" rounded="xl" v-if="booksInBasket.includes(book)"
                 @click="removeBookFromBasket(book)">Убрать
          </v-btn>
        </template>
      </book-card>
    </v-col>
  </v-row>
</template>

<script>

import {mapActions, mapState} from "vuex";
import BookCard from "@/components/BookCard.vue";
import MyNumberAndWord from "@/components/UI/MyNumberAndWord.vue";

export default {
  name: 'BasketView',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      covers: state => state.books.covers,
      books: state => state.books.books,
      booksInBasket: state => state.basket.booksInBasket,
      totalPrice: state => state.basket.totalPrice,
    }),
  },
  methods: {
    ...mapActions({
      removeBookFromBasket: 'basket/removeBookFromBasket',
    })
  },
  components: {MyNumberAndWord, BookCard},
}
</script>
