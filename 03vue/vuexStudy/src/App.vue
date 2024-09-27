<template>
  <div>
    <NavbarView />
    <MainView />
    {{ $store.state.name }}
    {{ $store.state.counter }}
  </div>
</template>

<script setup>
import NavbarView from "./components/NavbarView.vue";
import MainView from "./components/MainView.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getWeather");
});

// action
</script>

<style lang="scss" scoped></style>
