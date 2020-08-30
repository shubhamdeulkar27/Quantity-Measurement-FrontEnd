<template>
  <div
    class="md-card"
    @click="clicked = true"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{ hovered: clicked?true:hovered }"
  >
    <md-card-content>
      <md-card-media>
        <img
          src="../assets/hot-black.png"
          alt="Temperature"
          class="img"
          v-if="clicked?false:!hovered"
        />
        <img src="../assets/hot.png" alt="Temperature" class="img" v-if="clicked?true:hovered" />
      </md-card-media>
      <div class="img-text">Temperature</div>
    </md-card-content>
  </div>
</template>

<script>
export default {
  name: "Temperature",
  data() {
    return {
      clicked: false,
      hovered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$temperature-color: #fd5160;
.md-card {
  width: 173px;
  height: 137px;
  margin: 4px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  box-shadow: none;
  border-radius: 7px;
  border: solid 1px white;
  background-color: white;
  color: #c9c9c9;
}
.img {
  height: auto;
  width: auto;
}
.md-card-content {
  margin-top: 15px;
}
.img-text {
  font-size: 15px;
  line-height: 19px;

  margin-top: 5px;
}
.hovered {
  border: $temperature-color solid 1px;
  color: $temperature-color;
  background-color: #ffeef0;
}
</style>
