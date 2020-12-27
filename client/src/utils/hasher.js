var bcrypt = require('bcryptjs')

const Hasher = password => {
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, function(err, hash){
            if (err){
                console.log('Oops!', err)
            } else{
                console.log('Success!', hash)
            }
        })

        if (err){
            console.log('Oops! No salt', err)
        }
    })
}

module.exports = Hasher