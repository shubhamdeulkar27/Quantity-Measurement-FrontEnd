<template>
  <div id="home">
    <div id="home-text">
      <b>{{ homeText }}</b>
    </div>
    <div id="home-container">
      <div id="home-container-item-1"><Length /><Temperature /></div>
      <div id="home-container-item-2"></div>
    </div>
  </div>
</template>
<script>
import Length from "./Length.vue";
import Temperature from "./Temperature.vue";
export default {
  name: "Home",
  data() {
    return {
      homeText: "CHOOSE TYPE"
    };
  },
  components: {
    Length,
    Temperature
  }
};
</script>
<style lang="scss">
#home {
  width: 100%;
  height: auto;
}
#home-text {
  margin-top: 50px;
  margin-left: 28vw;
  text-align: left;
  font-size: 15px;
  line-height: 19px;
}
#home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#home-container-item-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
