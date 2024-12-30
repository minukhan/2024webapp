<template>
  <div>
    <NavbarView />
    <MainView />
<<<<<<< HEAD
=======
    {{ $store.state.name }}
>>>>>>> 89398f0dd17a79760ef3715fd97c1e1a7382bb92
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import MainView from "./components/MainView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
<<<<<<< HEAD
=======
  // getWeather();
>>>>>>> 89398f0dd17a79760ef3715fd97c1e1a7382bb92
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
