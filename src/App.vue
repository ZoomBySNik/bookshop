<template>
  <v-app class="bg-cyan-lighten-5">
    <my-navigation />
    <v-main>
      <v-container>
        <v-card :loading="isLoading" class="py-4 px-8" rounded="lg">
          <router-view />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
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
      toggleSidebarOpen: "toggleSidebarOpen",
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
      isSidebarOpen: state => state.isSidebarOpen,
      isLoading: state => state.isLoading
    }),
  },
};
</script>