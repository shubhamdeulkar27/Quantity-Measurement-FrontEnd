<template>
  <div>
    <Header />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Value</th>
          <th>OperationType</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in Data" :key="data.id">
          <td>{{data.id}}</td>
          <td>{{data.value}}</td>
          <td>{{data.operationType}}</td>
          <td>{{ data.result}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import service from "../services/axios-service.js";
import Header from "./Header.vue";
export default {
  name: "History",
  components: {
    Header,
  },
  data() {
    return {
      Data: [],
    };
  },
  beforeMount() {
    this.getHistory();
  },
  methods: {
    getHistory: function () {
      service.getConversions().then((result) => {
        this.Data = result.data.data;
        console.log(this.Data[0]);
      });
    },
  },
};
</script>

<style lang="scss">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
