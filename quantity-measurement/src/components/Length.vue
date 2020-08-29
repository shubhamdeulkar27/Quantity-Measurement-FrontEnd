<template>
  <div
    class="md-card"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{ hovered: hovered }"
  >
    <md-card-content>
      <md-card-media>
        <img
          src="../assets/scale-black.png"
          alt="Length"
          class="img"
          v-if="!hovered"
        />
        <img
          src="../assets/scale.png"
          alt="Length"
          class="img"
          v-if="hovered"
        />
      </md-card-media>
      <div class="img-text">Length</div>
    </md-card-content>
  </div>
</template>

<script>
export default {
  name: "Length",
  data() {
    return {
      hovered: false
    };
  }
};
</script>

<style lang="scss" scoped>
$length-color: #0ec098;

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
  border: $length-color solid 1px;
  color: $length-color;
  background-color: #edfdf9;
}
</style>
