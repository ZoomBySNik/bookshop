<script>
import router from "@/router";
import {mapMutations, mapState} from "vuex";

export default {
  name: 'my-navigation',
  data() {
    return {
      routes: [
        {
          title: 'Главная',
          icon: 'fa-solid fa-house',
          route: '/',
        },
        {
          title: 'Корзина',
          icon: 'fa-solid fa-basket-shopping',
          route: '/',
        },
        {
          title: 'Администрирование',
          icon: 'fa-solid fa-screwdriver-wrench',
          route: '/admin',
        },
      ]
    }
  },
  methods: {
    router() {
      return router
    },
    ...mapMutations({
      toggleSidebarOpen: "toggleSidebarOpen",
    }),
    goTo(route) {
      this.toggleSidebarOpen();
      this.$router.push(route);
    },
    isRouteActive(route) {
      return this.$route.path === route;
    },
  },
  computed: {
    ...mapState({
      isSidebarOpen: state => state.isSidebarOpen,
    })
  }
}
</script>

<template>
  <v-app-bar scroll-behavior="collapse" rounded="b-lg">
    <v-app-bar-nav-icon icon="fas fa-bars" @click.stop="toggleSidebarOpen"></v-app-bar-nav-icon>
    <v-app-bar-title>Книжный</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-if="isSidebarOpen" transition="fade-transition">
    <v-list>
      <v-list-item
          v-for="route in this.routes"
          :title='route.title'
          :prepend-icon='route.icon'
          @click="goTo(route.route)"
          :disabled="isRouteActive(route.route)"
          link
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>