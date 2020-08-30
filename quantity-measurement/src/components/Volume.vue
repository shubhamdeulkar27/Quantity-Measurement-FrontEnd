<template>
  <div
    class="md-card"
    @click="volumeClickedEvent"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{ hovered: volumeClicked?true:hovered }"
  >
    <md-card-content>
      <md-card-media>
        <img
          src="../assets/beaker-black.png"
          alt="Volume"
          class="img"
          v-if="volumeClicked?false:!hovered"
        />
        <img src="../assets/beaker.png" alt="Volume" class="img" v-if="volumeClicked?true:hovered" />
      </md-card-media>
      <div class="img-text">Volume</div>
    </md-card-content>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  name: "Volume",
  mounted() {
    EventBus.$on("lengthClicked", () => {
      this.volumeClicked = false;
    });
    EventBus.$on("temperatureClicked", () => {
      this.volumeClicked = false;
    });
  },
  data() {
    return {
      volumeClicked: false,
      hovered: false,
    };
  },
  methods: {
    volumeClickedEvent() {
      this.volumeClicked = true;
      EventBus.$emit("volumeClicked", this.volumeClicked);
    },
  },
};
</script>

<style lang="scss" scoped>
$volume-color: #7224ff;

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
  margin-top: 20px;
}
.img-text {
  font-size: 15px;
  line-height: 19px;

  margin-top: 10px;
}
.hovered {
  border: $volume-color solid 1px;
  color: $volume-color;
  background-color: #e8ddff;
}
</style>
