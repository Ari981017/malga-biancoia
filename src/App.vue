<template>
  <div id="app">
    <nav>
      <router-link to="/">Info sull'Agriturismo</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/itinerario">Itinerario</router-link>
      <router-link to="/gallery">Galleria</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
}
</style>
