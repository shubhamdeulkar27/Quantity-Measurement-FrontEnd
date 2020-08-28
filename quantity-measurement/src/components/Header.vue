<template>
  <div id="header">
    <div id="header-top">
      <div id="quanment">Quanment</div>
      <div id="history">History</div>
    </div>
    <div id="header-bottom">{{ headerText }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerText: "Welcome To Quantity Measurement"
    };
  }
};
</script>

<style lang="scss">
#header {
  font-family: "Poppins", sans-serif;
}
#header-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  font-size: 21px;
}
#quanment {
  padding-left: 212px;
  padding-top: 16px;
  line-height: 31px;
}
#history {
  padding-right: 212px;
  padding-top: 26px;
  font-size: 12px;
  line-height: 18px;
  padding-bottom: 24px;
}
#header-bottom {
  color: white;
  background-color: #446dff;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  line-height: 30px;
  padding-top: 23px;
  padding-bottom: 22px;
}
</style>
