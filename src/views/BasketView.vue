<template>
  <h2 class="mb-2">Корзина</h2>
  <p>В вашей корзине <strong>{{ booksInBasket.length }}</strong> {{ bookCountWord }}, на сумму
    <strong>{{ totalPrice }}</strong> {{ totalPriceWord }}</p>
  <div class="card-scroll" v-if="booksInBasket.length > 0">
    <v-row class="ma-lg-4 ma-0">
      <v-col
          v-for="book in booksInBasket"
          :key="book._id"
          cols="6"
          sm="6"
          md="4"
          lg="3"
          class="pa-1 pa-lg-3"
      >
        <book-card :book="book">
          <template #actions>
            <v-btn
                prepend-icon="fa-solid fa-trash"
                variant="tonal"
                rounded="xl"
                v-if="booksInBasket.find(({_id}) => _id === book._id)"
                @click="removeBookFromBasket(book)"
            >
              Убрать
            </v-btn>
            <v-btn icon="fa-solid fa-plus" @click="increaseBookCountInBasket(book)"/>
            <strong>{{ book.countInBasket }}</strong>
            <v-btn icon="fa-solid fa-minus" @click="decreaseBookCountInBasket(book)"/>
          </template>
        </book-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
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
      booksInBasket: state => state.basket.booksInBasket,
      totalPrice: state => state.basket.totalPrice,
    }),
    bookCountWord() {
      let n = Math.abs(this.booksInBasket.length);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return 'позиций';
      }
      n %= 10;
      if (n === 1) {
        return 'позиция';
      }
      if (n >= 2 && n <= 4) {
        return 'позиции';
      }
    },
    totalPriceWord() {
      let n = Math.abs(this.totalPrice);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return 'рублей';
      }
      n %= 10;
      if (n === 1) {
        return 'рубль';
      }
      if (n >= 2 && n <= 4) {
        return 'рубля';
      }
    },
  },
  methods: {
    ...mapActions({
      removeBookFromBasket: 'basket/removeBookFromBasket',
      increaseBookCountInBasket: 'basket/increaseBookCountInBasket',
      decreaseBookCountInBasket: 'basket/decreaseBookCountInBasket',
    })
  },
  components: {BookCard},
}
</script>
