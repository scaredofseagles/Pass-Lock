import API from './API'
const bcrypt = require('bcryptjs')


const Hash_Me = (password, website, user_name) => {
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, async function(err, hash){
            if (err){
                console.log('Oops!', err)
            } else{
                console.log('Success!', hash)
                let result = await API.sendData(hash, website, user_name)
                console.log(result)
            }
        })

        if (err){
            console.log('Oops! No salt', err)
        }
    })
}


export default Hash_Me