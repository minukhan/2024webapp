<template>
<<<<<<< HEAD
  <SearchbarView />
  <WeatherView />
</template>

<script setup>
import SearchbarView from "./SearchbarView.vue";
import WeatherView from "./WeatherView.vue";
</script>
=======
  <div class="weather-info">
    <div class="icon">
      <img
        :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@4x.png`"
        alt=""
      />
    </div>
    <div class="temp">
      {{ ($store.state.weatherData.temp - 273.15).toFixed(2) }}&deg
    </div>
    <div class="text">{{ $store.state.weatherData.text }}</div>
    <div class="location">
      {{ $store.state.weatherData.location }} /
      {{ $store.state.weatherData.city }}
    </div>
  </div>
</template>

<script setup></script>
>>>>>>> 89398f0dd17a79760ef3715fd97c1e1a7382bb92

<style lang="scss" scoped></style>
