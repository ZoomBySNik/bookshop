<template>
  <v-app
      class="bg-cyan-lighten-5"
  >
    <my-navigation/>
    <v-main>
      <v-container>
        <v-card
            :loading="isLoading"
            class="py-lg-4 py-1 px-lg-8 px-2"
            rounded="lg"
        >
          <router-view/>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@media (max-width: 600px) {
  * {
    font-size: 12px!important;
  }
  h1, h2, i {
    font-size: 16px!important;
  }
  h3, h4{
    font-size: 14px!important;
  }
}
</style>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import MyNavigation from "@/components/UI/MyNavigation.vue";

export default {
  components: { MyNavigation },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchBooks: 'books/fetchBooks',
    }),
    ...mapMutations({
      toggleLoading: 'toggleLoading',
      setAuthors: 'books/setAuthors',
      setGenres: 'books/setGenres',
    }),
  },
  async mounted() {
    try {
      await this.fetchBooks();
      this.setAuthors();
      this.setGenres();
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    this.toggleLoading();
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    }),
  },
};
</script>