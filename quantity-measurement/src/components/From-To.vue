<template>
  <div id="from-to">
    <div class="from-to-content">
      <div class="from-to-text">FROM</div>
      <input type="number" class="from-to-input" v-model="fromValue" @keyup="fromValueChanged" />
      <select class="select-unit" v-model="fromSelected" @change="fromValueChanged">
        <option v-bind:key="unit.id" v-for="unit in fromOption" :value="unit.text">{{ unit.text }}</option>
      </select>
    </div>
    <div class="from-to-content">
      <div class="from-to-text">TO</div>
      <input type="number" class="from-to-input" v-model="toValue" />
      <select class="select-unit" v-model="toSelected" @change="fromValueChanged">
        <option v-bind:key="unit.id" v-for="unit in toOption" :value="unit.text">{{ unit.text }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
import service from "../services/axios-service.js";
export default {
  name: "FromTo",
  mounted() {
    EventBus.$on("lengthClicked", () => {
      this.fromOption = [
        { id: 1, value: 1, text: "Inch" },
        { id: 2, value: 2, text: "Feet" },
        { id: 3, value: 3, text: "Yard" },
      ];
      this.toOption = [
        { id: 1, value: 1, text: "Inch" },
        { id: 2, value: 2, text: "Feet" },
        { id: 3, value: 3, text: "Yard" },
      ];
      this.fromSelected = "Feet";
      this.toSelected = "Inch";
      this.fromValue = 1;
      this.fromValueChanged();
    });
    EventBus.$on("temperatureClicked", () => {
      this.fromOption = [
        { id: 1, value: 1, text: "Celsius" },
        { id: 2, value: 2, text: "Fahrenheit" },
      ];
      this.toOption = [
        { id: 1, value: 1, text: "Celsius" },
        { id: 2, value: 2, text: "Fahrenheit" },
      ];
      this.fromSelected = "Celsius";
      this.toSelected = "Fahrenheit";
      this.fromValue = 1;
      this.fromValueChanged();
    });
    EventBus.$on("volumeClicked", () => {
      this.fromOption = [
        { id: 1, value: 1, text: "Litre" },
        { id: 2, value: 2, text: "Millilitre" },
      ];
      this.toOption = [
        { id: 1, value: 1, text: "Litre" },
        { id: 2, value: 2, text: "Millilitre" },
      ];
      this.fromSelected = "Litre";
      this.toSelected = "Millilitre";
      this.fromValue = 1;
      this.fromValueChanged();
    });
  },
  data() {
    return {
      fromValue: 1,
      fromOption: [
        { value: 1, text: "Feet" },
        { value: 2, text: "Inch" },
        { value: 3, text: "Yard" },
      ],
      fromSelected: "Feet",

      toValue: 12,
      toOption: [
        { value: 1, text: "Feet" },
        { value: 2, text: "Inch" },
        { value: 3, text: "Yard" },
      ],
      toSelected: "Inch",
    };
  },
  methods: {
    fromValueChanged: function () {
      let quantity = {
        value: this.fromValue,
        operationType: this.fromSelected + "To" + this.toSelected,
      };
      service.convert(quantity).then((result) => {
        this.toValue = result.data.data.result;
      });
    },
  },
};
</script>

<style lang="scss">
#from-to {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.from-to-content {
  display: flex;
  flex-direction: column;
}
.from-to-text {
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
}
.from-to-input {
  width: 20vw;
  font-size: 25px;
  line-height: 40px;
  text-align: left;
  border: none;
  outline: none;
  padding: 1vh;
  padding-left: 1vw;
  border: solid 1px rgba($color: #000000, $alpha: 0.2);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.select-unit {
  width: 20vw;
  height: 7vh;
  font-size: 12px;
  line-height: 15px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  padding-left: 1vw;
  border: solid 1px rgba($color: #000000, $alpha: 0.2);
  border-top: none;
}
</style>
