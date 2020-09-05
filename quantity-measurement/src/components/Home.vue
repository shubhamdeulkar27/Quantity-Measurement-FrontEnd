<template>
  <div id="home">
    <Header />
    <div id="home-text">
      <b>{{ homeText }}</b>
    </div>
    <div id="home-container">
      <div id="home-container-item-1">
        <Length />
        <Temperature />
        <Volume />
      </div>
      <div id="home-container-item-2">
        <FromTo />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Length from "./Length.vue";
import Temperature from "./Temperature.vue";
import Volume from "./Volume.vue";
import FromTo from "./From-To.vue";
export default {
  name: "Home",
  data() {
    return {
      homeText: "CHOOSE TYPE",
    };
  },
  components: {
    Header,
    Length,
    Temperature,
    Volume,
    FromTo,
  },
};
</script>
<style lang="scss">
#home {
  width: 100%;
  height: auto;
}
#home-text {
  margin-top: 8vh;
  margin-left: 28vw;
  text-align: left;
  font-size: 15px;
  line-height: 19px;
}
#home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1vh;
}
#home-container-item-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 43vw;
  position: relative;
  left: 27.5vw;
}
#home-container-item-2 {
  width: 42vw;
  position: relative;
  left: 28vw;
  margin-top: 05vh;
}
</style>
