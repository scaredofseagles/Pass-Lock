import axios from 'axios'

let API = {
    getAll: function(){
        return axios.get("/api/users")
    },
    sendAcct: data =>{
        return axios.post("/api/accounts", data)
    },
    getAccts: id =>{
        return axios.get("api/accounts/" + id)
    },
    updateData: function(){},
    deleteData: function(user_id){
        return axios.delete("api/users" + user_id)
    }
};

export default API;