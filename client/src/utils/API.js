import axios from "axios";

let API = {
  getUser: email => {
    return axios.get("/api/users/" + email);
  },
  authorize: data => {
    return axios.post("/api/users/authorize", data);
  },
  addUser: data => {
    return axios.post("/api/users", data);
  },

  sendAcct: data => {
    return axios.post("/api/accounts", data);
  },
  getAccts: id => {
    return axios.get("api/accounts/" + id);
  },
  editAcct: (id, data) => {
    return axios.put("/api/accounts/" + id, data);
  },
  removeAcct: id => {
    return axios.delete("api/accounts/" + id);
  },
  updateData: function() {},
  deleteData: function(user_id) {
    return axios.delete("api/users" + user_id);
  }
};

export default API;
