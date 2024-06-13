<template>
  <v-app>
    <my-navigation/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
import router from "@/router";
import {mapMutations, mapState} from "vuex";
import MyNavigation from "@/components/UI/MyNavigation.vue";

export default {
  components: {MyNavigation},
  data() {
    return {

    }
  },
  methods: {
    router() {
      return router
    },
    ...mapMutations({
      toggleSidebarOpen: "toggleSidebarOpen",
      setRandomCovers: 'books/setRandomCovers',
      setAuthors: 'books/setAuthors',
      setGenres: 'books/setGenres',
    }),
  },
  mounted() {
    this.setRandomCovers();
    this.setAuthors();
    this.setGenres();
  },
  computed: {
    ...mapState({
      isSidebarOpen: state => state.isSidebarOpen,
    })
  }
}
</script>