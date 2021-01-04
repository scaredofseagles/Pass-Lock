import axios from 'axios'

export default {
    getAll: function(){
        return axios.get("/api/users")
    },
    sendData: function(hashed_password, website, user_name){
        return axios.post("/api/users", {website: website, username: user_name, password: hashed_password})
    },
    updateData: function(){},
    deleteData: function(user_id){
        return axios.delete("api/users" + user_id)
    }
}
