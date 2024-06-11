<template>
  <v-app>
    <v-app-bar scroll-behavior="collapse" rounded="b-lg">
      <v-app-bar-nav-icon icon="fas fa-bars" @click.stop="changeNavigationVisible"></v-app-bar-nav-icon>
      <v-app-bar-title @click="$router.push('/')">Книжный</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-if="drawer" transition="fade-transition">
      <v-list-item title="Главная" prepend-icon="fa-solid fa-house" @click="$router.push('/')"></v-list-item>
      <v-list-item link title="Корзина" prepend-icon="fa-solid fa-basket-shopping" @click="$router.push('/')"></v-list-item>
      <v-list-item link title="Администрирование" prepend-icon="fa-solid fa-screwdriver-wrench" @click="$router.push('/')"></v-list-item>
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

export default {
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    router() {
      return router
    },
    changeNavigationVisible() {
      this.drawer = !this.drawer;
    }
  }
}
</script>