<script>
import router from "@/router";

export default {
  name: 'my-navigation',
  data() {
    return {
      isSidebarOpen: false,
      routes: [
        {
          title: 'Главная',
          icon: 'fa-solid fa-house',
          route: '/',
        },
        {
          title: 'Корзина',
          icon: 'fa-solid fa-basket-shopping',
          route: '/basket',
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
    goTo(route) {
      this.toggleSidebar();
      this.$router.push(route);
    },
    isRouteActive(route) {
      return this.$route.path === route;
    },
    toggleSidebar(){
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  },
  computed: {

  }
}
</script>

<template>
  <v-app-bar scroll-behavior="elevate" rounded="b-lg">
    <v-app-bar-nav-icon icon="fas fa-bars" @click.stop="toggleSidebar"></v-app-bar-nav-icon>
    <v-app-bar-title>Книжный</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="isSidebarOpen" transition="fade-transition" :location="$vuetify.display.mobile ? 'bottom' : undefined">
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