<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header,
    Home
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f6fa;
  height: 97.5vh;
}
</style>
