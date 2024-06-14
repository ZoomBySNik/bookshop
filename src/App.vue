<template>
  <v-app>
    <my-navigation />
    <v-main>
      <router-view />
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
  },
  computed: {
    ...mapState({
      isSidebarOpen: state => state.isSidebarOpen,
    }),
  },
};
</script>