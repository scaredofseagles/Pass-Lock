import axios from 'axios'

const API = {
    getAll: function(){
        return axios.get("/api/users")
    },
    sendData: function(website, user_name, hashed_password){
        return axios.post("/api/users", {website: website, username: user_name, password: hashed_password})
    },
    updateData: function(){},
    deleteData: function(user_id){
        return axios.delete("api/users" + user_id)
    }
}

module.exports = API