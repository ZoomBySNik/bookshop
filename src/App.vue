<template>
  <v-app>
    <v-app-bar scroll-behavior="collapse" rounded="b-lg">
      <v-app-bar-nav-icon icon="fas fa-bars" @click.stop="toggleSidebarOpen"></v-app-bar-nav-icon>
      <v-app-bar-title @click="$router.push('/')">Книжный</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-if="isSidebarOpen" transition="fade-transition">
      <v-list-item title="Главная" prepend-icon="fa-solid fa-house" @click="goTo('/')"></v-list-item>
      <v-list-item link title="Корзина" prepend-icon="fa-solid fa-basket-shopping" @click="goTo('/')"></v-list-item>
      <v-list-item link title="Администрирование" prepend-icon="fa-solid fa-screwdriver-wrench" @click="goTo('/')"></v-list-item>
    </v-navigation-drawer>
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

export default {
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
    }),
    goTo(route){
      this.toggleSidebarOpen();
      this.$router.push(route);
    },
  },
  computed: {
    ...mapState({
      isSidebarOpen: state => state.isSidebarOpen,
    })
  }
}
</script>