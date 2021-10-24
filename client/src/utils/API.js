import axios from "axios";

let API = {
  authorize: data => {
    return axios.post("/api/users/authorize", data);
  },
  getUser: email => {
    return axios.get("/api/users/" + email);
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

  getSession: id => {
    return axios.get("/api/sessions/" + id);
  },
  getCurrentSession: () => {
    return axios.get("/api/sessions");
  },
  addSession: data => {
    return axios.post("/api/sessions", data);
  },
  editSession: id => {
    return axios.patch("/api/sessions/" + id);
  },
  removeSession: id => {
    return axios.delete("/api/sessions/" + id);
  }
};

export default API;
