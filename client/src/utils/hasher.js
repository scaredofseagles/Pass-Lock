const bcrypt = require('bcryptjs')
const API = require('./API')

const Hasher = (website, user_name, password) => {
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, function(err, hash){
            if (err){
                console.log('Oops!', err)
            } else{
                console.log('Success!', hash)
                API.sendData(website, user_name, hash)
            }
        })

        if (err){
            console.log('Oops! No salt', err)
        }
    })
}


module.exports = Hasher