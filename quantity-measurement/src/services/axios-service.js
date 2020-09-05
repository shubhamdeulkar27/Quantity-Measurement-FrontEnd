import axios from "axios";

export default {
  convert(quantity) {
    return axios.post("", quantity);
  },

  getConversions() {
    return axios.get("");
  }
};
