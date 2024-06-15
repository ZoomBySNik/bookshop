<script>
export default {
  name: 'my-number-and-word',
  props: {
    number: {
      type: Number,
      required: true
    },
    wordOne: {
      type: String,
      required: true
    },
    wordFew: {
      type: String,
      required: true
    },
    wordMany: {
      type: String,
      required: true
    }
  },

  data() {
    return {
    }
  },
  methods: {
    getWordEnding(number, one, few, many) {
      let n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return many;
      }
      n %= 10;
      if (n === 1) {
        return one;
      }
      if (n >= 2 && n <= 4) {
        return few;
      }
      return many;
    }
  },

}
</script>

<template>
  <strong>{{number}}</strong> {{ getWordEnding(number, wordOne, wordFew, wordMany) }}
</template>